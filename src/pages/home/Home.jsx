import React from 'react'
import Card from '../../components/card/Card'
// import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import { Cart } from '../../components/cart/Cart'
import { products } from '../../source.js'
import FilterListIcon from '@mui/icons-material/FilterList';








const Home = () => {







    return (

        <div className='home'>
            <Sidebar />

            <div className="homeContainer">
                {/* <Navbar /> */}


                <div className="cartAndDishes">


                    <div className="dishes">
                        <div className="filter"><div className="left"><FilterListIcon />Filter : <span className='icon'><select>
                            <option value="0">Select</option>
                            <option value="1">Price</option>
                            <option value="2">Rating</option>

                        </select></span></div>
                            <div className="right"> <p className='sort'>Sorted By:  <span> <select>
                                <option value="0">Select </option>
                                <option value="1">Starter</option>
                                <option value="2">Lunch</option>
                                <option value="3">Dinner</option>
                                <option value="4">Breakfast</option>
                                <option value="5">Desert</option>

                            </select></span>  </p></div>
                        </div>



                        {products.map((item) => {
                            return <Card

                                title={item.name}
                                price={item.price}
                                key={item.id}
                                item={item}
                                img={item.img}
                                quantity={item.quantityOfFood}
                                back={item.backgroundColor}

                            />
                        })}

                    </div>

                    <div className="cart">



                        <Cart />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
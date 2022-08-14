import React from 'react'
import { useCart } from 'react-use-cart';
import './card.scss'





const Card = (props) => {

    const { addItem } = useCart();



    return (
        <>



            <div className="card" style={{ backgroundColor: props.back }}>
                <div className="top">
                    <div className="rating">4.2 ⭐</div>
                    <div className="heart">❤️</div>
                </div>
                <div className="center">
                    <div className="img">
                        <img src={props.img} alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="title">
                        {props.title}   <span>{props.quantity}</span>
                        <h1 className="price">₹{props.price}</h1>
                    </div>
                    <button className='addButton' onClick={() => { addItem(props.item) }}>➕</button>



                </div>
            </div>

        </>
    )
}

export default Card
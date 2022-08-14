import React from 'react'
import { useCart } from "react-use-cart";
import './checkout.scss'

const Checkout = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <p className='titleCheckout'>Your cart is empty!!!</p>;

    return (
        <div className='checkoutPage'>
            <div className="caartCheckout">
                <div className="topCheckout"> <h1>My Order ({totalUniqueItems})</h1></div>

                <ul>
                    {items.map((item) =>
                        <li>
                            <div className="centerCheckout">
                                <div className="leftCheckout">
                                    <img src="https://media.istockphoto.com/photos/rice-in-a-bowl-on-a-white-background-picture-id860931464?k=20&m=860931464&s=612x612&w=0&h=Q5ADqpZbQbVzm3YkNwbyhn023S64em9w08O0xg0b0KE=" alt="" />
                                    <div className="title">{item.name}<p>{item.quantityOfFood}</p></div>
                                </div>
                                <div className="rightCheckout">
                                    <div className="adddelCheckout">
                                        <button className="addCheckout" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span className="quantiCheckout">{item.quantity}</span>
                                        <button className="delCheckout" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button> </div>



                                </div>
                                <div className="priceCheckout">₹{item.quantity * item.price}  <button onClick={() => removeItem(item.id)}>x</button></div>

                            </div>
                        </li >)
                    }
                </ul >
                <div className="bottomCheckout">

                    <div className="pay">Pay ₹{cartTotal}</div>
                </div>


            </div >
            );




        </div>
    )
}

export default Checkout
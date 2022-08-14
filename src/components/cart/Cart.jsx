import { useCart } from "react-use-cart";
import './cart.scss'
import { Link } from 'react-router-dom';



export const Cart = () => {


    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <p className="cartTitle">Your cart is empty!!!</p>;

    return (
        <div className="caart">
            <div className="top"> <h1>My Order ({totalUniqueItems})</h1></div>
            <hr />
            <ul>
                {items.map((item, index) =>
                    <li key={index}>
                        <div className="center">
                            <div className="left">
                                <img src="https://media.istockphoto.com/photos/rice-in-a-bowl-on-a-white-background-picture-id860931464?k=20&m=860931464&s=612x612&w=0&h=Q5ADqpZbQbVzm3YkNwbyhn023S64em9w08O0xg0b0KE=" alt="" />
                                <div className="title">{item.name}<p>{item.quantityOfFood}</p></div>
                            </div>
                            <div className="right">
                                <div className="adddel">
                                    <button className="add" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span className="quanti">{item.quantity}</span>
                                    <button className="del" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>


                            </div>
                            <div className="price">₹{item.quantity * item.price} <span className="clear"> <button onClick={() => removeItem(item.id)}>x</button></span></div>

                        </div></li >)
                }
            </ul >
            <div className="bottom">
                <div className="total">
                    <h1 className="totalTitle">Total</h1>
                    <div className="totalPrice">₹{cartTotal}</div>
                </div>
                <div className="checkout"><Link to="/checkout" style={{ textDecoration: "none" }} ><span >CHECKOUT</span>  </Link> </div>
            </div>


        </div >
    );

}


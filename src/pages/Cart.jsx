import React from 'react';
import '../styles/Cart.css';

function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

    return (
        <div className="cart">
            <h1>Your Basket</h1>
            {cart.length === 0 ? (
                <p className="cart-empty">Your basket is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                                <button className="remove-button" onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className="cart-total">
                    <h2>Total: ${totalPrice.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
}

export default Cart;

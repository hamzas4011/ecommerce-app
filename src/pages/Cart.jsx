import React from 'react';
import '../styles/Cart.css';

function Cart({ cart }) {
    return (
        <div className="cart">
            <h1>Your Basket</h1>
            {cart.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;

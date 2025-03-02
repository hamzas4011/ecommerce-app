import React from "react";
import "../styles/Cart.css";

function Cart({ cart, setCart }) {
    const updateQuantity = (item, amount) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.name === item.name
                    ? { ...cartItem, quantity: Math.max(cartItem.quantity + amount, 1) }
                    : cartItem
            )
        );
    };

    const removeFromCart = (item) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== item.name));
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")), 0);

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
                                <p>Price: {item.price}</p>
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={() => updateQuantity(item, -1)}>-</button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button className="quantity-btn" onClick={() => updateQuantity(item, 1)}>+</button>
                                </div>
                                <p>Subtotal: ${(item.quantity * parseFloat(item.price.replace("$", ""))).toFixed(2)}</p>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item)}>❌</button>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className="cart-footer">
                    <h2>Total: ${totalPrice.toFixed(2)}</h2>
                    <div className="cart-actions">
                        <button className="continue-shopping" onClick={() => window.location.href = "/menu"}>🛍️ Continue Shopping</button>
                        <button className="checkout-btn" onClick={() => alert("Proceeding to checkout...")}>✅ Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;

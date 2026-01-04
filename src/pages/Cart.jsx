import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart({ cart, setCart }) {
    const navigate = useNavigate();

    const updateQuantity = (item, amount) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + amount) }
                    : cartItem
            )
        );
    };

    const removeFromCart = (item) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace(/[^\d.]/g, "")), 0);

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }
        alert("Payment successful! Thank you for your purchase.");
        setCart([]); 
        localStorage.removeItem("cart"); 
    };

    return (
        <main className="cart-wrapper" role="main" aria-label="Shopping cart">
            <div className="cart">
                <h1>Your Basket</h1>
                {cart.length === 0 ? (
                    <p className="cart-empty" role="status" aria-live="polite">Your basket is empty.</p>
                ) : (
                    <>
                        <div className="cart-items" role="list" aria-label="Cart items">
                            {cart.map((item, index) => (
                                <div key={item.id || index} className="cart-item" role="listitem" aria-label={`${item.name}, quantity: ${item.quantity}`}>
                                    <img src={item.image} alt={`${item.name} product image`} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h2>{item.name}</h2>
                                        <p>Price: <span aria-label={`Unit price: ${item.price}`}>{item.price}</span></p>
                                        <div className="quantity-controls" role="group" aria-label={`Quantity controls for ${item.name}`}>
                                            <button 
                                                className="quantity-btn" 
                                                onClick={() => updateQuantity(item, -1)}
                                                aria-label={`Decrease quantity of ${item.name}`}
                                                disabled={item.quantity <= 1}
                                            >
                                                <span aria-hidden="true">-</span>
                                            </button>
                                            <span className="quantity" aria-label={`Current quantity: ${item.quantity}`}>{item.quantity}</span>
                                            <button 
                                                className="quantity-btn" 
                                                onClick={() => updateQuantity(item, 1)}
                                                aria-label={`Increase quantity of ${item.name}`}
                                            >
                                                <span aria-hidden="true">+</span>
                                            </button>
                                        </div>
                                        <p>Subtotal: <span aria-label={`Subtotal: $${(item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ""))).toFixed(2)}`}>${(item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ""))).toFixed(2)}</span></p>
                                    </div>
                                    <button 
                                        className="remove-button" 
                                        onClick={() => removeFromCart(item)}
                                        aria-label={`Remove ${item.name} from cart`}
                                    >
                                        <span aria-hidden="true">❌</span>
                                        <span className="sr-only">Remove</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-footer" role="region" aria-label="Cart summary">
                            <h2>Total: <span aria-label={`Total price: $${totalPrice.toFixed(2)}`}>${totalPrice.toFixed(2)}</span></h2>
                            <div className="cart-actions">
                                <button 
                                    className="continue-shopping" 
                                    onClick={() => navigate("/menu")}
                                    aria-label="Continue shopping"
                                >
                                    <span aria-hidden="true">🛍️</span> Continue Shopping
                                </button>
                                <button 
                                    className="checkout-btn" 
                                    onClick={handleCheckout}
                                    aria-label="Proceed to checkout"
                                >
                                    <span aria-hidden="true">✅</span> Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

export default Cart;

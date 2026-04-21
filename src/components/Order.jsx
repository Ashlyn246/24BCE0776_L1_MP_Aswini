import React, { useState } from "react";
import "./Order.css";

function Order_24BCE0776_Aswini({ cart, setCart }) {

  const [showPopup, setShowPopup] = useState(false);

  const increase = (item) => {
    const updated = cart.map(c =>
      c.name === item.name
        ? { ...c, quantity: c.quantity + 1 }
        : c
    );
    setCart(updated);
  };

  const decrease = (item) => {
    const existing = cart.find(c => c.name === item.name);

    if (existing.quantity === 1) {
      setCart(cart.filter(c => c.name !== item.name));
    } else {
      const updated = cart.map(c =>
        c.name === item.name
          ? { ...c, quantity: c.quantity - 1 }
          : c
      );
      setCart(updated);
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2>🛒 Your Order</h2>

      {cart.length === 0 ? (
        <p>No items added 😔</p>
      ) : (
        <div className="cart">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              
              {/* IMAGE */}
              <img src={item.img} alt={item.name} />

              {/* DETAILS */}
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Total: ₹{item.price * item.quantity}</p>

                {/* QUANTITY */}
                <div className="qty-controls">
                  <button onClick={() => decrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item)}>+</button>
                </div>
              </div>
            </div>
          ))}

          <h2 className="total">Grand Total: ₹{total}</h2>

          <button className="order-btn" onClick={() => setShowPopup(true)}>
            Order Now
          </button>
        </div>
      )}

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>🎉 Order Placed!</h2>
            <p>Total Amount: <strong>₹{total}</strong></p>
            <p>Thank you for ordering 😋</p>

            <button onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order_24BCE0776_Aswini;
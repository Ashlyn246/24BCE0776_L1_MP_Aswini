import React from "react";
import "./Menu.css";

// IMAGES
import paneer from "../assets/images/paneer.jpg";
import dosa from "../assets/images/dosa.png";
import idli from "../assets/images/idli.avif";
import meals from "../assets/images/meals.jpg";
import friedrice from "../assets/images/friedrice.jpg";
import noodles from "../assets/images/noodles.jpg";
import poratta from "../assets/images/poratta.jpg";

import watermelon from "../assets/images/watermelon.jpg";
import lemon from "../assets/images/lemon.jpg";
import mojito from "../assets/images/mojito.avif";

import icecream from "../assets/images/icecream.jpg";
import gulabjamun from "../assets/images/gulabjamun.jpg";
import falooda from "../assets/images/falooda.jpg";
import custard from "../assets/images/custard.jpg";
import tiramisu from "../assets/images/tiramisu.avif";

function Menu_24BCE0776_Aswini({ cart, setCart }) {

  // ➕ ADD ITEM
  const addItem = (item) => {
    const existing = cart.find(c => c.name === item.name);

    if (existing) {
      const updated = cart.map(c =>
        c.name === item.name
          ? { ...c, quantity: c.quantity + 1 }
          : c
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // ➖ REMOVE ITEM / DECREASE
  const removeItem = (item) => {
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

  // MENU DATA
  const mainCourse = [
    { name: "Paneer Butter Masala", price: 300, img: paneer },
    { name: "Masala Dosa", price: 120, img: dosa },
    { name: "Idli Sambar", price: 80, img: idli },
    { name: "South Indian Meals", price: 180, img: meals },
    { name: "Veg Fried Rice", price: 150, img: friedrice },
    { name: "Veg Noodles", price: 140, img: noodles },
    { name: "Poratta" , price: 30, img: poratta},
  ];

  const drinks = [
    { name: "Watermelon Juice", price: 90, img: watermelon },
    { name: "Lemon Juice", price: 80, img: lemon },
    { name: "Mint Mojito", price: 120, img: mojito },
  ];

  const desserts = [
    { name: "Ice Cream", price: 100, img: icecream },
    { name: "Gulab Jamun", price: 90, img: gulabjamun },
    { name: "Falooda", price: 130, img: falooda },
    { name: "Fruit Custard", price: 110, img: custard },
    { name: "Tiramisu", price: 180, img: tiramisu },
  ];

  const renderSection = (title, items) => (
    <div>
      <h2 className="menu-title">{title}</h2>

      <div className="card-container">
        {items.map((item, index) => {
          const cartItem = cart.find(c => c.name === item.name);
          const qty = cartItem ? cartItem.quantity : 0;

          return (
            <div className="menu-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              {qty === 0 ? (
                <button onClick={() => addItem(item)}>
                  Add 🍽
                </button>
              ) : (
                <div className="qty-controls">
                  <button onClick={() => removeItem(item)}>-</button>
                  <span>{qty}</span>
                  <button onClick={() => addItem(item)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1>🥗 Paradise Menu</h1>
      <p className="quote">"Pure Veg, Pure Taste, Pure Happiness"</p>

      {renderSection("🍛 Main Course", mainCourse)}
      {renderSection("🍹 Drinks", drinks)}
      {renderSection("🍨 Desserts", desserts)}
    </div>
  );
}

export default Menu_24BCE0776_Aswini;
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar_24BCE0776_Aswini() {
  return (
    <nav className="navbar">
      <h2>🍽 PARADISE</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Profile</Link>
        <Link to="/spin">Offers 🎉</Link>
      </div>
    </nav>
  );
}

export default Navbar_24BCE0776_Aswini;
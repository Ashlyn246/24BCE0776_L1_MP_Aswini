import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// IMAGES
import hero from "../assets/images/hero.jpg";
import biryani from "../assets/images/biriyani.avif";
import pizza from "../assets/images/pizza.jpg";
import burger from "../assets/images/burger.jpg";
import dessert from "../assets/images/dessert.avif";

function Home_24BCE0776_Aswini() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <img
          src={hero}
          alt="restaurant"
          className="hero-img"
        />
        <div className="hero-text">
          <h1>🍽 Paradise Restaurant</h1>
          <p>"Where every bite feels like heaven"</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container">
        <h2>Welcome to Paradise</h2>
        <p className="quote">
          "Good food is the foundation of genuine happiness."
        </p>

        {/* FEATURES */}
        <div className="features">
          <div className="feature-card">
            <h3>🍲 Fresh Ingredients</h3>
            <p>We use only the freshest and finest ingredients.</p>
          </div>

          <div className="feature-card">
            <h3>👨‍🍳 Expert Chefs</h3>
            <p>Our chefs are masters of culinary art.</p>
          </div>

          <div className="feature-card">
            <h3>🚀 Fast Delivery</h3>
            <p>Hot and tasty food delivered quickly.</p>
          </div>
        </div>

        {/* GALLERY */}
        <h2>Our Special Dishes</h2>
        <div className="gallery">
          <img src={biryani} alt="biryani" />
          <img src={pizza} alt="pizza" />
          <img src={burger} alt="burger" />
          <img src={dessert} alt="dessert" />
        </div>

        {/* PORTFOLIO */}
        <p style={{ marginTop: "20px" }}>
          👨‍💻 Visit My Portfolio:{" "}
          <Link to="/portfolio">Click Here</Link>
        </p>

        {/* 🤖 NEW FEATURE LINK */}
        <p style={{ marginTop: "20px" }}>
          🤖 Try Our Smart Food Recommender:{" "}
          <Link to="/mood">Explore Mood Chef 🍽</Link>
        </p>

        {/* 🎡 OPTIONAL: Spin Wheel Link */}
        <p style={{ marginTop: "20px" }}>
          🎉 Check Offers:{" "}
          <Link to="/spin">Spin & Win</Link>
        </p>

      </div>
    </div>
  );
}

export default Home_24BCE0776_Aswini;
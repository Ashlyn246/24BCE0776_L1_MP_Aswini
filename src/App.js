import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar_24BCE0776_Aswini from "./components/Navbar";
import Home_24BCE0776_Aswini from "./components/Home";
import Menu_24BCE0776_Aswini from "./components/Menu";
import Order_24BCE0776_Aswini from "./components/Order";
import Contact_24BCE0776_Aswini from "./components/Contact";
import Portfolio_24BCE0776_Aswini from "./components/Portfolio";
import SpinWheel from "./components/SpinWheel";
import MoodChef from "./components/MoodChef"; 

function App_24BCE0776_Aswini() {

  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar_24BCE0776_Aswini />

      <Routes>
        <Route path="/" element={<Home_24BCE0776_Aswini />} />
        <Route
          path="/menu"
          element={<Menu_24BCE0776_Aswini cart={cart} setCart={setCart} />}
        />
        <Route
          path="/order"
          element={<Order_24BCE0776_Aswini cart={cart} setCart={setCart} />}
        />
        <Route path="/contact" element={<Contact_24BCE0776_Aswini />} />
        <Route path="/portfolio" element={<Portfolio_24BCE0776_Aswini />} />
        <Route path="/spin" element={<SpinWheel />} />
        <Route path="/mood" element={<MoodChef />} />
      </Routes>
    </Router>
  );
}
export default App_24BCE0776_Aswini;
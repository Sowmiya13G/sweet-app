import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import "./App.css";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/sweets" onClick={toggleMenu}>Sweets</Link>
            </li>
            <li>
              <Link to="/savouries" onClick={toggleMenu}>Savouries</Link>
            </li>
            <li>
              <Link to="/bakery" onClick={toggleMenu}>Bakery</Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>Cart</Link>
            </li>
            <li>
              <Link to="/branches" onClick={toggleMenu}>Branches</Link>
            </li>
            <li>
              <Link to="/aboutUs" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/contactUs" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

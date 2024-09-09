import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <p className="home-text">Welcome to the home page!</p>
      <footer className="home-footer">
        <ul className="footer-list">
          <li >
            <Link className="footer-item" to="/sweets">Sweets</Link>
          </li>
          <li >
            <Link className="footer-item" to="/savouries">Savouries</Link>
          </li>
          <li >
            <Link className="footer-item" to="/bakery">Bakery</Link>
          </li>
          <li >
            <Link className="footer-item" to="/branches">Branches</Link>
          </li>
          <li >
            <Link className="footer-item" to="/aboutUs">About Us</Link>
          </li>
          <li >
            <Link className="footer-item" to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;

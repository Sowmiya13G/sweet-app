import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="home-footer">
      <ul className="footer-list">
        <li><Link className="footer-item" to="/sweets">Sweets</Link></li>
        <li><Link className="footer-item" to="/savouries">Savouries</Link></li>
        <li><Link className="footer-item" to="/bakery">Bakery</Link></li>
        <li><Link className="footer-item" to="/branches">Branches</Link></li>
        <li><Link className="footer-item" to="/aboutUs">About Us</Link></li>
        <li><Link className="footer-item" to="/contactUs">Contact Us</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;

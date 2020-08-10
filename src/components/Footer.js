import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link className="footer-link" to="/"><p>About Chinese Restaurant</p></Link>
        <Link className="footer-link" to="/">Features</Link>
        <Link className="footer-link" to="/menu">Restaurant Menu</Link>
        <Link className="footer-link" to="/">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-placeholder">
      <footer className="footer-wrapper">
        <div className="footer">
          <span>Copyright Block Club Calendar 2019</span>

          <div className="footer-links">
            <Link to="/about">About Block Club Calendar</Link>
            {/* No terms of use or privacy policy published
            <Link to="/">Terms of Use</Link>
            <Link to="/">Privacy Policy</Link> */}
          </div>
        </div>
     </footer>
    </div>
  );
};

export default Footer;

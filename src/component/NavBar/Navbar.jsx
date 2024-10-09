import { useState } from "react";
import "./navbar.css"; // Import the CSS file for styling
// import { profileImage } from "../../assets/Imagimport { useTheme } from "../Theme/ThemeContext";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2> OncaHeal</h2>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="navbar-profile">
        <img
          src={
            "https://res.cloudinary.com/dhykxy8c3/image/upload/v1728406243/v0da05nxds6hdxc7dqzw.png"
          }
          className="profile-pic"
        />
        <button className="book-now-btn">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;

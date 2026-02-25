/**CORE LIBRARIES IMPORT */
import React, { useState } from "react";
import { Link } from "react-router-dom";

/**ICONS IMPORT */
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed-header">

        {/* TOP BAR */}
        <div className="top-wrapper">
          <div className="top-bar">
            <div className="top-bar-inner">
              <p className="top-left-text">
                Trusted Provider of Premium Silica Sand & Minerals
              </p>
              <p className="top-right-text">
                <a href="tel:+919876523412">+91 98675 23412</a> |{" "}
                <a href="tel:+919844221356">+91 98442 21356</a>
              </p>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <header className="main-header">
          <div className="header-inner">

            {/* LOGO */}
            <div className="logo-text">
              <span className="logo-main">
                <Link to="/">Minereq</Link>
              </span>
            </div>

            {/* DESKTOP NAV */}
       <nav className="nav-links">
  {[
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },  
    { label: "Products", path: "/products" },
    { label: "Applications", path: "/applications" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact us", path: "/contact-us" },
  ].map((item, i) => (
    <Link key={i} to={item.path}>
      {item.label}
    </Link>
  ))}
</nav>

            {/* DESKTOP CTA */}
               <Link to="/product-enquiry">
            <button className="enquire-btn">
           Enquire Now
            </button></Link>

            {/* MOBILE MENU BUTTON */}
            <button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FiX /> : <FiMenu />}
</button>
          </div>
        </header>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FiX />
        </button>

        <div className="sidebar-logo">
  <Link to="/" onClick={() => setMenuOpen(false)}>
    Minereq
  </Link>
</div>

        <p className="sidebar-top-text">
          Trusted Provider of Premium Silica Sand & Minerals
        </p>

        <p className="sidebar-phone">
          <a href="tel:+919876523412">+91 98675 23412</a><br />
          <a href="tel:+919844221356">+91 98442 21356</a>
        </p>

       <nav className="sidebar-nav">
  {[
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Applications", path: "/applications" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact us", path: "/contact-us" },
  ].map((item, i) => (
    <Link
      key={i}
      to={item.path}
      onClick={() => setMenuOpen(false)}   
    >
      {item.label}
    </Link>
  ))}
</nav>

      <Link
  className="sidebar-cta"
  to="/product-enquiry"
  onClick={() => setMenuOpen(false)}
>
  Enquire Now
</Link>
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="sidebar-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import "./Header.css";
import logoPath from "../../../Assits/images/Logo/vector/default-monochrome-white.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // If we scrolled down, hide the header
      setShowHeader(false);
    } else {
      // If we scrolled up, show the header
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      setShowHeader(true); // Show header when Tab is pressed
      console.log(event.key);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", controlHeader);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lastScrollY]);

  return (
    <div className="header">
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark  pt-4 pb-4 ${
          showHeader ? "header-visible" : "header-hidden"
        } `}
      >
        <div className="container">
          <a className="navbar-brand logo" href="/">
            <img src={logoPath} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link" aria-current="page" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link" aria-current="page" to="/LogIn">
                  Log In
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link" aria-current="page" to="/SignIn">
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

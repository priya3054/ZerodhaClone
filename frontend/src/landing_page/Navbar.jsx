import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img 
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* IMPORTANT: REDIRECT TO DASHBOARD APP */}
            <li className="nav-item">
              <button
                className="nav-link btn"
                style={{ border: "none", background: "none" }}
                onClick={() => window.location.href = "http://localhost:3001/signup"}
              >
                Signup
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn"
                style={{ border: "none", background: "none" }}
                onClick={() => window.location.href = "http://localhost:3001/login"}
              >
                Login
              </button>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">

        {/* LOGO */}
        <a className="navbar-brand" href="http://localhost:3000">
          <img 
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>

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

            {/* 🔴 IMPORTANT: REDIRECT TO DASHBOARD APP */}
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
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#product">Product</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#support">Support</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
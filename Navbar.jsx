import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        {/* Project Title */}
        <Link className="navbar-brand fw-bold" to="/">
          Product Sentiment Analyzer
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/reviews">
                Reviews
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sentiment">
                Sentiment Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/trend">
                Trend Analytics
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/wordcloud">
                Word Cloud
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/comparison">
                Product Comparison
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/insights">
                AI Insights
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
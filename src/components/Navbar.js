import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const { cartItems } = useSelector((state) => state.carts);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-3 bg-white rounded">
      <Link className="navbar-brand" to="/">
        SHEY PIZZA
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Carts {cartItems.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { useSelector } from "react-redux";
function Navbar() {
  const { cartItems } = useSelector((state) => state.carts);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
      <a class="navbar-brand" href="#">
        SHEY PIZZA
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Carts {cartItems.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

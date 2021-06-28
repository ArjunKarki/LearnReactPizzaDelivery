import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const { cartItems } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.auth);
  console.log("nav", user);
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
            <div className="dropdown">
              <button
                style={{ backgroundColor: "#fff" }}
                className="dropdown-toggle mt-2 border-0 "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user?.name ? user.name : "login"}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" href="#">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/login"}>
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
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

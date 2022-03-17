import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

function Navbar({ logoImage }) {
  const [toggleShowNavbarNav, setToggleShowNavbarNav] = useState("");
  const { logoPath, logoDesc } = logoImage;

  function hamburgerMenuClickHandler() {
    setToggleShowNavbarNav((prevShow) => (prevShow ? "" : "show"));
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="nav-link" to="/">
          <img
            src={`${process.env.PUBLIC_URL}${logoPath}`}
            alt={logoDesc}
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          <span className="estore-name">3 on 3 Store</span>
        </Link>
      </div>

      <div className="search-box">
        <div className="input-group">
          <input type="text" className="input" placeholder="Search" />
          <button>
            <span className="material-icons input-group-icon">search</span>
          </button>
        </div>
      </div>

      <button
        className="hamburger"
        id="hamburger"
        onClick={() => hamburgerMenuClickHandler()}
      >
        <span className="material-icons">menu</span>
      </button>

      <ul className={`navbar-nav ${toggleShowNavbarNav}`} id="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <button className="btn btn-secondary bg-grey">Login</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            <button className="btn btn-secondary bg-grey">Signup</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/profile"
            className="nav-link nav-link-with-hover-reset dflex"
          >
            <span className="material-icons">person_outline</span>
            <span className="material-icons-txt">Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/wishlist"
            className="nav-link nav-link-with-hover-reset dflex"
          >
            <span className="material-icons">favorite_border</span>
            <span className="material-icons-txt">Wishlist</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/cart"
            className="nav-link nav-link-with-hover-reset  dflex"
          >
            <span className="material-icons-outlined">shopping_cart</span>
            <span className="material-icons-txt">Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };

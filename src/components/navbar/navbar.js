import { useState } from "react";
import "./navbar.styles.css";

// temporary fix will be replaced images context to avoid prop drilling
const logoImage = {
  logoPath: "/assets/logo/logo.svg",
  logoDesc: "Logo for 3 on 3 store",
};

function Navbar() {
  const [toggleShowNavbarNav, setToggleShowNavbarNav] = useState("");
  const { logoPath, logoDesc } = logoImage;

  function hamburgerMenuClickHandler() {
    setToggleShowNavbarNav((prevShow) => (prevShow ? "" : "show"));
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#" className="nav-link">
          <img
            src={`${process.env.PUBLIC_URL}${logoPath}`}
            alt={logoDesc}
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          <span className="estore-name">3 on 3 Store</span>
        </a>
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
          <a href="pages/login.html" className="nav-link">
            <button className="btn btn-secondary bg-grey">Login</button>
          </a>
        </li>
        <li className="nav-item">
          <a href="pages/signup.html" className="nav-link">
            <button className="btn btn-secondary bg-grey">Signup</button>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link nav-link-with-hover-reset dflex">
            <span className="material-icons">person_outline</span>
            <span className="material-icons-txt">Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="pages/wishlist.html"
            className="nav-link nav-link-with-hover-reset dflex"
          >
            <span className="material-icons">favorite_border</span>
            <span className="material-icons-txt">Wishlist</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="pages/cart.html"
            className="nav-link nav-link-with-hover-reset  dflex"
          >
            <span className="material-icons-outlined">shopping_cart</span>
            <span className="material-icons-txt">Cart</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };

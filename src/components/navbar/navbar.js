import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./navbar.styles.css";
import { logoImage } from "data";
import { useAuthContext, useWishlistContext, useCartContext } from "context";

function Navbar() {
  const [toggleNavbarNav, setToggleNavbarNav] = useState("");
  const { logoPath, logoDesc } = logoImage;
  const {
    authState: { loginStatus },
    authDispatch,
    logout,
  } = useAuthContext();
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlistContext();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCartContext();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("");

  function hamburgerMenuClickHandler() {
    setToggleNavbarNav((prevShow) => (prevShow ? "" : "show"));
  }

  function logoutClickHandler() {
    if (loginStatus) {
      authDispatch({ type: "LOGIN" });
      wishlistDispatch({ type: "UPDATE", wishlist: [] });
      cartDispatch({ type: "UPDATE", cart: [] });
      logout();
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="nav-link" to="/">
          <img
            src={logoPath}
            alt={logoDesc}
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          <span className="estore-name">3 on 3 Store</span>
        </Link>
      </div>
      {location.pathname.startsWith("/products") && (
        <div className="search-box">
          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="Search products..."
              value={searchParams.get("filter") || ""}
              onChange={(event) => {
                let filter = event.target.value;
                setFilter(filter);
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              }}
            />
            <button
              onClick={() => {
                setSearchParams({ filter });
              }}
            >
              <span className="material-icons input-group-icon">search</span>
            </button>
          </div>
        </div>
      )}

      <button
        className="hamburger"
        id="hamburger"
        onClick={() => hamburgerMenuClickHandler()}
      >
        <span className="material-icons">menu</span>
      </button>

      <ul className={`navbar-nav ${toggleNavbarNav}`} id="navbar-nav">
        {!loginStatus && (
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <button className="btn btn-secondary bg-grey">Login</button>
            </Link>
          </li>
        )}
        {!loginStatus && (
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              <button className="btn btn-secondary bg-grey">Signup</button>
            </Link>
          </li>
        )}
        {loginStatus && (
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <button
                className="btn btn-secondary bg-grey"
                onClick={() => logoutClickHandler()}
              >
                Logout
              </button>
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link
            to="/account/profile"
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
            <div className="badge-wrapper position-relative">
              <span className="material-icons"> favorite_border</span>
              {wishlist.length > 0  && (
                <div className="badge-status position-absolute badge-status-sm count-blue badge-count-color-pos  border-rounded-circle"></div>
              )}
            </div>{" "}
            <span className="material-icons-txt">Wishlist</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/cart"
            className="nav-link nav-link-with-hover-reset  dflex"
          >
            <div className="badge-wrapper position-relative">
              <span className="material-icons-outlined">shopping_cart</span>
              {cart.length > 0  && (
                <div className="badge-status position-absolute badge-status-sm count-blue badge-count-color-pos  border-rounded-circle"></div>
              )}
            </div>
            <span className="material-icons-txt">Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };

import "./card.styles.css";
import { Star } from "../star/star";
import { useLocation } from "react-router-dom";
import { useWishlistContext, useCartContext } from "context";
import { useState } from "react";
import { useAuthContext } from "context";

function Card({ product }) {
  const { _id, title, price, description, image, rating, quantity } = product;
  const [alertDisplay, setAlertDisplay] = useState("none");
  const { pathname } = useLocation();
  const { wishlistDispatch, checkInWishlist } = useWishlistContext();
  const { checkInCart, cartDispatch } = useCartContext();
  const {
    authState: { loginStatus },
  } = useAuthContext();

  function cartHandler(product) {
    if (loginStatus === true) {
      const isProductRemoveable = pathname === "/cart" ? "REMOVE" : "ADD";
      const type = checkInCart(product._id) ? isProductRemoveable : "ADD";
      cartDispatch({ type, product });

      if (type === "ADD") {
        setAlertDisplay("inline-block");
        setTimeout(() => setAlertDisplay("none"), 3000);
      }
    }

    if (loginStatus === false) {
      setAlertDisplay("inline-block");
      setTimeout(() => setAlertDisplay("none"), 3000);
    }
  }

  function wishlistHandler(product) {
    if (loginStatus === true) {
      const type = checkInWishlist(product._id) ? "REMOVE" : "ADD";
      wishlistDispatch({ type, product });
    }

    if (loginStatus === false) {
      setAlertDisplay("inline-block");
      setTimeout(() => setAlertDisplay("none"), 3000);
    }
  }

  return (
    <div className="card">
      <div className="alert alert-bg-success" style={{ display: alertDisplay }}>
        <div>
          <div className="alert-message">
            {loginStatus
              ? `${title}, added to cart.`
              : `Login First, to make it happen.`}
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt={description} className="card-img" />
      </div>
      <div className="card-body">
        <div className="card-heading">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle card-price">₹{price}</h6>
        </div>
        <p className="card-text">
          <Star marked={true} />({rating})
        </p>
        <span
          className=" card-img-dismiss-overlay"
          onClick={() => wishlistHandler(product)}
          style={{ color: checkInWishlist(_id) ? "red" : "white" }}
        >
          {"\u2764"}
        </span>
      </div>
      <div className="card-footer">
        <div className="dflex card-action-btns align-center-and-space-between flex-wrap">
          {checkInCart(_id) && pathname === "/cart" && (
            <div className="dflex align-center-and-space-between qunatity-action">
              <button
                className="btn btn-outline-secondary quantity-btn"
                onClick={() =>
                  cartDispatch({ type: "DECREASE_QUANTITY", product })
                }
              >
                <span className="material-icons">remove</span>
              </button>
              <div>Quantity: {quantity}</div>
              <button
                className="btn btn-outline-secondary quantity-btn"
                onClick={() =>
                  cartDispatch({ type: "INCREASE_QUANTITY", product })
                }
              >
                <span className="material-icons">add</span>
              </button>
            </div>
          )}
          <button
            className={`btn btn-secondary bg-grey dflex align-center-and-space-between ${
              checkInCart(_id) ? "primrary-background" : ""
            }`}
            onClick={() => cartHandler(product)}
          >
            <span className="material-icons-outlined">shopping_cart</span>
            {checkInCart(_id) && pathname === "/cart"
              ? "Remove fom cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export { Card };

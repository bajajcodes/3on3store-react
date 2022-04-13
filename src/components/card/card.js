import { Star } from "../star/star";
import { useLocation } from "react-router-dom";
import { useWishlistContext, useCartContext } from "context";
import { useState } from "react";
import { useAuthContext } from "context";
import { useWishlistHandler } from "./useWishlistHandler";
import { useCartHandler } from "./useCartHandler";

function Card({ product }) {
  const { _id, title, price, description, image, rating, qty } = product;
  const [alertDisplay, setAlertDisplay] = useState("none");
  const { pathname } = useLocation();
  const { checkInWishlist } = useWishlistContext();
  const { checkInCart } = useCartContext();
  const {
    authState: { loginStatus },
  } = useAuthContext();
  const [wishlistHandler] = useWishlistHandler(setAlertDisplay);
  const [updateItemHandler, cartHandler] = useCartHandler(setAlertDisplay);

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
                onClick={() => updateItemHandler(product, "decrement")}
              >
                <span className="material-icons">remove</span>
              </button>
              <div>Quantity: {qty}</div>
              <button
                className="btn btn-outline-secondary quantity-btn"
                onClick={() => updateItemHandler(product, "increment")}
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

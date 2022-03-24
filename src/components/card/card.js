import { useState } from "react";
import "./card.styles.css";
import { Star } from "../star/star";
import { useLocation } from "react-router-dom";
import { useWishlistContext } from "context";

function Card({ product, productInWishlist }) {
  const { title, price, description, image, rating } = product;
  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(productInWishlist || false);
  const { pathname } = useLocation();
  const { wishlistDispatch } = useWishlistContext();

  function addToCartHandler() {
    setInCart((prev) => !prev);
  }

  function wishlistHandler(product) {
    const type = inWishlist ? "REMOVE" : "ADD";
    setInWishlist((inWishlistToggle) => !inWishlistToggle); 
    wishlistDispatch({ type, product });
  }

  return (
    <div className="card">
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
          style={{ color: inWishlist ? "red" : "white" }}
        >
          {"\u2764"}
        </span>
      </div>
      <div className="card-footer">
        <div className="dflex card-action-btns align-center-and-space-between flex-wrap">
          {inCart && pathname === "/cart" && (
            <div className="dflex align-center-and-space-between qunatity-action">
              <button className="btn btn-outline-secondary quantity-btn">
                <span className="material-icons">add</span>
              </button>
              <div>Quantity: {0}</div>

              <button className="btn btn-outline-secondary quantity-btn">
                <span className="material-icons">remove</span>
              </button>
            </div>
          )}
          <button
            className={`btn btn-secondary bg-grey dflex align-center-and-space-between ${
              inCart ? "primrary-background" : ""
            }`}
            onClick={() => addToCartHandler()}
          >
            <span className="material-icons-outlined">shopping_cart</span>
            {inCart && pathname === "/cart" ? "Remove fom cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export { Card };

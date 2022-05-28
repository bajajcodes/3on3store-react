import { Star } from "../star/star";
import { useLocation, Link } from "react-router-dom";
import { useWishlistContext, useCartContext } from "context";
import { useWishlistHandler } from "./useWishlistHandler";
import { useCartHandler } from "./useCartHandler";

function Card({ product, isDescNeeded = false }) {
  const { _id, title, price, description, image, rating, qty } = product;
  const { pathname } = useLocation();
  const { checkInWishlist } = useWishlistContext();
  const { checkInCart } = useCartContext();
  const [wishlistHandler] = useWishlistHandler();
  const [updateItemHandler, cartHandler] = useCartHandler();

  return (
    <div className="card">
      <Link to={`/products/${product._id}`} key={product._id}>
        <img
          src={image}
          alt={description}
          className="card-img"
          loading="lazy"
        />
      </Link>

      <div className="card-body">
        <Link to={`/products/${product._id}`} key={product._id}>
          <div className="card-heading">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle card-price">₹{price}</h6>
          </div>
          {isDescNeeded && <p className="card-text">{description}</p>}
          <p className="card-text">
            <Star marked={true} />({rating})
          </p>
        </Link>
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
              : checkInCart(_id) && pathname !== "/cart"
              ? "Go to Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export { Card };

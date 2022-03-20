import { useState } from "react";
import "./card.styles.css";

function Card({product}){
    const {title, price, description, image} = product;
    const [inCart, setInCart] = useState(false);
    const [inWishlist, setInWishlist] = useState(false);

    function addToCartHandler(){
        setInCart(prev => !prev);
    }

    function addToWishlistHandler(){
        setInWishlist(prev => !prev);
    }

        return(
            <div className="card">
            <div>
                <img src={image}
                alt={description} className="card-img" />
            </div>
            <div className="card-body">
                <div className="card-heading">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle card-price">₹{price}</h6>
                </div>
                <p className="card-text">
                    {description}
                </p>
            </div>
            <div className="card-footer">
                <div className="dflex card-action-btns align-center-and-space-between flex-wrap">
                        <button className="btn btn-secondary bg-grey dflex align-center-and-space-between" onClick={() => addToCartHandler()}>
                            <span className="material-icons-outlined">
                                shopping_cart
                            </span>
                            { "Add to Cart"}
                        </button>
                        <button className={`btn btn-outline-secondary ${inWishlist ? "primrary-background" : ""}`} onClick={() => addToWishlistHandler()}>
                            {!inWishlist ? "Save to Wishlist" : "Remove from Wishlist"}
                        </button>
                </div>
            </div>
        </div>
        )
}

export {Card};
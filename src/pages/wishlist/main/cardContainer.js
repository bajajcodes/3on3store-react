import { Card } from "components";
import { useWishlistContext } from "context";

function CardContainer() {
  const { wishlistState } = useWishlistContext();
  const { wishlist } = wishlistState; console.log({wishlist, [wishlist.length] : wishlist.length});
  return (
    <div className="cards-container">
      {wishlist &&
        wishlist.map((product, index) => (
          <Card product={product} key={index} productInWishlist={true} />
        ))}
    </div>
  );
}

export { CardContainer };

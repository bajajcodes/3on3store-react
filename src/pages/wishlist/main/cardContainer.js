import { Card } from "components";
import { useWishlistContext } from "context";

function CardContainer() {
  const { wishlistState } = useWishlistContext();
  const { wishlist } = wishlistState;
  return (
    <div className="cards-container">
      {wishlist &&
        wishlist.map((product) => <Card product={product} key={product._id} />)}
    </div>
  );
}

export { CardContainer };

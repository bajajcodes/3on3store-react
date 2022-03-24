import { Card } from "components";
import { useWishlistContext } from "context";

function CardContainer() {
  const { wishlistState } = useWishlistContext();
  const { wishlist } = wishlistState;
  return (
    <div className="cards-container">
      {wishlist &&
        wishlist.map((product, index) => (
          <Card product={product} key={index} />
        ))}
    </div>
  );
}

export { CardContainer };

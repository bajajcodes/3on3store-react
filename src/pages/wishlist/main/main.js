import { CardContainer } from "./cardContainer";
import { useWishlistContext } from "context";

function Main() {
  const { wishlistState } = useWishlistContext();
  const { wishlist } = wishlistState;
  return (
    <main className="main">
      <h2 className="text-xl content-title">{wishlist.length ? `My Wishlist (${wishlist.length})` : `Your Wishlist is empty 😦`}</h2>
      <CardContainer />
    </main>
  );
}

export { Main };

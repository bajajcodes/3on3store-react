import { useWishlistContext } from "context";
import { useAuthContext } from "context";

export function useWishlistHandler(setAlertDisplay) {
  const {
    wishlistDispatch, checkInWishlist, addToWishlist, removeFromWishlist,
  } = useWishlistContext();
  const {
    authState: { loginStatus },
  } = useAuthContext();

  async function wishlistHandler(product) {
    if (loginStatus === true) {
      let wishlist = [];
      const type = checkInWishlist(product._id) ? "REMOVE" : "ADD";
      if (type === "REMOVE") {
        wishlist = await removeFromWishlist(product);
      } else if (type === "ADD") {
        wishlist = await addToWishlist(product);
      }
      wishlistDispatch({ type: "UPDATE", wishlist });
    }

    if (loginStatus === false) {
      setAlertDisplay("inline-block");
      setTimeout(() => setAlertDisplay("none"), 3000);
    }
  }

  return [wishlistHandler];
}

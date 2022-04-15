import { useWishlistContext } from "context";
import { useAuthContext, useAlert } from "context";

export function useWishlistHandler() {
  const {
    wishlistDispatch,
    checkInWishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlistContext();
  const {
    authState: { loginStatus },
  } = useAuthContext();
  const { alertDispatch, showAlert, hideAlert } = useAlert();

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

      if (type === "ADD") {
        showAlert(alertDispatch, "Added to Wishlist", product.title, "success");
        hideAlert(alertDispatch);
      } else {
        showAlert(
          alertDispatch,
          "Removed from Wishlist",
          product.title,
          "danger"
        );
        hideAlert(alertDispatch);
      }
    }

    if (loginStatus === false) {
      showAlert(
        alertDispatch,
        "Cannot add to Wishlist",
        product.title,
        "danger"
      );
      hideAlert(alertDispatch);
    }
  }

  return [wishlistHandler];
}

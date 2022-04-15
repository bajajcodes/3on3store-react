import { useWishlistContext } from "context";
import { useAuthContext, useAlert } from "context";

export function useWishlistHandler() {
  const {
    wishlistDispatch, checkInWishlist, addToWishlist, removeFromWishlist,
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

      if(type==="ADD"){
        showAlert(alertDispatch, product,  "Added to Wishlist", "success");
        hideAlert(alertDispatch);
      }else{
        showAlert(alertDispatch, product, "Removed from Wishlist", "danger");
        hideAlert(alertDispatch);
      }
    }

    if (loginStatus === false) {
      showAlert(alertDispatch, product, "Cannot add to Wishlist", "danger");
      hideAlert(alertDispatch);
    }
  }

  return [wishlistHandler];
}

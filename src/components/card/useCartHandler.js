import { useLocation } from "react-router-dom";
import { useCartContext } from "context";
import { useAuthContext, useAlert } from "context";

export function useCartHandler() {
  const {
    checkInCart,
    cartDispatch,
    addToCart,
    removeFromCart,
    updateItemInCart,
  } = useCartContext();
  const {
    authState: { loginStatus },
  } = useAuthContext();
  const { alertDispatch, showAlert, hideAlert } = useAlert();
  const { pathname } = useLocation();

  async function updateItemHandler(product, type) {
    let cart = [];
    if (type === "decrement" && product.qty === 1) {
      cart = await removeFromCart(product);
    } else {
      cart = await updateItemInCart(product, type);
    }
    cartDispatch({ type: "UPDATE", cart });
    if (type === "decrement") {
      showAlert(
        alertDispatch,
        product,
        `Quantity decreased to ${product.qty - 1}`,
        "info"
      );
      hideAlert(alertDispatch);
    } else {
      showAlert(
        alertDispatch,
        product,
        `Quantity increased to ${product.qty + 1}`,
        "info"
      );
      hideAlert(alertDispatch);
    }
  }

  async function cartHandler(product) {
    if (loginStatus === true) {
      const isProductRemoveable = pathname === "/cart" ? "REMOVE" : "ADD";
      const type = checkInCart(product._id) ? isProductRemoveable : "ADD";
      let cart = [];

      if (type === "ADD") {
        if (checkInCart(product._id)) {
          cart = await updateItemInCart(product, "increment");
        } else {
          cart = await addToCart(product);
        }
      } else {
        cart = await removeFromCart(product);
      }
      cartDispatch({ type: "UPDATE", cart });

      if (type === "ADD") {
        showAlert(alertDispatch, product, "Added to Cart", "success");
        hideAlert(alertDispatch);
      }

      if (type === "REMOVE") {
        showAlert(alertDispatch, product, "Removed from Cart", "danger");
        hideAlert(alertDispatch);
      }
    }

    if (loginStatus === false) {
      showAlert(alertDispatch, product, "Cannot add to Cart", "danger");
      hideAlert(alertDispatch);
    }
  }

  return [updateItemHandler, cartHandler];
}

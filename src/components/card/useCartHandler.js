import { useLocation } from "react-router-dom";
import { useCartContext } from "context";
import { useAuthContext } from "context";

export function useCartHandler(setAlertDisplay) {
  const {
    checkInCart, cartDispatch, addToCart, removeFromCart, updateItemInCart,
  } = useCartContext();
  const {
    authState: { loginStatus },
  } = useAuthContext();
  const { pathname } = useLocation();

  async function updateItemHandler(product, type) {
    let cart = [];
    if (type === "decrement" && product.qty === 1) {
      cart = await removeFromCart(product);
    } else {
      cart = await updateItemInCart(product, type);
    }
    cartDispatch({ type: "UPDATE", cart });
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
        setAlertDisplay("inline-block");
        setTimeout(() => setAlertDisplay("none"), 3000);
      }
    }

    if (loginStatus === false) {
      setAlertDisplay("inline-block");
      setTimeout(() => setAlertDisplay("none"), 3000);
    }
  }

  return [updateItemHandler, cartHandler];
}

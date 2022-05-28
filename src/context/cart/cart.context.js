import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./cart.reducer";
import {
  getCartSummary,
  getCartItems,
  addToCart,
  removeFromCart,
  updateItemInCart,
} from "./cart.helper";
import { useAuthContext } from "../auth";
import { useEffect, useState } from "react";

const CartContext = createContext(null);

function useCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartState, cartDispatch] = useReducer(reducerFunction, {
    cart,
    getCartSummary,
  });
  const { authState } = useAuthContext();

  function checkInCart(_id) {
    return cartState.cart.some((product) => product._id == _id);
  }

  useEffect(async () => {
    if (authState.loginStatus) {
      const cart = await getCartItems();
      setCart(cart);
    }
  }, [authState.loginStatus]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        getCartItems,
        checkInCart,
        addToCart,
        removeFromCart,
        updateItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCartContext };

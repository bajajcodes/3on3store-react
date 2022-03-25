import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./cart.reducer";
import { getCartSummary } from "./cart.helper";

const CartContext = createContext(null);

function useCartContext() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const cart = [];
  const [cartState, cartDispatch] = useReducer(reducerFunction, {
    cart,
    getCartSummary,
  });

  function checkInCart(_id) {
    return cartState.cart.some((product) => product._id == _id);
  }

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, checkInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCartContext };

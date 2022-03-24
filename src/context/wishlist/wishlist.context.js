import { useContext, createContext, useReducer } from "react";
import { getWishlist } from "./wishlist.helpers.";
import { wishlistReducerFunction } from "./wishlist.reducer";

const WishlistContext = createContext(null);

function useWishlistContext() {
  return useContext(WishlistContext);
}

function WishlistProvider({ children }) {
  const wishlist = getWishlist();
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducerFunction,
    { wishlist }
  );
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export { useWishlistContext, WishlistProvider };

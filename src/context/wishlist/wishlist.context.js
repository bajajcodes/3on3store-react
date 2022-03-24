import { useContext, createContext, useReducer } from "react";
import { wishlistReducerFunction } from "./wishlist.reducer";

const WishlistContext = createContext(null);

function useWishlistContext() {
  return useContext(WishlistContext);
}

function WishlistProvider({ children }) {
  const wishlist = []; 

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducerFunction,
    { wishlist }
  );

  function checkInWishlist(_id){
    return wishlistState.wishlist.find(product => product._id === _id);
  }
  
  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch, checkInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export { useWishlistContext, WishlistProvider };

import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { wishlistReducerFunction } from "./wishlist.reducer";
import { useAuthContext } from "../auth";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "./wishlist.context.helper";

const WishlistContext = createContext(null);

function useWishlistContext() {
  return useContext(WishlistContext);
}

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const { authState } = useAuthContext();

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducerFunction,
    { wishlist }
  );

  function checkInWishlist(_id) {
    return wishlistState.wishlist.find((product) => product._id === _id);
  }

  useEffect(async () => {
    if (authState.loginStatus) {
      const wishlist = await getWishlist();
      setWishlist(wishlist);
    }
  }, [authState.loginStatus]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        checkInWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export { useWishlistContext, WishlistProvider };

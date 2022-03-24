export function wishlistReducerFunction(state, { type, product }) {
  switch (type) {
    case "ADD":
      return {
        ...state,
        wishlist: addToWishlist(state.wishlist, product),
      };
    case "REMOVE":
      return {
        ...state,
        wishlist: removeFromWishlist(state.wishlist, product),
      };
    case "default":
      return state;
  }
}

function addToWishlist(wishlist, product) {
   return wishlist.find(wishlistProduct => wishlistProduct._id === product._id) ? wishlist : [...wishlist, product]
}

function removeFromWishlist(wishlist, product) {
  return [...wishlist].filter(wishlistProduct =>wishlistProduct._id !== product._id);
}

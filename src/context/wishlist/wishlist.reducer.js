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
  return [...wishlist, product];
}

function removeFromWishlist(wishlist, product) {
  let isFirst = false;
  return [...wishlist].filter(
    (wishlistProduct) =>{
        if(wishlistProduct._id !== product._id) {
          return wishlistProduct;
        }else{
          if(!isFirst){
            isFirst = true;
          }else{
            return wishlistProduct;
          }
        }
    }
  );
}

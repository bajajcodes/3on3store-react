export function wishlistReducerFunction(state, { type, product, wishlist }) {
  switch (type) {
    case "UPDATE":
      return {
        ...state,
        wishlist: wishlist,
      };
    case "default":
      return state;
  }
}

function reducerFunction(state, { type, product, cart }) {
  switch (type) {
    case "UPDATE":
      return { ...state, cart: cart };
    case "default":
      return state;
  }
}

export { reducerFunction };

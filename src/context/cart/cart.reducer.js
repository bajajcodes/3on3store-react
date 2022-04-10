function reducerFunction(state, { type, product, cart }) {
  switch (type) {
    case "UPDATE":
      return { ...state, cart: cart };
    case "ADD":
      return { ...state, cart: addToCart(state.cart, product) };
    case "REMOVE":
      return { ...state, cart: removeFromCart(state.cart, product) };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: increaseQuantity(state.cart, product),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: decreaseQuantity(state.cart, product),
      };
    case "default":
      return state;
  }
}

function addToCart(cart, product) {
  const products = [...cart];

  const inCartProduct = products.find(
    (productInCart) => productInCart._id === product._id
  );

  const productToAdd = inCartProduct
    ? { ...inCartProduct, quantity: inCartProduct.quantity + 1 }
    : { ...product, quantity: 1 };

  const filteredProducts = products.filter(
    (product) => product._id !== productToAdd._id
  );

  return [...filteredProducts, productToAdd];
}

function removeFromCart(cart, product) {
  return [...cart].filter((productInCart) => productInCart._id !== product._id);
}

function increaseQuantity(cart, product) {
  const products = [...cart];

  return products.map((prevStateProduct) =>
    prevStateProduct._id === product._id
      ? { ...prevStateProduct, quantity: prevStateProduct.quantity + 1 }
      : prevStateProduct
  );
}

function decreaseQuantity(cart, product) {
  const products = [...cart];

  if (product.quantity > 1) {
    return products.map((prevStateProduct) =>
      prevStateProduct._id === product._id
        ? { ...prevStateProduct, quantity: prevStateProduct.quantity + -1 }
        : prevStateProduct
    );
  }

  return products.filter(
    (prevStateProduct) => prevStateProduct._id !== product._id
  );
}

export { reducerFunction };

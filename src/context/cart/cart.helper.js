function getCartSummary(cart) {
  const discount = 0;
  const deliveryCharges = 49;
  const { numberOfProductsInCart, totalOfProductsInCart } =
    sumarizeCartValueandQuantity(cart);
  const totalValueOfCart = (
    totalOfProductsInCart +
    deliveryCharges -
    discount
  ).toFixed(2);
  return {
    totalOfProductsInCart: totalOfProductsInCart.toFixed(2),
    numberOfProductsInCart,
    discount,
    deliveryCharges,
    totalValueOfCart,
  };
}

function sumarizeCartValueandQuantity(cart) {
  return cart.reduce(
    (acc, { quantity, price }) => ({
      ...acc,
      numberOfProductsInCart: acc.numberOfProductsInCart + quantity,
      totalOfProductsInCart: acc.totalOfProductsInCart + quantity * price,
    }),
    {
      numberOfProductsInCart: 0,
      totalOfProductsInCart: 0,
    }
  );
}

export { getCartSummary };

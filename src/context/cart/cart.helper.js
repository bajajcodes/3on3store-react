import axios from "axios";

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
    (acc, { qty, price }) => ({
      ...acc,
      numberOfProductsInCart: acc.numberOfProductsInCart + qty,
      totalOfProductsInCart: acc.totalOfProductsInCart + qty * price,
    }),
    {
      numberOfProductsInCart: 0,
      totalOfProductsInCart: 0,
    }
  );
}

function getEncodedToken() {
  const token = localStorage?.getItem("token");
  return token ? JSON.parse(token) : null;
}

async function getCartItems() {
  try {
    const token = getEncodedToken();
    if (!token) {
      throw new Error("Token does not exsist");
    }
    const headers = {
      authorization: token,
    };
    const response = await axios.get("/api/user/cart", {
      headers,
    });
    const cart = response.data?.cart;
    return cart;
  } catch (exception) {
    console.error({exception});
  }
}

async function addToCart(product) {
  try {
    const token = getEncodedToken();
    if (!token) {
      throw new Error("Token does not exsist");
    }
    const headers = {
      authorization: token,
    };
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers,
      }
    );
    const cart = response.data?.cart;
    return cart;
  } catch (exception) {
    console.error(exception.response.data);
  }
}

async function removeFromCart(product) {
  try {
    const token = getEncodedToken();
    if (!token) {
      throw new Error("Token does not exsist");
    }
    const response = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: token,
      },
    });
    const cart = response.data?.cart;
    return cart;
  } catch (exception) {
    console.error(exception.response.data);
  }
}

async function updateItemInCart(product, type) {
  try {
    const token = getEncodedToken();
    if (!token) {
      throw new Error("Token does not exsist");
    }
    const headers = {
      authorization: token,
    };
    const response = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: type,
        },
      },
      {
        headers,
      }
    );
    const cart = response.data?.cart;
    return cart;
  } catch (exception) {
    console.error(exception.response.data);
  }
}

export {
  getCartSummary,
  getCartItems,
  addToCart,
  removeFromCart,
  updateItemInCart,
};

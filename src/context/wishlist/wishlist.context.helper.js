import axios from "axios";

function getEncodedToken() {
  const token = localStorage?.getItem("token");
  return token ? JSON.parse(token) : null;
}

async function addToWishlist(product) {
  try {
    const token = getEncodedToken();
    if (!token) {
      throw new Error("Token does not exsist");
    }
    const headers = {
      authorization: token,
    };
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers,
      }
    );
    const wishlist = response.data?.wishlist;
    return wishlist;
  } catch (exception) {
    console.error(exception.response.data);
  }
}

async function removeFromWishlist(product) {
  try {
    const token = getEncodedToken();
    if (!token) {
      throw new Error("Token does not exsist");
    }
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: token,
      },
    });
    const wishlist = response.data?.wishlist;
    return wishlist;
  } catch (exception) {
    console.error(exception.response.data);
  }
}

async function getWishlist() {
  try {
    const token = getEncodedToken();
    if (!token) {
      throw new Error("Token does not exsist");
    }
    const headers = {
      authorization: token,
    };
    const response = await axios.get("/api/user/wishlist", {
      headers,
    });
    const wishlist = response.data?.wishlist;
    return wishlist;
  } catch (exception) {
    console.error(exception);
  }
}

export { getWishlist, addToWishlist, removeFromWishlist };

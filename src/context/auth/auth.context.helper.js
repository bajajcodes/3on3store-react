import axios from "axios";

function cacheCredentialsToLocalStorage(response) {
  try {
    const {
      data: { encodedToken, foundUser, createdUser },
    } = response;
    if (createdUser) {
      const { _id, email, firstName, lastName } = createdUser;
      addToLocalStorage("userInfo", {
        _id,
        email,
        firstName,
        lastName,
        addressess: [],
      });
    }
    if (foundUser) {
      const addressess = getDefaultAddresses();
      const { _id, email, firstName, lastName } = foundUser;
      addToLocalStorage("userInfo", {
        _id,
        email,
        firstName,
        lastName,
        addressess,
      });
    }
    addToLocalStorage("token", encodedToken);
  } catch (exception) {
    return exception;
  }
}

function getDefaultAddresses() {
  return [
    {
      _id: uuid(),
      name: "SHubham Bajaj",
      address: "830 Vishkarma Mohala City Center Road",
      locality: "Near sita ram mandir",
      city: "Yamuna Nagar",
      pincode: "135001",
      state: "Haryana",
      number: "8950095195",
      isDefault: true,
    },
    {
      _id: uuid(),
      name: "Gourav Arora",
      address: "Vishnu nagar farakpur jagadhri workshop",
      locality: "Railway fatak",
      city: "Jagadhri railway workshop",
      pincode: "135002",
      state: "Haryana",
      number: "7404595195",
      isDefault: false,
    },
  ];
}

function addToLocalStorage(item, value) {
  localStorage.setItem(item, JSON.stringify(value));
}

function checkIsTokenExsist() {
  const token = localStorage.getItem("token");
  return token ? true : false;
}

function getuserInfo() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return userInfo;
}

function removeAddress(oldAddress) {
  const userInfo = getuserInfo();
  const addressess = userInfo.addressess;
  const updatedAddressess = addressess.filter(
    (address) => address._id !== oldAddress._id
  );
  const updateduserInfo = ({ ...userInfo, addressess: updatedAddressess });
  localStorage.setItem(
    "userInfo",
    JSON.stringify(updateduserInfo)
  );
  return updateduserInfo;
}

function saveAddress(newAddress) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo.addressess.find((address) => address._id === newAddress._id)) {
    userInfo.addressess = userInfo.addressess.map((address) =>
      address._id !== newAddress._id ? address : { ...address, ...newAddress }
    );
  } else {
    userInfo.addressess = userInfo.addressess.concat(newAddress);
  }
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  return userInfo;
}

async function logout() {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  } else {
    throw new Error("User is logged in, but token does not exsist.");
  }

  if (localStorage.getItem("userInfo")) {
    localStorage.removeItem("userInfo");
  } else {
    throw new Error("User is logged in, but user Info does not exsist.");
  }
}

async function login({ _email, _password }) {
  try {
    const body = {
      email: _email,
      password: _password,
    };

    const response = await axios.post("/api/auth/login", body);
    cacheCredentialsToLocalStorage(response);
    return { status: true, message: "login successful." };
  } catch (exception) {
    return { status: false, message: exception.message };
  }
}

async function signup({ _email, _password, _firstName, _lastName }) {
  try {
    const body = {
      email: _email,
      password: _password,
      firstName: _firstName,
      lastName: _lastName,
    };
    const response = await axios.post("/api/auth/signup", body);
    cacheCredentialsToLocalStorage(response);
    return { status: true, message: "signup successful." };
  } catch (exception) {
    return { status: false, message: exception.message };
  }
}

export { checkIsTokenExsist, getuserInfo, removeAddress, saveAddress, login, signup, logout };

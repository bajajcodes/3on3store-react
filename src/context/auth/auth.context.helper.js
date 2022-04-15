import axios from "axios";

function cacheCredentialsToLocalStorage(response) {
  try {
    const {
      data: { encodedToken, foundUser, createdUser },
    } = response;
    if (createdUser) {
      const { _id, email, firstName, lastName } = createdUser;
      addToLocalStorage("userInfo", { _id, email, firstName, lastName });
    }
    if (foundUser) {
      const { _id, email, firstName, lastName } = foundUser;
      addToLocalStorage("userInfo", { _id, email, firstName, lastName });
    }
    addToLocalStorage("token", encodedToken);
  } catch (exception) {
    return exception;
  }
}

function addToLocalStorage(item, value) {
  localStorage.setItem(item, JSON.stringify(value));
}

function checkIsTokenExsist() {
  const token = localStorage.getItem("token");
  return token ? true : false;
}

async function logout(){

  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  } else {
    throw new Exception("User is logged in, but token does not exsist.");
  }

  if (localStorage.getItem("userInfo")) {
    localStorage.removeItem("userInfo");
  } else {
    throw new Exception("User is logged in, but token does not exsist.");
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

export { checkIsTokenExsist, login, signup, logout };

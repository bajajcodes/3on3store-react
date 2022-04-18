import axios from "axios";
import { v4 as uuid } from "uuid";

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
      localiy: "Near sita ram mandir",
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
      localiy: "Railway fatak",
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

function isEmptyOrWhiteSpace(astring) {
  return astring.length === 0 || astring.includes(" ");
}

function togglePasswordVisibilityIcon(prev) {
  return prev === "visibility" ? "visibility_off" : "visibility";
}

function togglePasswordInputType(prev) {
  return prev === "password" ? "text" : "password";
}

async function login({ _email, _password }) {
  try {
    const body = {
      email: _email,
      password: _password,
    };

    const response = await axios.post("/api/auth/login", body);
    if (response.status !== 200) {
      throw new Error(`Invalid credentials.`);
    }
    cacheCredentialsToLocalStorage(response);
    return { status: true, message: "login successful." };
  } catch (exception) {
    return { status: false, message: exception.message };
  }
}

async function getUserLogin({ _email, _password }) {
  const isEmailCorrect = isEmptyOrWhiteSpace(_email) ? false : true;
  if (!isEmailCorrect) {
    return {
      loggedIn: false,
      info: {
        display: true,
        message: "Email is incorrect.",
      },
    };
  }

  const isPaswordCorrect = isEmptyOrWhiteSpace(_password) ? false : true;
  if (!isPaswordCorrect) {
    return {
      loggedIn: false,
      info: {
        display: true,
        message: "Password is incorrect.",
      },
    };
  }

  const { status, message } = await login({ _email, _password });
  if (!status) {
    return {
      loggedIn: false,
      info: {
        display: true,
        message: message,
      },
    };
  }
  return {
    loggedIn: true,
    info: {
      display: false,
      message: "",
    },
  };
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
    if (response.status !== 201) {
      throw new Error(`Invalid credentials.`);
    }
    cacheCredentialsToLocalStorage(response);
    return { status: true, message: "signup successful." };
  } catch (exception) {
    return { status: false, message: exception.message };
  }
}

async function getUserSignup({ _email, _password, _firstName, _lastName }) {
  const isEmailCorrect = isEmptyOrWhiteSpace(_email) ? false : true;
  if (!isEmailCorrect) {
    return {
      isSignuped: false,
      info: {
        display: true,
        message: "Email is incorrect.",
      },
    };
  }
  const _isFirstNameCorrect = isEmptyOrWhiteSpace(_firstName) ? false : true;
  if (!_isFirstNameCorrect) {
    return {
      isSignuped: false,
      info: {
        display: true,
        message: "First name is incorrect.",
      },
    };
  }
  const isLastNameCorrect = isEmptyOrWhiteSpace(_lastName) ? false : true;
  if (!isLastNameCorrect) {
    return {
      isSignuped: false,
      info: {
        display: true,
        message: "Last name is incorrect.",
      },
    };
  }
  const isPaswordCorrect = isEmptyOrWhiteSpace(_password) ? false : true;
  if (!isPaswordCorrect) {
    return {
      isSignuped: false,
      info: {
        display: true,
        message: "Password is incorrect.",
      },
    };
  }
  const { status, message } = await signup({
    _email,
    _password,
    _firstName,
    _lastName,
  });
  if (!status) {
    return {
      isSignuped: false,
      info: {
        display: true,
        message: message,
      },
    };
  }
  return {
    isSignuped: true,
    info: {
      display: false,
      message: "",
    },
  };
}

export {
  getUserLogin,
  getUserSignup,
  togglePasswordVisibilityIcon,
  togglePasswordInputType,
};

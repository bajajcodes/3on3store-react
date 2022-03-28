function reducerFunction(state, { type }) {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        loginStatus: true,
      };
    case "SIGNUP":
      return {
        ...state,
        signupStatus: true,
        loginStatus: true,
      };
    default:
      return state;
  }
}

export { reducerFunction };

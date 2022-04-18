function reducerFunction(state, { type }) {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        loginStatus: !state.loginStatus,
      };
    default:
      return state;
  }
}

export { reducerFunction };

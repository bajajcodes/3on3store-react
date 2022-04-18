function reducerFunction(state, { type, payload }) {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        loginStatus: !state.loginStatus,
      };
      case "UPDATE_USER_INFO":
        return{
          ...state,
          userInfo: payload,
        }
    default:
      return state;
  }
}

export { reducerFunction };

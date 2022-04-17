export function reducerFunction(state, { type, payload }) {
    switch (type) {
        case "SHOW_ALERT":
            return {
                ...state,
                title: payload.title,
                description: payload.description,
                type: payload.type,
                display: "flex"
            };
        case "HIDE_ALERT":
            return {
                ...state,
                title: "",
                description: "",
                type: "",
                display: "none"
            };
        default:
            return state;
    }
}

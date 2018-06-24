const initialState = {
    logged: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "logged":
            state = { ...state, logged: true }
        default:
            return state;
    }
    return state;
};
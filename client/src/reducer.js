export const initialState = {
    filtered: [],
    counter: 0,
};

const reducer = (state, action) => {
    console.log("This is action:", action);
    //console.log("This is state:", state);
    switch (action.type) {
        case "SET_FILTERED":
            return {
                ...state,
                filtered: action.filtered,

            };
        /* case "SET_USER":
          return {
            ...state,
            user: action.user,
          }; */
        case "SET_COUNTER":
            return {
                ...state,
                counter: action.counter,
            };
        default:
            return state;
    }
};

export default reducer;
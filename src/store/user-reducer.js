const initialState = null

const userReducer = (state = initialState, action) => {
    if (action.type === 'USER') {
        return action.payload;
    } 
    if (action.type === 'CLEAR') {
        localStorage.clear();
        return initialState;
    }

    return state;
}

export default userReducer;
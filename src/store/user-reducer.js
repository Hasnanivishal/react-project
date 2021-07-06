const initialState = null

const userReducer = (state = initialState, action) => {
    if (action.type === 'USER') {
        return action.payload;
    } 
    if (action.type === 'CLEAR') {
        return initialState;
    }

    return state;
}

export default userReducer;
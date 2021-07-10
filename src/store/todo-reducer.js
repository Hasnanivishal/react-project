const intialState = null;

const todoReducer = (state = intialState, action) => {
    if (action.type === 'LOAD_TODO') {
        return action.payload;
    }
    if (action.type === 'ADD_TODO') {
        return [...state, action.payload];
    }

    return state;
}

export default todoReducer;
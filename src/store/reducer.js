const initialState = {
    email: '',
    password: ''
};

const reducer = (state =  initialState, action) => {
    const newState = {...state};

    if (action.type === 'UPDATE_EMAIL') {
        newState.email = action.value;
    }
    if (action.type === 'UPPDATE_LOGIN') {
        return {...action.payload};
    }

    return newState;
}

export default reducer;
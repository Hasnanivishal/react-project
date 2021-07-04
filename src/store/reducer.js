const initialState = {
    email: '',
    password: '',
    users: []
};

const reducer = (state =  initialState, action) => {
    const newState = {...state};

    if (action.type === 'UPDATE_EMAIL') {
        newState.email = action.value;
    }
    if (action.type === 'UPPDATE_LOGIN') {
        return {...action.payload};
    }
    if (action.type === 'LOAD_USERS') {
        return {
            ...state,
            users: action.users
        }
    }

    return newState;
}

export default reducer;
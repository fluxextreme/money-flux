const INITIAL_STATE = {};

export const UserDetails = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_USER_DETAILS':
            return { ...state, userdetails: action.payload };
        default:
            return state;
    }
}

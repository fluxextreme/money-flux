const INITIAL_STATE = {}

export const Login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_WITH_EMAIL":
            return state;
        case "LOGIN_WITH_FACEBOOK":
            return state;
        case "LOGIN_WITH_GOOGLE":
            return state;
        default:
            return state;
    }
}
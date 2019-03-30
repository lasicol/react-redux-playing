const initState = null;

const authReducer = (state=initState, action)  => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log('login success');
            return {
                ...state,
                token: action.token
            }
        case "LOGIN_FAILED":
            console.log('login failed');
            return null;
        default:
            return state;
    }
}

export default authReducer;
import axios from 'axios'

export const loginAction = (username, password) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.post("http://localhost:3002/auth/login",{ "email": username, "password": password});
            console.log(res);
            dispatch({
                type: "LOGIN_SUCCESS",
                token: res.data.user.token
            })
        }
        catch (e) {
            dispatch({
                type: "LOGIN_FAILED",
            })
        }
    }
} 
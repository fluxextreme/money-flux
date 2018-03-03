import axios from 'axios';

export const loginWithEmail = (loginDetails) => {
    return (dispatch) => {
        console.log('Login POST Object::::::::::::::'+JSON.stringify(loginDetails));
        let url = 'http://localhost:8080/money-flux-dataservice/login-security-check';
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        return axios.post(url, "username=user@gmail.com&password=1234", axiosConfig).then((response) => {
            console.log('login success response::::' + JSON.stringify(response));
            return {
                type:"LOGIN_SUCCESS",
                payload: response.data
            }
        }, error => {
            console.log('login failure response::::' + JSON.stringify(error));
            return {
                type: "LOGIN_FAILURE",
                payload: error
            }
        });
    }
}

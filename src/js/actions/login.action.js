import axios from 'axios';

export const login = (loginDetails) => {
    return (dispatch) => {

        let url = 'http://localhost:8080/money-flux-dataservice/login';
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        return axios.post(url, loginDetails, axiosConfig).then((response) => {
            console.log('login success response::::' + JSON.stringify(response));
        }, error => {
            console.log('login failure response::::' + JSON.stringify(error));
        });
    }
}
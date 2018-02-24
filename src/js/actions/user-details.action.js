import axios from 'axios';

export const getUserDetailsById = userId => {
    return (dispatch, userId) => {
        return axios.get({
            url: '',
            method: GET
        }).then(response => {
            return response.data;
        });
    }
}
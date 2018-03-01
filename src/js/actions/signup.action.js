import axios from 'axios';

export const signupWithEmail=(user)=>{

    return (dispatch)=>{
        let url="http://localhost:8080/money-flux-dataservice/login-service/signup-with/email";
        let axiosConfig={
            headers:{
                "Content-Type":"application/json"
            }
        }
        return axios.post(url, user, axiosConfig).then(
            (response)=>{
                console.log("Signup Successfull");
                return {
                    type: "SIGNUP_SUCCESS",
                    payload: response.data
                }
            },
            (error)=>{
                console.log("Signup Failed"); 
                return {
                    type: "SIGNUP_FAILURE",
                    payload: error
                }
            }
        )
    }
}
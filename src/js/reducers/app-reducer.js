import { combineReducers } from 'redux';
import { UserDetails } from './user-details.reducer';
import { Login } from './login-reducer';
import { Signup } from './signup-reducer';

export default combineReducers({
    userDetails: UserDetails,
    login: Login,
    signup: Signup
});

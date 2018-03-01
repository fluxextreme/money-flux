import { signupWithEmail } from '../../actions/signup.action';
import { connect } from 'react-redux';
import SignupComponent from './signup.component';
import '../../../css/signup.css';

export const mapStateToProps = (state) => {
    return state;
}

export const mapDispatchToProps = (dispatch) => {
    return {
        doSignupWithEmail: (user) => {
            dispatch(signupWithEmail(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
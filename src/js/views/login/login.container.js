import { connect } from 'react-redux';
import LoginComponent from './login.component';
import { loginWithEmail } from '../../actions/login.action';

const mapStateToProps = (state) => {
  return state.userDetails;
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLoginWithEmail: (loginDetails)=>{
          dispatch(loginWithEmail(loginDetails));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

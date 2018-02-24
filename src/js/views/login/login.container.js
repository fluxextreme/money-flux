import { connect } from 'react-redux';
import LoginComponent from './login.component';
import { login } from '../../actions/login.action';

const mapStateToProps = (state) => {
  return state.userDetails;
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLoginRequest: (loginDetails)=>{
          dispatch(login(loginDetails));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

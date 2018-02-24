import DashboardComponent from './dashboard.component';
import { connect } from 'react-redux';
import { userDetails } from '../../actions/user-details.action';

const mapStateToProps = (state) => {
    return state.userDetails;
}

const mapDispatchToProps = (dispatch) => {
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
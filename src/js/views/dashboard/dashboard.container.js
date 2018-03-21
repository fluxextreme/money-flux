import DashboardComponent from './dashboard.component';
import { connect } from 'react-redux';
import { userDetails } from '../../actions/user-details.action';

const mapStateToProps = (state) => {
    console.log(JSON.stringify(ownProps));
    let dashboardData={
      userDetails: state.login
    }
    console.log('DashboardData:::::'+JSON.stringify(dashboardData));
    return dashboardData;
}

const mapDispatchToProps = (dispatch) => {
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

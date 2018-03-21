import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import '../../../css/login.css';

export class SignupComponent extends Component {
    render() {
        return (
          <div className="module-root-container-center">
          <div className="login-container">
            <div className="app-details-container"></div>
            <div className="login-form-container">
                <form>
                    <div className="app-title">Money Flux - SignUp with E-mail</div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input name="firstName" type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input name="lastName" type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input name="email" type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input name="phone" type="password" className="form-control" id="phone" />
                    </div>
                    <button type="submit" className="btn btn-success btn-login" onClick={()=>this.props.doSignupWithEmail()}>SignUp</button>
                    <div className="login-form-footer">
                    <Link className="login-link" to={{pathname:"/login", href:"#"}}>Login</Link>
                    </div>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

export default SignupComponent;

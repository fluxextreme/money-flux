import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../../../css/login.css';

export class LoginComponent extends Component {

    render() {
        return (
            <div className="login-container">
                <div className="login-form-panel">
                    <form>
                        <div className="app-title">Money Flux</div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" id="username" name="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="password" name="password"/>
                        </div>
                        <button type="submit" className="btn btn-success btn-login"
                        onClick={()=>{
                          this.props.doLoginWithEmail({});
                        }}>Login</button>
                    </form>
                </div>
                <div className="app-details-panel">
                    <Link className="registration-link" to={{pathname:"/signup", hash:"#"}}>Signup now</Link>
                </div>
            </div>
        );
    }
}

export default LoginComponent;

import React, { Component } from 'react';
import '../../../css/login.css';

export class LoginComponent extends Component {

    render() {
        return (
            <div class="login-container">
                <div className="login-form-panel">
                    <form action={this.props.doLoginRequest({})}>
                        <div class="app-title">Money Flux</div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" />
                        </div>
                        <button type="submit" class="btn btn-success btn-login">Login</button>
                    </form>
                </div>
                <div className="app-details-panel"></div>
            </div>
        );
    }
}

export default LoginComponent;
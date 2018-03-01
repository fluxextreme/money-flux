import React, { Component } from 'react';

export class SignupComponent extends Component {
    render() {
        return (
            <div className="signup-container">
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
                    <button type="submit" className="btn btn-success btn-login" onClick={this.props.doSignupWithEmail()}>SignUp</button>
                </form>
            </div>
        )
    }
}

export default SignupComponent;
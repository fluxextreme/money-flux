import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import LoginContainer from './views/login/login.container';
import SignupContainer from './views/signup/signup.container';
import DashboardContainer from './views/dashboard/dashboard.container';
import ExpensesContainer from './views/expenses/expenses.container';
import GroupExpensesContainer from './views/expenses/group-expenses.container';
import IndividualExpensesContainer from './views/expenses/individual-expenses.container';
import SettingsContainer from './views/settings/settings.container';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app full-height">
        <div className={this.setAppMainViewClass()}>
          <header className="app-header">
            <div className="app-header-menu-dock">
              <nav className="navbar navbar-expand">
                <a className="navbar-brand" href="#">Money Flux</a>
                <ul className="navbar-nav">
                  <li className={this.setNavItemClass('/dashboard')}>
                    <Link className="nav-link" to={{ pathname: '/dashboard', hash: '#' }}>Dashboard</Link>
                  </li>
                  <li className={this.setNavItemClass('/expenses')}>
                    <Link className="nav-link" to={{ pathname: '/expenses', hash: '#' }}>Expenses</Link>
                  </li>
                  <li className={this.setNavItemClass('/settings')}>
                    <Link className="nav-link" to={{ pathname: '/settings', hash: '#' }}>Settings</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="app-header-settings-dock">
              <Link className="float-right menu-anchor-btn" to={{ pathname: "/login" }}><i className="fa fa-sign-out app-icon" aria-hidden="true"></i>
                Logout</Link>
              <a className="float-right menu-anchor-btn"><i className="fa fa-cog app-icon" aria-hidden="true"></i>
                Settings</a>
            </div>
          </header>
          <div className="view-scroll-container">
              <Route component={DashboardContainer} path="/dashboard" />
              <Route component={ExpensesContainer} path="/expenses" />
              <Route component={SettingsContainer} path="/settings" />
          </div>
        </div>
        <Route component={LoginContainer} path="/login" />
        <Route component={SignupContainer} path="/signup" />
      </div>
    );
  }

  setAppMainViewClass = () => {
    return (this.props.location.pathname.includes('/login') || this.props.location.pathname.includes('/signup'))
      ? 'display-none' : 'app-main-view';
  }

  setNavItemClass = nav => {
    return this.props.location.pathname.includes(nav) ? 'nav-item active' : 'nav-item';
  }
}

export default App;

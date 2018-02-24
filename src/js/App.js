import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import LoginContainer from './views/login/login.container';
import DashboardComponent from './views/dashboard/dashboard.component';
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
                  <li className={this.setNavItemClass('/reports')}>
                    <Link className="nav-link" to={{ pathname: '/reports', hash: '#' }}>Reports</Link>
                  </li>
                </ul>
              </nav>
              <nav class="navbar navbar-expand">
                <div class="form-group app-config-menu-btn">
                  <label className="app-config-menu-lbl" for="sel1">Currency</label>
                  <select className="form-control" id="sel1">
                    <option>INR</option>
                    <option>DOLLARS</option>
                    <option>POUNDS</option>
                    <option>DINAR</option>
                  </select>
                </div>
                <div class="form-group app-config-menu-btn">
                  <label className="app-config-menu-lbl" for="sel1">Groups</label>
                  <select className="form-control" id="sel1">
                    <option>CORE</option>
                    <option>DEADMEN</option>
                  </select>
                </div>
                <div class="form-group app-config-menu-btn">
                  <label className="app-config-menu-lbl" for="sel1">Period</label>
                  <select className="form-control" id="sel1">
                    <option>INR</option>
                    <option>DOLLARS</option>
                    <option>POUNDS</option>
                    <option>DINAR</option>
                  </select>
                </div>
                <button className="btn btn-success apply-config-btn">Apply</button>
              </nav>
            </div>
            <div className="app-header-settings-dock">
              <Link className="float-right menu-anchor-btn" to={{pathname:"/login"}}><i className="fa fa-sign-out app-icon" aria-hidden="true"></i>
                Logout</Link>
              <a className="float-right menu-anchor-btn"><i className="fa fa-cog app-icon" aria-hidden="true"></i>
                Settings</a>
            </div>
          </header>
          <div className="view-scroll-container">
            <div className="view-container">
              <Route component={DashboardComponent} path="/dashboard" />
            </div>
          </div>
        </div>
        <Route component={LoginContainer} path="/login" />
      </div>
    );
  }

  setAppMainViewClass = () => {
    return this.props.location.pathname.includes('/login') ? 'display-none' : 'app-main-view';
  }

  setNavItemClass = nav => {
    return this.props.location.pathname.includes(nav) ? 'nav-item active' : 'nav-item';
  }
}

export default App;

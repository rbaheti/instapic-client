import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUsername } from '../actions';
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isError: false,
    }
    this.handleSetUsername = this.handleSetUsername.bind(this);
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.loginWithUser = this.loginWithUser.bind(this);
  }
  handleSetUsername(e) {
    this.setState({username: e.target.value});
  }
  handleSetPassword(e) {
    this.setState({password: e.target.value});
  }
  loginWithUser(e) {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password};
    axios.post('http://localhost:3030/login', user)
      .then((data) => {
        localStorage.setItem('localStorage-username', this.state.username);
        this.setState({isError: false});
        this.props.dispatch(updateUsername(this.state.username));
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({isError: true});
      });
  }

  render() {
    return (
      <form className="Login-form">
        <ul className="login-form-style">
          <li>
            <label>Username <span className="redcolor">*</span></label>
            <input type="text" className="field-long" onChange={this.handleSetUsername} value={this.state.username} />
          </li>
          <li>
            <label>Password <span className="redcolor">*</span></label>
            <input type="password" className="field-long" onChange={this.handleSetPassword} value={this.state.password} />
          </li>
          <Link to="/create-user">
            <li><label>Don't have an account? Sign up here.</label></li>
          </Link>
          {
            this.state.isError === true ?
            (<li><label className="redcolor">Username or Password incorrect. Please try again.</label></li>) : null
          }
          <li><input type="submit" onClick={this.loginWithUser} value="Sign In" /></li>
        </ul>
      </form>
    )
  }
}

export default connect()(Login);
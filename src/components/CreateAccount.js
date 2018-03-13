import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUsername } from '../actions';
import "./CreateAccount.css";
import "./Login.css";

class CreateAccount extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      isError: false,
    }
    this.handleSetUsername = this.handleSetUsername.bind(this);
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  handleSetUsername(e) {
    this.setState({username: e.target.value});
  }
  handleSetPassword(e) {
    this.setState({password: e.target.value});
  }
  createUser(e) {
    e.preventDefault();
    const userToSave = {username: this.state.username, password: this.state.password};
    axios.post('http://localhost:3030/newuser', userToSave)
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
      <form className="signup-form">
        <ul className="signup-form-style">
          <li>
            <label>Username <span className="redcolor">*</span></label>
            <input type="text" className="field-long" onChange={this.handleSetUsername} value={this.state.username} />
          </li>
          <li>
            <label>Password <span className="redcolor">*</span></label>
            <input type="password" className="field-long" onChange={this.handleSetPassword} value={this.state.password} />
          </li>
          {
            this.state.isError === true ?
            (<li><label className="redcolor">Username already exists. Please try another username.</label></li>) : null
          }
          <li><input type="submit" onClick={this.createUser} value="Sign Up" /></li>
        </ul>
      </form>
    )
  }
}

export default connect()(CreateAccount);
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import ImageFeed from './ImageFeed.js';
import CreateNewPost from './CreateNewPost';
import Login from './Login';
import CreateAccount from './CreateAccount';

class App extends Component {

  render() {
    // If a user is not logged in, all urls should redirect to /login page.
    // Second condition allows us to redirect only once instead of getting stuck in an infinite loop.
    // if (this.props.username === "" && this.props.location.pathname !== "/login") {
    //   return (<Redirect to="/login"/>);
    // }
    return (
      <Switch>
        <Route exact={true} path='/' component={ImageFeed} />
        <Route exact={true} path='/userpost/:username' component={ImageFeed}/>
        <Route exact={true} path='/newpost' component={CreateNewPost}/>
        <Route exact={true} path='/login' component={Login}/>
        <Route exact={true} path='/create-user' component={CreateAccount}/>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  };
};

// By using withRouter we get this.props.location.
export default withRouter(connect(mapStateToProps)(App));
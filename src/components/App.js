import React, { Component } from 'react';
import logo from '../logo.svg';
import Login from './Login';
import firebase from 'firebase';
import '../css/App.css';
import base, { firebaseApp } from "../base";

class App extends Component {

  state = {
    uid: null
  }

  authHandler = async authData => {

    // Set the user in state.
    this.setState({
      uid: authData.user.uid
    })
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  }

  render() {
    const logout = <button onClick={ this.logout }>Log Out</button>;

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { logout }
        </header>
      </div>
    );
  }
}

export default App;

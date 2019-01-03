import React from 'react';
import firebase from 'firebase';
import { firebaseApp } from '../base';
import LoginOptions from './LoginOptions';
import '../css/Login.scss';

class Login extends React.Component {

  componentDidMount() {
    this.authListener = firebase.auth().onAuthStateChanged(userData => {
      if (userData && userData.uid) {
        localStorage.setItem('user', userData.uid);
        this.props.history.push('/habits');
      } else {
        localStorage.removeItem('user'); // just in case
      }
    });
  }

  componentWillUnmount() {
    if (this.authListener) this.authListener = undefined;
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
  };

  render() {
    return (
      <div className='Login'>
        <h1>
          Add, Track, and Build Habits.
        </h1>
        <LoginOptions authenticate={ this.authenticate } />
      </div>
    )
  }
}

export default Login;

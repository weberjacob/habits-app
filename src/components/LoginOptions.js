import React from 'react';
import PropTypes from 'prop-types';

const LoginOptions = props => (
  <nav className="login">
    {/* <h2>Habit Checklist Login</h2> */}
    <p>Sign in to manage your habits</p>
    <button
      className="google"
      onClick={ () => props.authenticate('Google') }
    >
      Login with Google
    </button>
    <button
      className="github"
      onClick={ () => props.authenticate('Github') }
    >
      Login with Github
    </button>
    <button
      className="twitter"
      onClick={ () => props.authenticate('Twitter') }
    >
      Login with Twitter
    </button>
  </nav>
);

LoginOptions.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default LoginOptions;
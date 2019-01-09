import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faTwitter } from '@fortawesome/fontawesome-free-brands';

const LoginOptions = props => (
  <nav className="login">
    <p>Sign in to manage your habits</p>
    <button
      className="google"
      onClick={ () => props.authenticate('Google') }
    >
      Login with Google <FontAwesomeIcon icon={ faGoogle } />
    </button>
    <button
      className="github"
      onClick={ () => props.authenticate('Github') }
    >
      Login with Github <FontAwesomeIcon icon={ faGithub } />
    </button>
    <button
      className="twitter"
      onClick={ () => props.authenticate('Twitter') }
    >
      Login with Twitter <FontAwesomeIcon icon={ faTwitter } />
    </button>
  </nav>
);

LoginOptions.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default LoginOptions;
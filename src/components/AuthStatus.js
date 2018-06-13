import React from 'react';
import {
  withRouter
} from 'react-router-dom';

import AuthService from '../services/AuthService';

const AuthStatus = withRouter(({ history }) =>(
  AuthService.isAuthenticated ?
  (<p>
    Welcome! <button onClick={() => {
      AuthService.logout(() => history.push('/')) 
    }}>Sign out</button>
  </p>) : (
    <p>You are not logged in.</p>
  ) 
));

export default AuthStatus;
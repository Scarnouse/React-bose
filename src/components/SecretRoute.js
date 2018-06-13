import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

import AuthService from '../services/AuthService';
import Login from './Login';

const SecretRoute = ({component: Component, ...rest} ) => (
    <div>
        <Route {...rest} render={(props) => (
            AuthService.isAuthenticated ?
            <Component {...props} /> :
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )}/>
    </div>
);

export default SecretRoute;
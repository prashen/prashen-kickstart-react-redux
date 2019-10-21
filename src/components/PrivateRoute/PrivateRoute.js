import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // console.log('private', rest.auth, rest.auth !== null);
    return(
    <Route {...rest} render={(props) => (
        rest.auth !== null
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            // state: { from: props.location }
          }} />
    )} />
  )}

export default PrivateRoute;
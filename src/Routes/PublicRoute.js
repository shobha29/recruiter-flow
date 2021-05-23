import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function PublicRoute({component: Component, ...rest}) {
    return (
      <Route {...rest} render={props => (
          !localStorage.getItem('email') ?
              <Component {...props} />
          : <Redirect to="/timeline" />
      )} />
  );
  
  }
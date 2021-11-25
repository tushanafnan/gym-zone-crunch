import React from 'react';
import useAuth from './../../hooks/useAuth';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';



const PrivateRoute = ({ children, ...rest }) => {
    const { user , isLoading} = useAuth();
    if (isLoading) {
        return <h1> Loading... </h1>
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            ></Redirect>
          )
        }
      ></Route>
    );
  };
  
  export default PrivateRoute;

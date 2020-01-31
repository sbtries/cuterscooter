import React, { useGlobal } from "reactn";
import { Route, Redirect } from "react-router-dom";
import { userInfo } from "os";
import { addMinutes } from "date-fns";

const PrivateRoute = ({component: Component, redirect, ...rest}) => {
  const { 0: token } = useGlobal("token");

  return (
    <Route {...rest} render={(props) => (
      (token !== null)
      // && is admin
        ? <Component {...props} />
        : <Redirect to={redirect || "/"} />
    )} />
  )
}

export default PrivateRoute;

// get currently logged in userInfo, 
// see if they're an admin
// put in assignmen, check for token and if not admin 
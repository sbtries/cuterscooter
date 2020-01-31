import React, { useState, useEffect, useGlobal } from "reactn";

import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({component: Component, redirect, ...rest}) => {
  const { 0: token } = useGlobal("token");

  const { 0: isAdmin } = useGlobal("isAdmin")
  return (
    <Route {...rest} render={(props) => (
      (token !== null && isAdmin)
      // && is admin
        ? <Component {...props} />
        : <Redirect to={redirect || "/"} />
    )} />
  )
}
export default AdminRoute;

// get currently logged in userInfo, 
// see if they're an admin
// put in assignmen, check for token and if not admin 
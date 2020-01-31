import React, { useGlobal } from "reactn";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Logout = (props) => {
  const [token, setToken] = useGlobal("token");
  return (
    <>
      {(!token && props.redirect) && (
        <Redirect push to={props.redirect} />
      )}
      <Link onClick={() => setToken(null)}> Logout
              </Link>
    </>
  );
}

export default Logout;
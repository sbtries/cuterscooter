import React, { useState, useGlobal } from "reactn";
import { Redirect } from "react-router-dom";
import client from "../../api/client";

const LoginForm = (props) => {
  const [formState, setFormState] = useState({
    email: "email@email.com",
    password: "password123",
    // admin: false
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const { 1: setToken } = useGlobal("token");
  const { 1: setAdmin } = useGlobal("isAdmin");


  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await client.post(
      "/auth/login",
      formState
    );
    setToken(data.token);
    setAdmin(data.user.admin)
    // set isAdmin to data.profile.admin
    setLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit} class="container">
      {(loggedIn) && (
        (props.redirect) && (
          <Redirect push to={props.redirect} />
        )
      )}
      <div>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="E-mail"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Password..."
        />
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </form>
  );
};

export default LoginForm;
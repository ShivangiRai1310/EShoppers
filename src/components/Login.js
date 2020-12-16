import React, { useState } from "react";
import "./Login.css";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
      e.preventDefault();

      //Firebase sign in here
  }

  const register = e => {
      e.preventDefault();

      //Firebase register here
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={logo} alt="" />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} type="submit" className="login-signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to the EShopper's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login-registerButton">
          Create your EShoppers Account
        </button>
      </div>
    </div>
  );
}

export default Login;

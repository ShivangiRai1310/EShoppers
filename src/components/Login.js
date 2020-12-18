import React, { useState } from "react";
import "./Login.css";
import logo from "../media/logo.png";
import { Link, useHistory } from "react-router-dom";
import {auth} from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
      e.preventDefault();

      auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/');
        })
        .catch(error => alert(error.message))
      //Firebase sign in here
  }

  const register = e => {
      e.preventDefault();

      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          //creates user n returns an auth object thus successfully created a user
          if(auth){
            history.push('/');
          }
          //console.log(auth);
        })
        .catch(error => alert(error.message))
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

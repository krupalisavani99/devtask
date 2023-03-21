import React from "react";
import logo from "../icons/logo.svg";
import google from "../icons/google.svg";
import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";

const LoginForm = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <p className="titleText">
        some random text, some random <br />
        text, some random text, some random text
      </p>

      <nav class="slidemenu">
        <input
          type="radio"
          name="slideItem"
          id="slide-item-1"
          class="slide-toggle"
          checked
        />
        <label for="slide-item-1">
          <span>Login</span>
        </label>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-2"
          class="slide-toggle"
        />
        <label for="slide-item-2">
          <span>Signup</span>
        </label>
      </nav>

      <form className="form-container">
        <input
          className="input"
          type="text"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button className="btnLogin">LOGIN</button>

        <a className="forgotPass" href="/">
          Forgot Password?
        </a>
      </form>

      <p className="label-txt">or login with</p>

      <div className="links">
        <img src={google} alt="google" />

        <img src={facebook} alt="facebook" />

        <img src={twitter} alt="twitter" />
      </div>
      <div className="signup-link">
        <p>
          Don't have an account? <a href="/">Create new now!</a>
        </p>
        <p>
          By signing up, you are agree with our{" "}
          <a href="/">Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

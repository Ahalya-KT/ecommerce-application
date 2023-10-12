import { Button } from "@mui/material";
import React from "react";

function Login() {
  return (
    <div>
      <nav className="navbar">
        <p className="headings">Admin Templete</p>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Employee</a>
          </li>
          <li>
            <a href="#">Desgination</a>
          </li>
        </ul>
      </nav>

      <div className="loginpage">
        <h5 className="login-heading">login</h5>

        <form>
          <div className="login-section">
            <div className="login-textarea">
              <label>email address</label>
              <input className="input-box" placeholder="sample@123"></input>
            </div>

            <div className="login-textarea">
              <label>password</label>
              <input className="input-box" placeholder="password"></input>
              <p className="login-checkbox">Remember</p>
            </div>

            <div className="login-btn">
              <Button variant="contained">Login</Button>
              <p className="login-password">Forgot password</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

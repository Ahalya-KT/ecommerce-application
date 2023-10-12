import { Button, Checkbox } from "@mui/material";
import React from "react";
import Navlog from "../component/Navlog";


function Login() {
  return (
    <div>
      {/* <nav className="navbar">
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
      </nav> */}

     <Navlog/>

      <div className="loginpage">
        <h5 className="login-heading">login</h5>

        <form>
          <div className="login-section">
            <div className="login-textarea">
              <p className="login-label">email address</p>
              <p className="login-label">password</p>
            </div>

            <div className="login-textarea">
              <input className="input-box" placeholder="sample@123"></input>
              <input className="input-box" placeholder=".........."></input>
              <p className="login-checkbox">Remember</p>
              <div className="login-btn">
                <Button variant="contained">Login</Button>
                <p className="login-password"> You Forgot password</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

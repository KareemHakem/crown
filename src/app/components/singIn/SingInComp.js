import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

import "./SingInStyle.css";

export default function SingInComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [emailSingIn, setEmailSingIn] = useState("");
  const [passwordSingIn, setPasswordSinIn] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
  };

  const handleName = (e) => {
    setName(e.target.value); 
  };

  const handleEmailSingIn = (e) => {
    setEmailSingIn(e.target.value);
  };

  const handlePasswordSingIn = (e) => {
    setPasswordSinIn(e.target.value);
  };

  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmitSingIn = (e) => {
    e.preventDefault(e);
  };
 
  return (
    <div className="flex_2">
      <div className="form_1">
        <h1>I already have an account</h1>
        <p>Sign in With your Email and Password</p>
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <TextField
            onChange={(e) => handleEmail(e)}
            value={email}
            style={{
              width: 400,
              marginTop: 35,
              fontWeight: 100,
              fontSize: 30,
              fontFamily: "Open Sans Condensed",
            }}
            id="standard-password-input, input"
            className="font"
            label="email"
            type="email"
            autoComplete="current-password"
          />

          <TextField
            onChange={(e) => handlePassword(e)}
            value={password}
            style={{
              width: 400,
              marginTop: 35,
              fontWeight: 100,
              fontSize: 30,
              fontFamily: "Open Sans Condensed",
            }}
            id="standard-password-input"
            className="font"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <div>
            <Button
              style={{ outline: "none" }}
              className="btn-6"
              variant="outlined"
              color="#fff"
            >
              submit
            </Button>
            <Button
              style={{ marginLeft: 30 }}
              className="btn-7"
              variant="outlined"
              color="#fff"
            >
              sing in with
            </Button>
          </div>
        </form>
      </div>
      <div className="form_2">
        <h1>I don't have account</h1>
        <p>Create Account Using Email & Password</p>
        <form onSubmit={(e) => handleSubmitSingIn(e)} className="form">
          <TextField
            onChange={(e) => handleName(e)}
            value={name}
            style={{
              width: 400,
              marginTop: 40,
              fontWeight: 100,
              fontSize: 30,
              fontFamily: "Open Sans Condensed",
            }}
            id="standard-password-input, input"
            className="font"
            label="Name"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            onChange={(e) => handleEmailSingIn(e)}
            value={emailSingIn}
            style={{
              width: 400,
              appearance: "auto",
              marginTop: 40,
              fontWeight: 100,
              fontSize: 30,
              fontFamily: "Open Sans Condensed",
            }}
            id="standard-password-input, input"
            className="font"
            label="email"
            type="email"
            autoComplete="current-password"
          />
          <TextField
            onChange={(e) => handlePasswordSingIn(e)}
            value={passwordSingIn}
            style={{
              width: 400,
              marginTop: 40,
              fontWeight: 100,
              fontSize: 30,
              fontFamily: "Open Sans Condensed",
            }}
            id="standard-password-input, input"
            className="font"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            onChange={(e) => handlePasswordConfirm(e)}
            value={passwordConfirm}
            style={{
              width: 400,
              marginTop: 40,
              fontWeight: 100,
              fontSize: 30,
              fontFamily: "Open Sans Condensed",
            }}
            id="standard-password-input, input"
            className="font"
            label=" confirm Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            style={{ outline: "none" }}
            className="btn-6"
            variant="outlined"
            color="#fff"
          >
            sing Up
          </Button>
        </form>
      </div>
    </div>
  );
}

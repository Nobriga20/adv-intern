"use client";

import React, { useState } from "react";
import { registerUser } from "@/app/lib/registerUser";
import "./login.css";

const login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
async function handleClick(e: any) {
  e.preventDefault();
  console.log(name, email, password);
  try {
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      alert("Please enter valid credentials");
      return;
    }
    await registerUser(email, password, name);
  } catch (error: any) {
    console.log(error);
    if (error.code === "auth/email-already-in-use") {
      alert("Email is already in use.");
    } else if (error.code === "auth/invalid-email") {
      alert("Invalid email address.");
    } else if (error.code === "auth/weak-password") {
      alert("Password should be at least 6 characters.");
    } else if (error.code === "auth/missing-api-key") {
      alert("Firebase API key is missing. Please check your .env.local file.");
    } else if (error.code === "auth/invalid-api-key") {
      alert("Invalid Firebase API key. Please check your .env.local file.");
    } else {
      alert("An error occurred: " + error.message);
    }
  }
}
  return (
    <div className="login">
      {/* <img src={logo} className="login-logo" alt="" /> */}
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={(e) => handleClick(e)}>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="check-box" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;

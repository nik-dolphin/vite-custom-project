import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const Register = () => {
  const userData = JSON.parse(localStorage.getItem("vite-user"));
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    const userDetail = [];
    const user = {
      name,
      email,
      password,
    };
    if (userData !== null) {
      userDetail.push(...userData, user);
    } else {
      userDetail.push(user);
    }
    localStorage.setItem("vite-user", JSON.stringify(userDetail));
    navigate("/login");
  };
  return (
    <div className="parentForm">
      <div className="form">
        <h1 className="form-title">Register Form</h1>
        <input
          type="text"
          name="name"
          className="name"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="submit" onClick={createUser}>
          Submit
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
};

export default Register;

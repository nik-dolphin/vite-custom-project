import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const Login = ({ setToggleAuth }) => {
  const userData = JSON.parse(localStorage.getItem("vite-user"));
  const user = JSON.parse(localStorage.getItem("vite-login-user"));
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user !== null) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickSubmit = () => {
    const authToken = "dknfkjsfwrp923u434j29343hrkjn3kl4239084-2305%$5";
    const user = userData.find((item) => {
      return item.email === email && item.password === password;
    });
    if (user !== undefined) {
      const authUser = {
        name: user.name,
        email,
        authToken,
      };
      localStorage.setItem("vite-login-user", JSON.stringify(authUser));
      setToggleAuth(true);
      navigate("/dashboard");
    } else {
      alert("Wrong Credential");
    }
  };
  return (
    <div style={{ marginTop: "10em" }}>
      {user === null && (
        <div className="parentForm">
          <div className="form">
            <h1 className="form-title">Login Form</h1>
            <input
              type="text"
              name="email"
              className="email"
              value={email}
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="password"
              className="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="submit-button"
              onClick={handleClickSubmit}
            >
              SIGN IN
            </button>
            <div style={{ marginTop: "10px" }}>
              <a href="/">Forgot Password</a>
            </div>
            <div style={{ marginTop: "10px" }}>
              Don't have an account? <Link to="/register">Register</Link> now.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

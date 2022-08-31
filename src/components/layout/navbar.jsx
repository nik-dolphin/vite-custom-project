import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = ({ toggleAuth, setToggleAuth }) => {
  const user = JSON.parse(localStorage.getItem("vite-login-user"));

  const handleLogout = () => {
    localStorage.removeItem("vite-login-user");
    setToggleAuth(false);
  };

  useEffect(() => {
    if (user !== null) {
      setToggleAuth(true);
    } else {
      setToggleAuth(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <nav>
      <ul>
        <div className="nav-layout">
          <Link to="/" className="nav-link">
            Logo
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </div>
        <div className="nav-auth">
          {toggleAuth ? (
            <Link to="/login" className="nav-link" onClick={handleLogout}>
              {user !== null && user.name}
            </Link>
          ) : (
            <Link to="/login" className="nav-link">
              login
            </Link>
          )}
          <Link to="/register" className="nav-link">
            register
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

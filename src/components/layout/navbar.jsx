import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Tooltip from "../../extraui/tooltip";

const Navbar = ({ setToggleAuth }) => {
  const user = JSON.parse(localStorage.getItem("vite-login-user"));

  const handleLogout = () => {
    const result = confirm("Are you sure you want to logout?");
    if (result) {
      localStorage.removeItem("vite-login-user");
      setToggleAuth(false);
    }
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
          <Tooltip
            text="logout"
            child={
              <Link to="/login" className="nav-link" onClick={handleLogout}>
                {user !== null && user.name}
              </Link>
            }
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

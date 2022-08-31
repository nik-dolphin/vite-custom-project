import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("vite-login-user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {user !== null && (
        <div style={{ marginTop: "10em", textAlign: "center" }}>
          <div>Dashboard</div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

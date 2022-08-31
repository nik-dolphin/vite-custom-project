import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("vite-login-user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div style={{ marginTop: "10em", textAlign: "center" }}>Home</div>;
};

export default Home;

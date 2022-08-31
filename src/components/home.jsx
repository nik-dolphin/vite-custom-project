import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <div>Home</div>
    </>
  );
};

export default Home;

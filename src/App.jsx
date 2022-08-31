import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/layout/login";
import Navbar from "./components/layout/navbar";
import Home from "./components/home";
import Register from "./components/layout/register";
import { useState } from "react";

function App() {
  const [toggleAuth, setToggleAuth] = useState(true);
  return (
    <BrowserRouter>
      {toggleAuth && <Navbar setToggleAuth={setToggleAuth} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/login"
          element={<Login setToggleAuth={setToggleAuth} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

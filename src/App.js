import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Index";
import Login from "./Pages/SignUp/Login";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

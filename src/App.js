import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Index";
import Register from "./Pages/Register/Index";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

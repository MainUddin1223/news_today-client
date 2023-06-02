import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import CreateReport from "./Pages/Dashboard/Reporter/CreateReport";
import ReporterDashboard from "./Pages/Dashboard/Reporter/Index";
import MyReportsList from "./Pages/Dashboard/Reporter/Reports";
import Home from "./Pages/Home/Index";
import Register from "./Pages/Register/Index";

function App() {
  return (
    <div className="">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Register />} />
          <Route path="/dashboard" element={<ReporterDashboard />}>
            <Route path="reports" element={<MyReportsList />} />
            <Route path="create-report" element={<CreateReport />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import AdminDashboard from "./Pages/Administator/Admin/AdminDashboard";
import Approval from "./Pages/Administator/Admin/Approval";
import Reports from "./Pages/Administator/Admin/Reports";
import Stuff from "./Pages/Administator/Admin/Stuff";
import CreateReport from "./Pages/Administator/Reporter/CreateReport";
import ReporterDashboard from "./Pages/Administator/Reporter/Index";
import MyStatics from "./Pages/Administator/Reporter/MyStatics";
import MyReportsList from "./Pages/Administator/Reporter/Reports";
import Home from "./Pages/Home/Index";
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";
import Register from "./Pages/Register/Index";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Register />} />
        <Route
          path="/reporter"
          element={
            <ProtectedRoute value="reporter">
              <ReporterDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<MyStatics />} />
          <Route path="statics" element={<MyStatics />} />
          <Route path="reports" element={<MyReportsList />} />
          <Route path="create-report" element={<CreateReport />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute value="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Reports />} />
          <Route path="reports" element={<Reports />} />
          <Route path="stuff" element={<Stuff />} />
          <Route path="approval" element={<Approval />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import AdminDashboard from "./Pages/Administator/Admin/AdminDashboard";
import AdminProfile from "./Pages/Administator/Admin/AdminProfile";
import EditorList from "./Pages/Administator/Admin/Editor";
import Invite from "./Pages/Administator/Admin/Invite";
import Reporters from "./Pages/Administator/Admin/Reporters";
import Reports from "./Pages/Administator/Admin/Reports";
import AdminStatics from "./Pages/Administator/Admin/Statics";
import CreateReport from "./Pages/Administator/Reporter/CreateReport";
import ReporterDashboard from "./Pages/Administator/Reporter/Index";
import MyStatics from "./Pages/Administator/Reporter/MyStatics";
import MyReportsList from "./Pages/Administator/Reporter/Reports";
import Register from "./Pages/Auth/Index";
import Home from "./Pages/Home/Index";
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";
import Politics from "./Pages/category/politics/Politics";
import NewsDetails from "./Pages/newsDetails/newsDetails";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/auth" element={<Register />} />
        <Route path="/news/:id" element={<NewsDetails />} />
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
          <Route index element={<AdminStatics />} />
          <Route path="statics" element={<AdminStatics />} />
          <Route path="reports" element={<Reports />} />
          <Route path="reporters" element={<Reporters/>} />
          <Route path="invite" element={<Invite/>} />
          <Route path="editors" element={<EditorList />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Route } from "react-router";
import AdminDashboard from "../Pages/Administator/Admin/AdminDashboard";
import AdminProfile from "../Pages/Administator/Admin/AdminProfile";
import EditorList from "../Pages/Administator/Admin/Editor";
import Invite from "../Pages/Administator/Admin/Invite";
import Reporters from "../Pages/Administator/Admin/Reporters";
import Reports from "../Pages/Administator/Admin/Reports";
import AdminStatics from "../Pages/Administator/Admin/Statics";
import ProtectedRoute from "../Pages/ProtectedRoute/ProtectedRoute";

const AdminRoutes=()=>{
    return(
        <>
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
        </>
    )
}
export default AdminRoutes
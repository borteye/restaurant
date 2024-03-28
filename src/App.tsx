import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminRoutes from "./rotuer/AdminRoutes";
import Home from "./pages/Home";
import CustomerRoutes from "./rotuer/CustomerRoutes";
import Page404 from "./pages/Page404";
import SideNav from "./components/SideNav";
import ProtectedRoutes from "./rotuer/ProtectedRoutes";
import { useSelector } from "react-redux";
import { selectRole } from "./redux/features/userSlice";
import { roles } from "./roles";
import Order from "./pages/Order";

function App() {
  const role = useSelector(selectRole);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Page404 />} />
          {role && role === roles.admin ? (
            <Route element={<AdminRoutes />}>
              <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
                <Route path="/orders" element={<Order />} />
              </Route>
            </Route>
          ) : role && role === roles.customer ? (
            <Route element={<CustomerRoutes />}>
              <Route element={<ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
                <Route path="/orders" element={<Order />} />
              </Route>
            </Route>
          ) : (
            false
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;

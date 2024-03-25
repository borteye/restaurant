import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AdminRoutes from "./rotuer/AdminRoutes";
import Dummy from "./pages/Dummy";
import Dummy1 from "./pages/Dummy1";
import CustomerRoutes from "./rotuer/CustomerRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<AdminRoutes />}>
            <Route element={<Dummy />} path="/admin" />
          </Route>
          <Route element={<CustomerRoutes />}>
            <Route element={<Dummy1 />} path="/customer" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

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
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Dummy />} path="/admin" />
          <Route element={<AdminRoutes />}>
            <Route element={<Dummy />} path="/admin" />
          </Route>
          <Route element={<Dummy1 />} path="/customer" />
          <Route element={<CustomerRoutes />}>
            <Route element={<Dummy1 />} path="/customer" />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

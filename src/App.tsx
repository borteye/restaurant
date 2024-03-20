import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/banner" element={<Banner />} />

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

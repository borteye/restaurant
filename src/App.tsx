import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import tomato from "./assets/tomato.png";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Banner from "./components/Banner";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/banner" element={<Banner />} />

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

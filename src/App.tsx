import React from "react";
import tomato from "./assets/tomato.png";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="h-screen bg-heroImage bg-cover bg-center">
      <div className="h-full flex flex-col justify-between bg-overlay text-light px-32 py-6 relative">
        <Navbar />
        <LandingPage />
        <img
          src={tomato}
          alt="tomato"
          className="absolute w-60  filter blur-[2px] top-[26.4rem] -left-[8rem]"
        />
      </div>
    </div>
  );
}

export default App;

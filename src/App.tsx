import React from "react";
import tomato from "./assets/tomato.png";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="h-full md:h-screen bg-heroImage bg-cover bg-center">
      <div className=" h-full flex flex-col items-center justify-between gap-y-12  bg-overlay text-light px-16 py-6 relative">
        <Navbar />
        <div className="h-full flex items-center justify-center">
          <LandingPage />
          <img
            src={tomato}
            alt="tomato"
            className="absolute w-32  filter blur-[1px] bottom-[0.5rem]  -left-[4.5rem] "
          />
        </div>
      </div>
    </div>
  );
}

export default App;

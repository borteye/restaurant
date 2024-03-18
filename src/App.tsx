import React from "react";
import tomato from "./assets/tomato.png";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="h-full md:h-screen bg-heroImage bg-cover bg-center">
      <div className=" h-full flex flex-col items-center justify-between gap-y-12  bg-overlay text-light px-16 py-6 relative">
        <Navbar />
        <div className="h-full flex flex-col items-center justify-center">
          <Landing />
          <img
            src={tomato}
            alt="tomato"
            className="absolute w-32  filter blur-[1px] bottom-[0.5rem]  -left-[4.5rem] "
          />
        </div>
      </div>
      <Menu />
      <Banner />
    </div>
  );
}

export default App;

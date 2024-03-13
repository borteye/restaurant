import React from "react";
import {
  ShoppingCartIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowLeftIcon,
  ArrowLongLeftIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import logo from "./assets/logo.png";
import burger from "./assets/burger.png";
import tomato from "./assets/tomato.png";
import chili from "./assets/chili.png";

function App() {
  return (
    <div className="h-screen bg-heroImage bg-cover bg-center">
      <div className="h-full flex flex-col justify-between bg-[#000000d2] text-light px-32 py-6 relative">
        <nav className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="w-24" />
          </div>
          <div>
            <ul className="flex items-center gap-x-12">
              <li>Home</li>
              <li>Menu</li>
              <li>O nas</li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-x-6">
              <li className="flex items-center gap-x-4">
                <ShoppingCartIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="underline font-medium text-primary">35.00 zt</p>
                  <p className="text-secondary">1 product</p>
                </div>
              </li>
              <li className="flex items-center gap-x-4 border-x px-6 border-primary">
                <ShoppingCartIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-light font-medium ">
                    Poinedzlalek. piatok
                  </p>
                  <p className="text-secondary">od 1200 do 2300</p>
                </div>
              </li>
              <li className="flex items-center gap-x-4">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-light font-medium">+48 123 456 789</p>
                  <p className=" underline text-primary">Lorem.</p>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <section className="flex items-center justify-between">
          <div className="w-[40%] flex flex-col gap-y-6 relative  ">
            <h1 className="text-[5rem] font-sans font-bold w-[70%] leading-none">
              Burger Spioszek
            </h1>
            <p className="text-secondary w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur dolor provident odio sapiente eius repudiandae, rem
              nesciunt facilis?
            </p>
            <div className="flex items-center gap-x-6">
              <button className="flex gap-x-4 bg-gradient-to-r from-gradientStart to-gradientEnd py-4 px-8 font-medium rounded-full">
                Do koszyka <ShoppingCartIcon className="w-6 h-6" />
              </button>
              <button className="flex gap-x-4 border-2 py-4 px-8 font-medium rounded-full">
                zobacz menu <ArrowLongRightIcon className="w-6 h-6" />
              </button>
            </div>
            <img
              src={tomato}
              alt="tomato"
              className="absolute w-24 -left-[4.8rem] -top-10 "
            />
            <img
              src={chili}
              alt="pepper"
              className="w-[15rem] transform scale-x-[-1] filter blur-[2px] absolute -bottom-[5.5rem] -right-32"
            />
          </div>
          <div className="w-[55%] flex flex-col gap-y-4 items-end justify-start relative ">
            <img src={burger} alt="burger" className="w-[30rem]" />
            <div className="flex items-end gap-x-6">
              <div className="flex gap-x-2">
                <ArrowLongLeftIcon className="w-6 h-6 text-primary" />
                <ArrowLongRightIcon className="w-6 h-6" />
              </div>

              <p className="text-4xl font-bold">
                10<span className="text-base text-primary">/04</span>
              </p>
            </div>
            <p className="bg-gradient-to-r from-gradientStart to-gradientEnd py-4 px-8 font-medium rounded-full absolute top-8 left-[8.5rem]">
              26.99 zt
            </p>
            <div className="bg-[#ea9012]  p-4 font-bold h-12 w-12 rounded-[50%] flex items-center justify-center absolute right-[2.5rem] top-[14rem]">
              New
            </div>
            <img src={chili} alt="pepper" className="w-[7rem]   absolute" />
          </div>
        </section>
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

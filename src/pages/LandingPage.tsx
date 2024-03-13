import React from "react";
import {
  ShoppingCartIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import burger from "../assets/burger.png";
import chili from "../assets/chili.png";
import tomato from "../assets/tomato.png";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <section className="flex items-center justify-between">
      <div className="w-[40%] flex flex-col gap-y-6 relative  ">
        <h1 className="text-[5rem] font-sans font-bold w-[70%] leading-none">
          Burger Spioszek
        </h1>
        <p className="text-secondary w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dolor provident odio sapiente eius repudiandae, rem nesciunt facilis?
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
  );
};

export default LandingPage;

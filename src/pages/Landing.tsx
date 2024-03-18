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

const Landing = (props: Props) => {
  return (
    <section className="w-screen  max-w-[1440px] m-auto flex flex-col gap-y-36 items-center md:flex-row justify-between px-2 md:px-16">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-clamp font-bold max-w-md mx-auto md:mx-0 text-center md:text-left leading-none relative">
          Burger Spioszek
          <img
            src={tomato}
            alt="tomato"
            className="absolute w-[2rem] -left-[1.5rem] -top-[0.7rem] md:-top-1 md:-left-[1.4rem]"
          />
        </h1>
        <p className="text-secondary text-center w-full max-w-md md:text-left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dolor provident odio sapiente eius repudiandae, rem nesciunt facilis?
        </p>
        <div className="flex flex-col max-w-60 w-full mx-auto md:mx-0  gap-y-4 relative">
          <button className="flex items-center justify-center font-bold gap-x-2 bg-gradient-to-r from-gradientStart to-gradientEnd px-6 py-4 rounded-full">
            Do koszyka <ShoppingCartIcon className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center border-2 font-bold gap-x-2 px-6 py-4 rounded-full">
            Do koszyka <ShoppingCartIcon className="w-5 h-5" />
          </button>
          <img
            src={chili}
            alt="pepper"
            className="w-28 lg:w-48 transform scale-x-[-1] filter blur-[1px] average:blur-[1.5px] absolute top-24 -right-5 lg:-right-24 "
          />
        </div>
      </div>
      <div className="relative max-w-[30rem]   w-full flex flex-col justify-center items-center">
        <img src={burger} alt="burger" className=" " />
        <div className="flex items-end justify-end px-10 w-full gap-x-6">
          <div className="flex gap-x-2">
            <ArrowLongLeftIcon className="w-6 h-6 text-primary" />
            <ArrowLongRightIcon className="w-6 h-6" />
          </div>

          <p className="text-4xl font-bold">
            10<span className="text-base text-primary">/04</span>
          </p>
        </div>
        <p className="bg-gradient-to-r from-gradientStart to-gradientEnd py-2 px-4 font-medium rounded-full absolute top-8 left-[8.5rem]">
          26.99 zt
        </p>
        <div className="bg-new text-sm  p-5 font-bold h-4 w-4 rounded-[50%] flex items-center justify-center absolute right-[2.5rem] md:right-[5.5rem] top-20">
          New
        </div>
        <img src={chili} alt="pepper" className="w-20 absolute -top-9" />
      </div>
    </section>
  );
};

export default Landing;

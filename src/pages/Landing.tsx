import {
  ArrowLongRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { ArrowLongLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import burger from "../assets/burger.png";
import chili from "../assets/chili.png";
import tomato from "../assets/tomato.png";
import Banner from "../components/Banner";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar";

const Landing = () => {
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  return (
    <>
      <Navbar homeRef={homeRef} menuRef={menuRef} />
      <div
        className="h-full md:h-screen bg-texture bg-cover bg-center"
        ref={homeRef}
      >
        <div className=" h-full flex flex-col items-center justify-between gap-y-12  bg-overlay text-light px-16 py-6 relative">
          <div className="h-full flex flex-col items-center justify-center">
            <section className="w-screen  max-w-[1440px] m-auto flex flex-col gap-y-36 items-center md:flex-row justify-between px-2 md:px-16">
              <div className="flex flex-col gap-y-8">
                <h1 className="text-clamp font-bold max-w-md mx-auto md:mx-0 text-center md:text-left leading-none relative">
                  Burger Sleepyhead
                  <img
                    src={tomato}
                    alt="tomato"
                    className="absolute hidden lg:block max-w-28  -top-8 -left-[5.5rem]"
                  />
                </h1>
                <p className="text-secondary text-center w-full max-w-md md:text-left ">
                  Experience burger perfection with our Signature Burger: a
                  succulent beef patty topped with melted cheddar, crispy bacon,
                  fresh lettuce, tomatoes, and pickles, all nestled in a golden
                  brioche bun. Savor every bite!
                </p>
                <div className="flex flex-col max-w-60 w-full mx-auto md:mx-0  gap-y-4 relative">
                  <button className="flex items-center justify-center font-bold gap-x-2 bg-gradient-to-r from-gradientStart to-gradientEnd px-6 py-4 rounded-full">
                    To shopping cart <ShoppingCartIcon className="w-5 h-5" />
                  </button>
                  <button className="flex items-center justify-center border-2 font-bold gap-x-2 px-6 py-4 rounded-full">
                    Learn More <ChevronRightIcon className="w-5 h-5" />
                  </button>
                  <img
                    src={chili}
                    alt="pepper"
                    className="w-28 lg:w-48 transform scale-x-[-1] filter blur-[1px] average:blur-[1.5px] absolute top-24 -right-5 lg:-right-24 "
                  />
                </div>
              </div>
              <div className="relative max-w-[45rem]  w-full flex flex-col justify-center items-center">
                <img src={burger} alt="burger" className="w-[80%]" />
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
                  $6.99
                </p>
                <div className="bg-new text-sm md:text-lg p-5 md:p-7 font-bold h-4 w-4 md:h-6 md:w-6 rounded-[50%] flex items-center justify-center absolute right-[2.5rem] md:right-[9.5rem] top-20">
                  New
                </div>
                <img
                  src={chili}
                  alt="pepper"
                  className="w-20 md:w-28 absolute -top-9 md:-top-12"
                />
              </div>
            </section>
            <img
              src={tomato}
              alt="tomato"
              className="absolute w-32 md:w-52  filter blur-[1px] bottom-[0.5rem] -left-[4.5rem] md:-left-[6.5rem] "
            />
          </div>
        </div>
      </div>
      <Menu menuRef={menuRef} />
      <Banner />
    </>
  );
};

export default Landing;

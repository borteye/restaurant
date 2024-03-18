import React from "react";
import pan from "../assets/pan.png";
import pig from "../assets/pig.svg";
import greenchili from "../assets/greenchili.png";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full  md:h-[70vh]  flex items-center py-16 bg-black ">
      <div className="w-full bg-heroImage bg-cover bg-center ">
        <div className="bg-bannerOverlay  ">
          <div className="text-light relative  max-w-[1440px]  mx-auto flex flex-col-reverse gap-y-8 md:flex-row items-center justify-between px-6 md:px-16 py-8  ">
            <div className="text-center flex flex-col gap-y-12  lg:w-[60%] w-full md:text-left">
              <div>
                <h2 className="text-2xl text-tertiary">Spobuj naszych</h2>
                <h1 className="text-clamp font-bold max-w-[38rem] mx-auto md:mx-0  leading-none relative">
                  Wypasionych satatek
                </h1>
              </div>

              <div className="flex flex-col lg:flex-row md:text-left text-center justify-between gap-x-7 gap-y-7">
                <div className="flex flex-col md:flex-row  justify-center items-center  ">
                  <div className="w-[5rem] ">
                    <div className="bg-gradient-to-r w-fit mx-auto flex items-center justify-center   from-gradientStart to-gradientEnd p-2 rounded-[50%] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                      <img src={pig} alt="pig" className="w-8" />
                    </div>
                  </div>

                  <div>
                    <h1 className="font-bold text-xl">180g miesa</h1>
                    <p className="text-secondary">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  justify-center items-center  ">
                  <div className="w-[5rem] ">
                    <div className="bg-gradient-to-r w-fit mx-auto flex items-center justify-center   from-gradientStart to-gradientEnd p-2 rounded-[50%] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                      <img src={pig} alt="pig" className="w-8" />
                    </div>
                  </div>

                  <div>
                    <h1 className="font-bold text-xl">180g miesa</h1>
                    <p className="text-secondary">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:absolute  lg:right-0 lg:-top-16 flex justify-center">
              <img src={pan} alt="pan" className="lg:w-[31rem] md:w-[30rem]" />
            </div>
            <img
              src={greenchili}
              alt="greenchili"
              className="absolute sm:-bottom-20 -bottom-14  left-0 sm:w-32 w-24 filter blur-[2.5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

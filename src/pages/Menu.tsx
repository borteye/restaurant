import React, { FC } from "react";
import MenuCard from "../components/MenuCard";
import tomato from "../assets/tomato.png";
import chili from "../assets/chili.png";

type Props = {
  menuRef: React.MutableRefObject<null>;
};

const Menu: FC<Props> = ({ menuRef }) => {
  return (
    <div className="w-full bg-black py-20" ref={menuRef}>
      <div className="relative max-w-[1440px] flex flex-col gap-y-12 mx-auto px-6 md:px-16">
        <h1 className="text-3xl font-bold text-light">MENU</h1>
        <div>
          <ul className=" flex gap-x-8 overflow-x-scroll no-scrollbar ">
            <li className="text-light bg-gradient-to-r from-gradientStart to-gradientEnd py-2 font-semibold px-4 w-fit rounded-full">
              Burgery
            </li>
            <li className="bg-overlay text-secondary font-semibold py-2 px-4 w-fit rounded-full">
              Burgery
            </li>
            <li className="bg-overlay text-secondary font-semibold py-2 px-4 w-fit rounded-full">
              Burgery
            </li>
            <li className="bg-overlay text-secondary font-semibold py-2 px-4 w-fit rounded-full">
              Burgery
            </li>
            <li className="bg-overlay text-secondary font-semibold py-2 px-4 w-fit rounded-full">
              Burgery
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-4 lg:gap-8 ">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
        <div className=" mt-8 flex justify-center items-center">
          <button className="border-2 border-secondary text-secondary font-semibold py-2 px-4 w-fit rounded-full">
            Czarnjdzke
          </button>
        </div>
        <img
          src={tomato}
          alt="tomato"
          className="absolute  w-32 md:w-44 right-0 bottom-2 filter blur-[2px]"
        />
        {/* <img
          src={chili}
          alt="chili"
          className="absolute transform   filter blur-[1.5px] -left-10 top-48 lg:bottom-12  md:w-44 "
        /> */}
      </div>
    </div>
  );
};

export default Menu;

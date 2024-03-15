import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  PhoneIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";
import React, { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-6 average:px-0 w-screen average:w-full flex items-center justify-between">
      <div className=" w-20 average:w-28 ">
        <img src={logo} alt="logo" className="w-20 average:w-32" />
      </div>
      <Bars3BottomRightIcon
        className="w-8 average:hidden"
        onClick={() => setIsOpen(true)}
      />

      <div
        className={`bg-black average:bg-transparent  average:text-light absolute left-0 average:relative w-screen average:w-[80%]  h-full ${
          isOpen ? "flex" : "hidden average:flex"
        }  flex-col gap-y-12 top-0  py-8 z-50 px-6 average:px-0`}
      >
        <div className="average:hidden bg-black rounded-md w-fit p-2">
          <XMarkIcon
            className="w-7 text-light"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="average:flex justify-between">
          <ul className="average:flex justify-between  average:w-[20%]">
            <li className="hover:bg-overlay py-2 px-4 average:px-0 rounded-md cursor-pointer">
              Home
            </li>
            <li className="hover:bg-overlay py-2 px-4 average:px-0 rounded-md cursor-pointer">
              Menu
            </li>
            <li className="hover:bg-overlay py-2 px-4 average:px-0 rounded-md cursor-pointer">
              O nas
            </li>
          </ul>
          <ul className="flex flex-col average:flex-row gap-8 average:w-fit">
            <li className="flex items-center gap-x-4">
              <ShoppingCartIcon className="w-5 h-5 text-primary" />
              <div>
                <p className="underline font-medium text-primary">35.00 zt</p>
                <p className="text-secondary">1 product</p>
              </div>
            </li>
            <li className="flex average:border-x average:px-4 items-center gap-x-4  border-primary">
              <ShoppingCartIcon className="w-5 h-5 text-primary" />
              <div>
                <p className="text-light font-medium ">Poinedzlalek. piatok</p>
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
      </div>
    </nav>
  );
};

export default Navbar;

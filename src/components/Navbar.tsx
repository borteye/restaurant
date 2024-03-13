import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
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
    </nav>
  );
};

export default Navbar;

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  Bars3BottomRightIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

type Props = {
  homeRef: React.MutableRefObject<null>;
  menuRef: React.MutableRefObject<null>;
};

const Navbar: FC<Props> = ({ homeRef, menuRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const homePage = () => {
    if (homeRef?.current) {
      (homeRef?.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };
  const menuPage = () => {
    if (menuRef?.current) {
      (menuRef?.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <nav className=" bg-texture bg-cover bg-center  sticky top-0 bottom-0 z-50">
      <div className="bg-overlay1 px-12 py-6 average:py-0 w-screen average:w-full flex items-center justify-between">
        <div className=" w-20 average:w-28 ">
          <img src={logo} alt="logo" className="w-20 average:w-32" />
        </div>
        <Bars3BottomRightIcon
          className="w-8 average:hidden text-light"
          onClick={() => setIsOpen(true)}
        />

        <div
          className={`bg-black average:bg-transparent text-light average:text-light absolute left-0 average:relative w-screen average:w-[80%]  h-screen average:h-full ${
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
              <li
                className="hover:bg-overlay py-2 px-4 average:px-0 rounded-md cursor-pointer home"
                onClick={homePage}
              >
                Home
              </li>
              <li
                className="hover:bg-overlay py-2 px-4 average:px-0 rounded-md cursor-pointer"
                onClick={menuPage}
              >
                Menu
              </li>
            </ul>
            <ul className="flex flex-col average:flex-row gap-8 average:w-fit">
              <li className="flex items-center gap-x-4">
                <ShoppingCartIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="underline font-medium text-primary">$5.00</p>
                  <p className="text-secondary">1 product</p>
                </div>
              </li>

              <li className="flex items-center gap-x-4">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-light font-medium">+48 123 456 789</p>
                  <p className=" underline text-primary">Call Us</p>
                </div>
              </li>
              <li className="flex items-center gap-x-4">
                <button
                  onClick={login}
                  className="bg-primary py-2 px-8 font-semibold rounded-md"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

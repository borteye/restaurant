import React from "react";
import logo from "../assets/logo.png";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { selectRole } from "../redux/features/userSlice";
import { UseSelector, useSelector } from "react-redux";
import { roles } from "../roles";

type Props = {};

const SideNav = (props: Props) => {
  const role = useSelector(selectRole);

  const adminRoute: string[] = [
    "Home",
    "Menu",
    "History",
    "Promos",
    "Settings",
    "Logout",
  ];

  const customerRoute: string[] = ["Home", "Menu", "History", "Logout"];

  const Privilegdes =
    role && role === roles.admin ? (
      <>
        {adminRoute.map((navs, i) => {
          return (
            <li className="text-light font-semibold flex flex-col items-center justify-center bg-primary p-2 rounded-lg ">
              <p>{navs}</p>
              <Squares2X2Icon className="w-7" />
            </li>
          );
        })}
      </>
    ) : role && role === roles.customer ? (
      <>
        {customerRoute.map((navs, i) => {
          return (
            <li className="text-light font-semibold flex flex-col items-center justify-center bg-primary p-2 rounded-lg ">
              <p>{navs}</p>
              <Squares2X2Icon className="w-7" />
            </li>
          );
        })}
      </>
    ) : (
      false
    );
  return (
    <div className="bg-secondary w-[8rem] flex h-screen items-center justify-center ">
      <ul className="flex flex-col gap-y-8">{Privilegdes}</ul>
    </div>
  );
};

export default SideNav;

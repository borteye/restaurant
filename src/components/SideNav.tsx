import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Squares2X2Icon,
  HomeIcon,
  ClockIcon,
  Cog8ToothIcon,
  AdjustmentsVerticalIcon,
  ClipboardDocumentListIcon,
  ClipboardIcon,
  UsersIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";
import { selectRole } from "../redux/features/userSlice";
import { UseSelector, useSelector } from "react-redux";
import { roles } from "../roles";
import path from "path";
import { useNavigate } from "react-router-dom";

type Props = {};

const SideNav = (props: Props) => {
  const role = useSelector(selectRole);

  const navigate = useNavigate();
  const { pathname } = window.location;

  const navigator = (location: string) => {
    navigate(location);
  };

  const adminRoute = [
    {
      icon: <HomeIcon className="w-5 sm:w-7" />,
      name: "Home",
      pathname: "/home",
    },
    {
      icon: <UsersIcon className="w-5 sm:w-7" />,
      name: "Users",
      pathname: "/admin",
    },
    {
      icon: <ClipboardDocumentListIcon className="w-5 sm:w-7" />,
      name: "Orders",
      pathname: "/admin",
    },
    {
      icon: <ClipboardDocumentListIcon className="w-5 sm:w-7" />,
      name: "Orders",
      pathname: "/admin",
    },
    {
      icon: <ClockIcon className="w-5 sm:w-7" />,
      name: "History",
      pathname: "/admin",
    },
    {
      icon: <GiftIcon className="w-5 sm:w-7" />,
      name: "Promos",
      pathname: "/admin",
    },
    {
      icon: <AdjustmentsVerticalIcon className="w-5 sm:w-7" />,
      name: "Settings",
      pathname: "/admin",
    },
  ];

  const customerRoute = [
    {
      icon: <HomeIcon className="w-5 sm:w-7" />,
      name: "Home",
      pathname: "/home",
    },
    {
      icon: <ClipboardDocumentListIcon className="w-5 sm:w-7" />,
      name: "Orders",
      pathname: "/admin",
    },
    {
      icon: <ClockIcon className="w-5 sm:w-7" />,
      name: "History",
      pathname: "/admin",
    },
    {
      icon: <GiftIcon className="w-5 sm:w-7" />,
      name: "Promos",
      pathname: "/admin",
    },
  ];

  const Privilegdes =
    role && role === roles.admin ? (
      <>
        {adminRoute.map((navs, i) => {
          return (
            <li
              className={`text-sm ${
                navs.pathname === pathname
                  ? "bg-primary text-light rounded-xl"
                  : "bg-count text-secondary"
              }    transition-all duration-300 group ease-linear cursor-pointer    hover:text-light font-semibold flex flex-col items-center justify-center p-2 rounded-3xl hover:rounded-xl  relative`}
              key={i}
              onClick={() => navigator(navs.pathname)}
            >
              {navs.icon}
              <p className="absolute  w-auto left-14 shadow-md z-[1000px] rounded-lg bg-count font-bold group-hover:scale-100 text-center transition-all duration-100 py-1 px-2 scale-0  origin-left">
                {navs.name}
              </p>
            </li>
          );
        })}
      </>
    ) : role && role === roles.customer ? (
      <>
        {customerRoute.map((navs, i) => {
          return (
            <li
              className={`text-sm ${
                navs.pathname === pathname
                  ? "bg-primary text-light rounded-xl"
                  : "bg-count text-secondary"
              }    transition-all duration-300 group ease-linear cursor-pointer    hover:text-light font-semibold flex flex-col items-center justify-center p-2 rounded-3xl hover:rounded-xl  relative`}
              key={i}
              onClick={() => navigator(navs.pathname)}
            >
              {navs.icon}
              <p className="absolute  w-auto left-14 shadow-md rounded-lg bg-count font-bold group-hover:scale-100 text-center transition-all duration-100 py-1 px-2 scale-0  origin-left">
                {navs.name}
              </p>
            </li>
          );
        })}
      </>
    ) : (
      false
    );
  return (
    <div className="bg-secondary px-2 justify-center items-center border h-full fixed left-0   ">
      <ul className="flex flex-col gap-y-8 border border-yellow-700 ">
        {Privilegdes}
      </ul>
    </div>
  );
};

export default SideNav;

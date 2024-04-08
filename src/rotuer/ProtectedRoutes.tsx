import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import CheckOut from "../components/CheckOut";

type Props = {};

const ProtectedRoutes = () => {
  return (
    <div className="flex h-full justify-end">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;

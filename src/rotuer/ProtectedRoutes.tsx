import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

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

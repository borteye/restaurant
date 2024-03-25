import { Outlet, Navigate } from "react-router-dom";
import { selectRole } from "../redux/features/userSlice";
import { useSelector } from "react-redux";
import { roles } from "../roles";

const CustomerRoutes = () => {
  let auth = useSelector(selectRole);
  return auth && auth === roles?.customer ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default CustomerRoutes;

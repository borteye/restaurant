import { Outlet, Navigate } from "react-router-dom";
import { selectRole } from "../redux/features/userSlice";
import { useSelector } from "react-redux";
import { roles } from "../roles";

const AdminRoutes = () => {
  let auth = useSelector(selectRole);
  return auth && auth === roles?.admin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoutes;

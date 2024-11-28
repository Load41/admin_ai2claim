import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100 bg-ma-white px-5">
        <Outlet />
    </div>
  );
};

import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isAuth, path, role }) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = token === null || token === undefined ? false : true;
  const isRole = isAuthenticated && isAuth ? true : false;

  if (token && isAuth !== undefined && !isAuth) {
    return (
      <>
        <Navigate to="/" replace={true} />
      </>
    );
  } else if ((token && isAuth) || (isAuth !== undefined && !isAuth)) {
    return <>{children}</>;
  } else if (isAuth === undefined) {
    return <>{children}</>;
  } else {
    return (
      <>
        <Navigate to="/login" replace={true} />
      </>
    );
  }
};

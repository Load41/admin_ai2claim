import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import ComingSoon from "../pages/ComingSoon";
import Dashboard from "../pages/Dashboard";
import CrewList from "../pages/CrewList";
import ManagementListInfo from "../pages/ManagementListInfo";
import ClientList from "../pages/ClientList";
import ManagementListPending from "../pages/ManagementListPending";
import CrewListPending from "../pages/CrewListPending";
import ClientListPending from "../pages/ClientListPending";
import { AuthLayout } from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import AboutClient from "../pages/AboutClient";
import AboutManagement from "../pages/AboutManagement";
import AboutCrew from "../pages/AboutCrew";
import ResetPassword from "../pages/Auth/ResetPassword";
import EditProfile from "../pages/Account/EditProfile";
import ChangePassword from "../pages/Account/ChangePassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute isAuth={true}>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/management-list",
        element: <ManagementListInfo />,
      },
      {
        path: "/crew-list",
        element: <CrewList />,
      },
      {
        path: "client-list",
        element: <ClientList />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/management-list-pending",
        element: <ManagementListPending />,
      },
      {
        path: "/crew-list-pending",
        element: <CrewListPending />,
      },
      {
        path: "/client-list-pending",
        element: <ClientListPending />,
      },
      {
        path: "/client-detail/:id",
        element: <AboutClient />,
      },
      {
        path: "/management-detail/:id",
        element: <AboutManagement />,
      },
      {
        path: "/crew-detail/:id",
        element: <AboutCrew />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute isAuth={false}>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        // index: true,
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);

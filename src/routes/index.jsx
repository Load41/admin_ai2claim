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

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute isAuth={false}>
      <RootLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        index: true,
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
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute isAuth={false}>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

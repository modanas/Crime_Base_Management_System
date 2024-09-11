import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Cred from "./components/Cred_panel/Cred.jsx";
import Admin from "./components/Admin_signup/Admin.jsx";
import User from "./components/user_signup/User.jsx";
import AdminDashboard from './components/Dashboard/Admin_dashboard/AdminDashboard.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/User_dashboard/Dashboard.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cred", element: <Cred /> },
  { path: "/user_signup", element: <User /> },
  { path: "/admin_signup", element: <Admin /> },
  { path: "/user_login", element: <PrivateRoutes><Cred /></PrivateRoutes> },
  { path: "/admin_login", element: <PrivateRoutes><Cred /></PrivateRoutes> },
  { path: "/user_dashboard", element: <Dashboard /> },
  { path: "/admin_dashboard", element: <AdminDashboard/> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

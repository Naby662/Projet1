import {
    createBrowserRouter,
  } from "react-router-dom";
  import LoginPage from "./feacture/LoginPage";
  import Admin from "./routes/admin";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);
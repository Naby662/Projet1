import {
    createBrowserRouter,
  } from "react-router-dom";
  import LoginPage from "./feacture/LoginPage";
  import Admin from "./routes/Admin";
import RegisterForm from "./feacture/register";
import Todo from "./feacture/todo";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);
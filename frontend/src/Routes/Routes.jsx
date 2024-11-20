import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/AdminDashboard/Cart/Cart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"order/:category",
        element:<PrivateRoutes><Order/></PrivateRoutes>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
    ],
  },

  {
    path: 'dashboard',
    element: <Dashboard/>,
    children: [
      {
        path: 'cart', 
        element: <Cart />
      }
    ]
  }
  
]);

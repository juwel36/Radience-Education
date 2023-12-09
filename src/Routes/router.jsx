import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Regestraion from "../Pages/Regestraion/Regestraion";
import AboutUs from "../Pages/AboutUs/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
{
  path:'/',
  element:<Home></Home>
},
{
  path:'/aboutUs',
  element:<AboutUs></AboutUs>
},


    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/regestraion',
    element:<Regestraion></Regestraion>
  }
]);


export default router;
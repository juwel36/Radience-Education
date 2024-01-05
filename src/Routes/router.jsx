import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Regestraion from "../Pages/Regestraion/Regestraion";
import AboutUs from "../Pages/AboutUs/AboutUs";
import MockTest from "../Pages/MockTest";
import Dashboard from "../Pages/Dashboard";
import AddTest from "../DeshBoardComponent/AddTest";
import Allusers from "../DeshBoardComponent/Allusers";
import Payment from "../DeshBoardComponent/Payment";
import AllBookings from "../DeshBoardComponent/AllBookings";
import Result from "../Component/Result";
import AddResult from "../DeshBoardComponent/AddResult";
import AddCourse from "../DeshBoardComponent/AddCourse";
import CourseDeails from "../Component/CourseDeails";
import Blog from "../Component/Blog";
import WriteBlog from "../Component/WriteBlog";
import BlogDetails from "../Component/BlogDetails";
import AdminRoute from "./AdminRoute";


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
{
  path:'/mocktest',
  element:<MockTest></MockTest>
},
{
  path:'/blog',
  element:<Blog></Blog>
},
{
  path: '/blog/:id',
  element: <BlogDetails />,
  loader: ({ params }) => ({ id: params.id }),
},
{
  path:'/writeBlog',
  element:<WriteBlog></WriteBlog>
},
{
  path:'/details/:id',
  element:<CourseDeails></CourseDeails>,
  loader: ({ params }) => ({id: params.id }),
},

{
  path:'/result',
  element:<Result></Result>
},
{
  path:'/payment',
  element:<Payment></Payment>
},
{
  path:'/Dashboard',
  element:<AdminRoute><Dashboard></Dashboard></AdminRoute>,
  children:[
    {
      path:'/Dashboard/addtest',
      element:<AddTest></AddTest>
    },
    {
      path:'/Dashboard/allusers',
      element:<Allusers></Allusers>
    },
    {
      path:'/Dashboard/allbokkings',
      element:<AllBookings></AllBookings>
    },
    {
      path:'/Dashboard/addresult',
      element: <AddResult></AddResult>
    },
    {
      path:'/Dashboard/addcourse',
      element:<AddCourse></AddCourse>
    },
  ]
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
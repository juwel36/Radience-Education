
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {



  
  return (
    <div>
       <div className="bg-slate-200 px-1 lg:px-4 md:px-2 lg:px-0">

<div className="max-w-6xl mx-auto  flex gap-4" >
  
<div className="   bg-red-100 shadow-md shadow-white  w-1/9">

<div className="flex justify-center items-center">

<img className="w-24" src="" alt="" />
</div>
<ul className="space-y-3 lg:pt-7 p-2">

<li> <button className="btn w-full border-2  bg-red-600  text-white "> <NavLink to='/'> <span className="">
 Home 
</span> </NavLink> </button> </li>

<li> <button className="btn w-full border-2 bg-red-600 text-white "> <NavLink to='/Dashboard/addtest'> <span className="">
 Add test date 
</span> </NavLink>  </button> </li>
<li> <button className="btn w-full border-2 bg-red-600 text-white "> <NavLink to='/Dashboard/allusers'> <span className="">
 ALL Users 
</span> </NavLink>  </button> </li>
<li> <button className="btn w-full border-2 bg-red-600 text-white"> <NavLink to='/Dashboard/addcourse'> <span className="">
 Add Course
</span> </NavLink>  </button> </li>
<li> <button className="btn w-full border-2 bg-red-600 text-white "> <NavLink to='/Dashboard/allbokkings'> <span className="">
 ALL Bookings 
</span> </NavLink>  </button> </li>
<li> <button className="btn w-full border-2 bg-red-600 text-white "> <NavLink to='/Dashboard/addresult'> <span className="">
 Add Result 
</span> </NavLink>  </button> </li>






</ul>


</div>

<div className="bg-white shadow-md shadow-white  w-3/4">


<Outlet></Outlet>
</div>


</div>
</div>


    </div>
  );
};

export default Dashboard;
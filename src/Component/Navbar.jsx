
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import img from '../assets/WhatsApp_Image_2023-12-04_at_19.23.10_307c690f-removebg-preview.png'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)
  const location = useLocation();

  const handleLogout = () => {
    logOut().then((res) => {
      toast.success('Log out succesfully', {
        duration: 2000,
        position: 'top-right', 
        style: {
          border: '2px solid #FF0000',
          padding: '16px',
          color: '#FF0000',
        },
      });
    });
  };


  const shouldShowAchievements = !["/login", "/regestraion","/aboutUs"].includes(location.pathname);

const Navbar= <>
 
            <li><Link to="/"><button className=""> Home</button></Link></li>
            <li><ScrollLink  to="achievements" smooth={true} style={{ display: shouldShowAchievements ? 'block' : 'none' }}  >Achievements</ScrollLink></li>
            <li><ScrollLink  to="about" smooth={true} style={{ display: shouldShowAchievements ? 'block' : 'none' }}  >About Us</ScrollLink></li>
            <li>
              {user ? <button onClick={handleLogout} className="">Log Out</button> :
                <Link to="login"><button className="">Log In</button></Link>
              }
            </li>
         


</>


  return (
    <div className="">
    <div className="bg-red-600">
    <div className="drawer max-w-6xl mx-auto">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
   
    <div className="w-full navbar bg-red-600  text-white">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 font-semibold"> <img className="w-14 mr-3 text-white" src={img} alt="" /> Radiance Education   </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
        {Navbar}
        </ul>
      </div>
    </div>
    {/* Page content here */}
    
  </div> 
  <div className="drawer-side z-10">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-red-600 text-white">
    {Navbar}
    </ul>
  </div>
</div>
    </div>

    </div>
  );
};

export default Navbar;
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxoisPublic from "../Hooks/useAxiosPublic";


const GoogleLoginbtn = () => {
  const { googleAuth } = useContext(AuthContext);
  const axiosPublic=useAxoisPublic()
const navigate=useNavigate()

  const handlegoogleLogin = () => {
    googleAuth()
    .then(res=> {
      const userInfo={
        email: res.user?.email,
        name: res.user?.displayName,
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          console.log(res);
        })


      toast.success('Log in succesfully', {
        duration: 2000,
        position: 'top-right', 
        style: {
          border: '2px solid #FF0000',
          padding: '16px',
          color: '#FF0000',
        },
      });
            navigate('/')
          })
          .catch(error=>{
            console.log(error);
          })
  };

  return (
    <div>
      <div>
        <button
          onClick={handlegoogleLogin}
          className="mb-3 flex  bg-red-600 mx-auto items-center gap-3 rounded-lg  py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          
        >
          <FaGoogle /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLoginbtn;

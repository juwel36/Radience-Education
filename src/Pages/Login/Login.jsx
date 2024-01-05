import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import GoogleLoginbtn from "../../Component/GoogleLoginbtn";

const Login = () => {
  const navigate=useNavigate()
  const {Loginguser} =useContext(AuthContext)
  const [afterloading,setAfterloading]=useState(false)

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()


  const onSubmit = (data) =>{
    setAfterloading(true);

    Loginguser(data.email,data.password)
  .then(res=>{
    toast.success('Log  in succesfully', {
      duration: 2000,
      position: 'top-right', 
      style: {
        border: '2px solid #FF0000',
        padding: '16px',
        color: '#FF0000',
      },
    });
    setAfterloading(false);
navigate('/')
  })
  .catch(err=>{
    console.log(err);
    setAfterloading(false);
    toast.error('please provide valid email or pass', {
      duration: 2000,
      position: 'top-right', 
      style: {
        border: '2px solid #FF0000',
        padding: '16px',
        color: '#FF0000',
      },
    });


    
  })
  


  }


  return (




    <div>
      <Navbar></Navbar>
<div className=" mt-14 flex justify-center items-center">

      <div className="relative shadow-2xl  flex flex-col text-gray-700 bg-white  w-96 rounded-xl bg-clip-border">
  <div
    className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-red-600 bg-clip-border shadow-gray-900/20">
    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
      Log In
    </h3>
  </div>

<form onSubmit={handleSubmit(onSubmit)}  >

  <div className="flex flex-col gap-4 p-6">
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " {...register("email",{ required: true })}/>
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Email
      </label>
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input type="password"
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " {...register("password",{ required: true })}/>
      <label
       className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Password
      </label>
      {Error && <p className="text-red-600"> {Error} </p>}
    </div>
   
  </div>
  <div className="p-6 pt-0">
<input  className="block w-full select-none rounded-lg bg-red-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit" value=" Log In" />
    </div>
    {afterloading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )} 
</form>





    <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
      Don't have an account?
      <Link to='/regestraion'> <span className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"> Regestraion </span> </Link>
      
    </p>
  </div>
</div>
<GoogleLoginbtn></GoogleLoginbtn>
</div>

   
  );
};

export default Login;
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const axoisSecure=axios.create({
  baseURL:'https://radiance-education-server.vercel.app'
})

const useAxoisSecure = () => {
  const {logOut}=useContext(AuthContext)
const navigate=useNavigate()

axoisSecure.interceptors.request.use(function(config){
  const token=localStorage.getItem('access-token')
  // console.log(token);
config.headers.authorization=`Bearer ${token}`
  return config
},function (error){

  return Promise.reject(error)
})
axoisSecure.interceptors.response.use(function(response){
  return response
},async (error)=>{
const status=error.response.status;
if(status===401 || status === 403){

await logOut()
navigate('/login')
}

return Promise.reject(error)
})


  return axoisSecure;
};

export default useAxoisSecure;
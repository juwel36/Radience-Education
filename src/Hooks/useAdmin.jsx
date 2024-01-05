import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxoisSecure from "./useAxiosSecure";

const useAdmin = () => {
  const {user}=useContext(AuthContext)
  const axoisSecure=useAxoisSecure()
  const {data:isAdmin,isPending}=useQuery({
  queryKey: [user?.email,'isAdmin'],
  queryFn:async()=>{
  const res=await axoisSecure.get(`/users/admin/${user.email}`)
  console.log(res.data);
  return res.data?.admin
  }
  
  })
  return [isAdmin,isPending]
  
  };
  
  export default useAdmin;
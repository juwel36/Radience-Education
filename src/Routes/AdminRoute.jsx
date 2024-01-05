import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Component/Spinner";
import { Navigate } from "react-router-dom";


const AdminRoute = ({children}) => {
  const [isAdmin,isPending]=useAdmin()
  const {user,loading}=useContext(AuthContext)

  if(loading || isPending){
    return <div >
<div> <Spinner></Spinner> </div>

    </div>
  }
  
  if(user && isAdmin){
    return children
  }


  return <Navigate to='/'
  
  ></Navigate>
};

export default AdminRoute;
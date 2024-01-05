import { useQuery } from "@tanstack/react-query";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import Spinner from "../Component/Spinner";
import Swal from "sweetalert2";
import useAxoisSecure from "../Hooks/useAxiosSecure";


const Allusers = () => {

  const axoisSecure=useAxoisSecure()

  const axoisPublic = useAxoisPublic()
  const { isPending, data: users, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axoisPublic.get("/users");
      return res.data;
    }
  });



  const handleMakeAdimn = (user) => {
    axoisSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          });
        }

      })

  }


  if (isPending) return <Spinner></Spinner>

  return (
    <div>
        <div className="">
        <div className="text-center my-16 lg:w-96 mx-auto">
  <p className="text-red-600 text-xl lg:text-2xl border-y-2 py-2 mt-2">All User </p>
</div>


      <div>

        <div className="overflow-x-auto">

          <table className="table">
           
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item, index) => <tr key={item._id}>
                <th>{index + 1} </th>
                <td> {item.name} </td>
                <td> {item.email} </td>
                <td>

                  {
                    item.role === 'admin' ? <button className="btn btn-outline">  admin </button>
                      :
                      <button 
                      onClick={() => handleMakeAdimn(item)} 
                      className=" btn bg-red-600 text-white"> Make admin </button>


                  }


                </td>
               
              </tr>)}


            </tbody>
          </table>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Allusers;
import { useQuery } from "@tanstack/react-query";
import img1 from '../assets/images (3).jpeg'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaTrash } from "react-icons/fa";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAdmin from "../Hooks/useAdmin";
import useAxoisSecure from "../Hooks/useAxiosSecure";

const Testschedule = () => {
const {user}=useContext(AuthContext)
const [isAdmin]=useAdmin()
const axoisPublic=useAxoisPublic()
const axoisSecure=useAxoisSecure()

  const { isPending, data: test ,refetch} = useQuery({
    queryKey: ['testTime'],
    queryFn: () =>
      fetch('https://radiance-education-server.vercel.app/testTime').then(
        (res) => res.json(),
      ),
  })

  if (isPending) return 'Loading...'


  const getDayName = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', weekday: 'long'}; 
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const handledelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
     
      if (result.isConfirmed) {
        axoisSecure.delete(`/testTime/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
           
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting post:", error);
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the post.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="pb-14">
      <h1 className="text-3xl my-10 "> 💫 UpComing Mock Test Date & Time:</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {test.map(item => (
          <div key={item._id} className="relative rounded-lg ">
            <div className="overlay-container">
              <img  src={img1} alt={`Test Image ${item._id}`} className="border p-4 rounded-lg h-44 w-full " />
              <div className="overlay"></div>
            </div>

            <div className="absolute top-0 left-0 p-4 text-white ">
            <p className="lg:text-xl"> 🕰️ Date : {getDayName(item.date)} </p>
              <p>🕧 Time : {item.time} {item.Period}</p>
              <p className="text-sm lg:text-base"> 💸 Offer fees : {item.fees} BDT</p>
             <div className="flex items-center justify-between">
              <p className="lg:pt-2 text-xs"> 🔍 Exam code : {item.examNumber}</p>
              {
                isAdmin && <button  onClick={()=>handledelete(item._id) } className="text-red-500 border bg-black p-2 rounded-lg"> <FaTrash></FaTrash> </button>
              }

             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testschedule;

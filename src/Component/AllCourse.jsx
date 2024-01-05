import { useQuery } from "@tanstack/react-query";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import Swal from "sweetalert2";
import useAxoisSecure from "../Hooks/useAxiosSecure";


const AllCourse = () => {
  const axoisPublic=useAxoisPublic()
  const axoisSecure=useAxoisSecure()

  const [isAdmin]=useAdmin()

  const { isPending, data:course ,refetch} = useQuery({
    queryKey: ['course'],
    queryFn: () =>
      fetch('https://radiance-education-server.vercel.app/Course').then(
        (res) => res.json(),
      ),
  })

  if (isPending) return <Spinner></Spinner>

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
        axoisSecure.delete(`/Course/${_id}`)
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
    <div>
      <div className="text-center">
        <p className="text-red-600"> All Popular Course </p>
        <p className="text-2xl font-medium mt-3 ">
          Achieve Success in English & IELTS with Our Expert Instructors
        </p>
        <p className="border-b-2 w-96 mx-auto border-animation mt-4"> </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 mt-10 p-2 lg:p-0">
        {course.map((item) => (
          <div key={item._id} className="relative ">
            {isAdmin && (
              <button
                onClick={() => handledelete(item._id)}
                className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            )}
            <Link to={`/details/${item._id}`}>
              <img className="w-72 h-72 border-2 border-red-500 rounded-md" src={item.image} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
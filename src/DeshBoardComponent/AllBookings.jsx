import { useQuery } from "@tanstack/react-query";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import Spinner from "../Component/Spinner";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import useAxoisSecure from "../Hooks/useAxiosSecure";


const AllBookings = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([])
  const axiosPublic = useAxoisPublic()
  const axoisSecure=useAxoisSecure()

  const { isPending, data:testData, refetch} = useQuery({
    queryKey: ['mock'],
    queryFn: async () => {
      const res = await axoisSecure.get("/MockBooking");
      return res.data;
    }
  });


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
        axiosPublic.delete(`/MockBooking/${_id}`)
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

  const handleSearch = () => {
    const searchTerm = searchInput.trim().toLowerCase();
    if (!searchTerm) {
      setFilteredData([]);
      return;
    }

    const filtered = testData.filter(
      (item) =>
        item.studentData.examNumber.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filtered);
  };


  return (
    <div>
      <div className="text-center my-2 lg:my-12 lg:w-96 mx-auto ">
        <p className="text-red-600 text-xl lg:text-2xl border-y-2 py-2 mt-2">
          📝 All Mock Test Bookings 📜
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by Exam Number"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="input input-bordered input-error max-w-xs  ml-2"
        />
        <button className="btn bg-red-500 text-white" onClick={handleSearch}>Search</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Exam Number</th>
              <th>Phone Number </th>
              <th>transactionId</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(filteredData.length > 0 ? filteredData : testData)
              ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1} </th>
                  <td>{item.studentData.studentName}</td>
                  <td>{item.studentData.email}</td>
                  <td>{item.studentData.examNumber}</td>
                  <td>{item.studentData.phoneNumbe}</td>
                  <td> {item.transactionId} </td>
                  <td>
                    <button
                      onClick={() => handledelete(item._id)}
                      className="btn text-red-600"
                    >
                      <FaTrash></FaTrash>{' '}
                    </button>{' '}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookings;
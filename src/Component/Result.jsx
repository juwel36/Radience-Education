import { useQuery } from "@tanstack/react-query";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import { useContext, useState } from "react";
import { FcReading } from "react-icons/fc";
import { RiSpeakLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { FaEarListen } from "react-icons/fa6";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Result = () => {
  const [searchResults, setSearchResults] = useState([]);
  const axiosPublic = useAxoisPublic()
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleresult=async(e)=>{
e.preventDefault()
const Name=e.target.name.value
const number=e.target.number.value
const examcode=e.target.code.value



try {
  setLoading(true);
  const response = await axiosPublic.get('/result', {
    params: {
      ExamCode: examcode,
      PhoneNumber: number,
    },
  });
  setSearchResults(response.data);
  setSearchPerformed(true);
  setLoading(false);
 
} catch (error) {
  console.error('Error fetching result:', error);
}
  }

  return (
    <div>
      <Navbar></Navbar>

      <div>
        <div>
          <p className="text-2xl bg-red-200 p-10 text-center">Get your IELTS MOCK Test results</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <p className="mt-6 text-xl text-center">Fill in your details to check your results :  </p>
          <div className="w-96 mx-auto mb-10 mt-4 bg-red-100 rounded-lg  p-10 bg-gradient-to-b from-red-100 to-red-200 ">
            <form onSubmit={handleresult}>

              <div>
                <label className="pt-8 text-lg">Name : *</label>
                <input className="input input-bordered input-error w-full" type="text" required name="name" />
              </div>
              <div>
                <label className="pt-8 text-lg">Phone Number : *</label>
                <input className="input input-bordered input-error w-full" type="text" required name="number" />
              </div>
              <div>
                <label className="pt-8 text-lg"> Exam Code : *</label>
                <input className="input input-bordered input-error w-full" type="text" required name="code" />
              </div>
          

<input type="submit" className="btn bg-red-500 text-white w-full mt-2" value="Get Result " />
{loading&& (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )} 

            </form>



          </div>
<div> 
{searchPerformed && searchResults.length > 0 ? (
        <div className=" w-96 mx-auto">
          <p className="text-xl font-bold mb-2">Your Full Score : </p>
          <div className="mb-16">
            {searchResults.map((result) => (
              <div key={result._id}>
                <div className="border-b-2 border-dotted w-64">
                <p className=""><span className="text-red-700"> Name:  </span>{result.canditateName}</p>
                
                <p className=""> <span className="text-red-700"> Exam Code: </span>  {result.ExamCode}</p>
                <p className="mb-2"> <span className="text-red-700"> Phone Number :</span>  {result.PhoneNumber}</p>
                </div>
              <div className="bg-gray-200 p-2 px-3 w-64 rounded-lg shadow-md mt-3">
              <p className="text-lg flex justify-between"> <span className="flex gap-3 items-center"> <FcReading />
              Reading   </span> {result.Reading} </p>
              </div>
              <div className="bg-gray-200 p-2 px-3 w-64 rounded-lg shadow-md mt-3">
              <p className="text-lg flex justify-between"> <span className="flex gap-3 items-center"> <RiSpeakLine />
              Speaking </span>{result.Speaking} </p>
              </div>
              <div className="bg-gray-200 p-2 px-3 w-64 rounded-lg shadow-md mt-3">
              <p className="text-lg flex justify-between"> <span className="flex gap-3 items-center"> <TfiWrite />
              Writing </span>{result.
Writing}</p></div>
              <div className="bg-gray-200 p-2 px-3 w-64 rounded-lg shadow-md mt-3">
              <p className="text-lg flex justify-between"> <span className="flex gap-3 items-center"> <FaEarListen />
              Listening  </span>{result.
Listening}</p></div>
              <div className="bg-gray-200 p-2 px-3 w-64 rounded-lg shadow-md mt-3">
              <p className="text-base flex justify-between"> <span className="flex gap-3 items-center font-bold"> 
              Ovarall band score </span>{result.
Overall} </p></div>
              </div>
            ))}
          </div>
        </div>
      ) : searchPerformed ? (
        <div className="w-96 mx-auto mb-20">
          <p className="text-red-500 text-lg font-bold">Score not found. Please check your details and try again.</p>
        </div>
      ) : null}
      </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Result;
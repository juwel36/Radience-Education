import Swal from "sweetalert2";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import { useState } from "react";
import useAxoisSecure from "../Hooks/useAxiosSecure";


const AddResult = () => {
const axoisPublic=useAxoisPublic()
const [afterloading,setAfterloading]=useState(false)
const axoisSecure=useAxoisSecure()

const handleaddresult=async(e)=>{
e.preventDefault()
setAfterloading(true); 
const canditateName=e.target.name.value
const PhoneNumber=e.target.PhoneNumber.value
const Reading=e.target.reading.value
const Speaking=e.target.speaking.value
const Writing=e.target.writing.value
const Listening=e.target.listening.value
const Overall=e.target.overall.value
const ExamCode=e.target.code.value

const alldata={
  canditateName,PhoneNumber,Reading,Speaking,Writing,Listening,Overall,ExamCode
}

const postdata=await axoisSecure.post('/result',alldata)
  if(postdata.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "posted succesfully",
      showConfirmButton: false,
      timer: 1500
    });
e.target.reset();
  }
  setAfterloading(false); 
}



  return (
    <div>
      <div className="text-center my-6 lg:w-96 mx-auto ">
      <p className="text-red-600 text-xl lg:text-2xl border-y-2 py-2 mt-2">📝 Add Result 📜</p>
      </div>

<div className="p-2 ">

<form onSubmit={handleaddresult}>
<div className="max-w-lg mx-auto">
<div className="flex gap-4 mt-3">
        <div>
       <label>Canditate Name : * <br /></label> 
        <input className="input input-bordered input-error w-full" type="text" required name="name" />
        </div>
        <div>
        <label className="">Phone Number : * <br /></label>
        <input className="input input-bordered input-error w-full" type="text" required name="PhoneNumber" />
        </div>
       </div>
{/*  */}
<div className="flex gap-4 mt-3">
<div>
       <label> Reading Point :* <br /></label> 
        <input className="input input-bordered input-error w-full" type="text" required name="reading" />
        </div>
        <div>
        <label className=""> Speaking Point : * <br /></label>
        <input className="input input-bordered input-error w-full" type="text" required name="speaking" />
        </div>  

     </div>
{/*  */}
<div className="flex gap-4 mt-3">
<div>
       <label>Writing Point : * <br /> </label> 
        <input className="input input-bordered input-error w-full" type="text" required name="writing" />
        </div>
        <div>
        <label className=""> Listenting Point : * <br /></label>
        <input className="input input-bordered input-error w-full" type="text" required name="listening" />
        </div>  

     </div>
{/*  */}
<div className="flex gap-4 mt-3">
<div>
       <label> OverAll : * <br /> </label> 
        <input className="input input-bordered input-error w-full" type="text" required name="overall" />
        </div>
        <div>
       <label>Exam Code : * <br /> </label> 
        <input className="input input-bordered input-error  w-full" type="text" required name="code" />
        </div>  

     </div>
    
<input type="submit" className="btn bg-red-500 text-white mt-2 " value="Submit" />

</div>
{afterloading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )} 
</form>

</div>



    </div>
  );
};

export default AddResult;
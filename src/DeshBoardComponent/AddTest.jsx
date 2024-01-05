import { useState } from "react";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxoisSecure from "../Hooks/useAxiosSecure";


const AddTest = () => {

  const axoisSecure=useAxoisSecure()
  const axoisPublic=useAxoisPublic()
  const [afterloading,setAfterloading]=useState(false)

  const handlemocksubmit =async(e)=>{
    e.preventDefault();
    setAfterloading(true);
    const date=e.target.date.value;
    const time=e.target.time.value;
    const fees=e.target.fees.value;
    const Period=e.target.Period.value;
    const examNumber=e.target.examNumber.value;
  const mockdata={
   date,
    time,
    fees,
    examNumber,
    Period
  }
 
  const postdata=await axoisSecure.post('/testTime',mockdata)
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
        <div className="p-2 lg:p-10">
        <div className="text-center my-16 lg:w-96 mx-auto ">
      <p className="text-red-600 text-xl lg:text-2xl border-y-2 py-2 mt-2">📝 Add Mock test schedule 📜</p>
      </div>
    
      <form onSubmit={handlemocksubmit}>
     <div className="flex gap-5">
     <div>
        <label>Date:*</label>
        <input className=" input input-bordered input-error w-full" type="date"  required name="date" />
        </div>

<div className="flex">
      <div>
      <label className="pt-8">Time : *</label>
        <input className="input input-bordered input-error w-full" type="text" required name="time"  />
        
      </div>
       
        <div>
        <label className="pt-8"> Period *</label>
        <select className="select select-error w-full" name="Period" id="">
<option value="am">am</option>
<option value="pm">pm</option>

        </select>
        </div>
</div>
     </div>
        
       <div className="flex gap-4 mt-3">
        <div>
       <label>Fees: * </label> 
        <input className="input input-bordered input-error w-full" type="text" required name="fees" />
        </div>
        <div>
        <label className="">Exam code: *</label>
        <input className="input input-bordered input-error w-full" type="text" required name="examNumber" />
        </div>
       </div>
        <br />
        
<input type="submit" className="btn bg-red-600 text-white mt-1 w-full" value=" Book Seat"  />
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

export default AddTest;
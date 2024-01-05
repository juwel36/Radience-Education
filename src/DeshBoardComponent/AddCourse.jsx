import { useState } from "react";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxoisSecure from "../Hooks/useAxiosSecure";
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddCourse = () => {
  const axoisSecure=useAxoisSecure()

  const axoisPublic=useAxoisPublic()
  const [afterloading,setAfterloading]=useState(false)
  

  const currentDateTime = new Date();
  const currentTime = currentDateTime.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setAfterloading(true); 

    const imageFile = { image: e.target.elements.image.files[0] };
    const res=await axoisPublic.post(image_hosting_api, imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
      } )

    const description = e.target.description.value;
  
    const userData = {
      image: res.data.data.display_url,
      description,
      timestamp:currentTime,
    };
  
  

    const postdata = await axoisSecure.post('/Course', userData);
    console.log(postdata);
    if(postdata.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Course posted succesfully",
        showConfirmButton: false,
        timer: 1500
      });
    
      e.target.reset();
      }

    setAfterloading(false); 
  };
  

  return (
    <div className="p-2">
      <div className="text-center my-6 lg:w-96 mx-auto ">
      <p className="text-red-600 text-xl lg:text-2xl border-y-2 py-2 mt-2">📝 Add Course 📜</p>
      </div>
      <form onSubmit={handleSubmit} >
<div className=" mt-7">

<div className="w-full">
<h1 className="text-xl font-bold text-black pt-4 pb-3">Author Name</h1>
<textarea name="description"  className="lg:w-96 h-40 textarea textarea-error" placeholder="type"></textarea>

</div>
<div>
        
<label className="label">
    <span className="label-text text-xl font-bold text-black  pb-1">Image</span>
  </label>
  <input className="" required type="file" name="image" />


      
</div>
</div>




<input type="submit" className="btn bg-red-600 mt-2 text-white" value="Submit" />

{afterloading && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )}

</form>
    </div>
  );
};

export default AddCourse;
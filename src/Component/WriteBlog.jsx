import { useContext, useState } from "react";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { FaCamera, FaShare, FaTrash } from "react-icons/fa";
import { SlDislike, SlLike } from "react-icons/sl";
import useAxoisSecure from "../Hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const WriteBlog = () => {
  const axoisPublic = useAxoisPublic()
  const [afterloading, setAfterloading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const axoisSecure=useAxoisSecure()

  const { user } = useContext(AuthContext)

  const { isPending, data: users, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axoisPublic.get(`users?email=${user?.email}`)
      return res.data
    }

  })

  const { data: myblog, refetch: refresh } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      const res = await axoisPublic.get(`blogs?email=${user?.email}`)
      return res.data
    }

  })




  if (isPending) {
    return <Spinner></Spinner>
  }



  const userPhotoUrl = users?.[0]?.photoUrl || user?.photoURL;
  const blogsPhotoUrl = myblog?.[0]?._id;


  if (isPending) return <Spinner></Spinner>

  const currentDateTime = new Date();
  const currentTime = currentDateTime.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setAfterloading(true);


    if (user) {
      const imageFile = { image: e.target.elements.image.files[0] };
      const res = await axoisPublic.post(image_hosting_api, imageFile, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      const email = user?.email
      const name = user?.displayName;
      const photoUrl = userPhotoUrl;
      const title = e.target.title.value;
      const description = e.target.description.value;
      const like = "0"
      const dislike = "0"

      const userData = {
        email,
        photoUrl,
        name,
        thumbnil: res.data.data.display_url,
        description,
        title,
        like,
        dislike,
        timestamp: currentTime
      };


      const postdata = await axoisPublic.post('/blogs', userData);
      console.log(postdata);
      if (postdata.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Blog posted succesfully",
          showConfirmButton: false,
          timer: 1500
        });

        e.target.reset();
      }
      setAfterloading(false);
      refresh()

    }
    else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "you need to log in for Post",
        showConfirmButton: false,
        timer: 3000
      });
      setAfterloading(false);
    }


  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handlepatchimage = async (e, userId) => {
    e.preventDefault();
    setAfterloading(true);

    const imageFile = { image: e.target.elements.image.files[0] };
    const res = await axoisPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });



    const menuItem = {
      photoUrl: res.data.data.display_url,
    };
    const Menures = await axoisPublic.patch(`/users/${userId}`, menuItem);
    setAfterloading(false);
    try{
      const blogss = await axoisPublic.patch(`/blogs/${blogsPhotoUrl}`, menuItem);
      console.log(Menures);
      console.log(Menures, blogss);
  
  
      e.target.reset();
  
      refetch()
      setAfterloading(false);
    }catch(error){
      console.log(error);
    }
    // const blogss = await axoisPublic.patch(`/blogs/${blogsPhotoUrl}`, menuItem);
    // console.log(Menures);
    // console.log(Menures, blogss);


    e.target.reset();

    refetch()
    setAfterloading(false);
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
        axoisPublic.delete(`/blogs/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refresh()
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


  const handleShare = async (data) => {
    if (user) {
      if (navigator.share) {
        try {
          await navigator.share({
            image: data.image,
            name: data.name,
            thumbnil: data.thumbnil,
            description: data.description,
            title: data.title,
            like: data.like,
            dislike: data.dislike,
            timestamp: data.currentTime,
            url: `${window.location.origin}/blog/${data._id}`,
          });
          history.push(`/blog/${data._id}`);
        } catch (error) {
          console.error(error);
        }
      } else {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Web Share API not supported in this browser. You can manually copy the link.",
          showConfirmButton: false,
          timer: 3000,
        });
      }

    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You have to Log in for share",
        showConfirmButton: false,
        timer: 1500
      });

    }


  };


  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-evenly p-5 lg:p-0">


        <div>
          <form onSubmit={handleSubmit}>

            {/* ---- */}
            <div className="w-96">

              <div className="w-full">
                <h1 className="text-xl font-semibold text-red-600 pt-4 pb-3">
                  Blog Title </h1>
                <input type="text" required name="title" placeholder="blog title . . . . ." maxLength="70" className="input input-bordered input-error w-full " />
              </div>
              <div className="w-full">
                <h1 className="text-xl font-semibold text-red-600 pt-4 pb-3">Blog
                  Description </h1>
                <textarea name="description" required id="" className="input input-bordered input-error w-full h-40" placeholder="blog description . . . . ." ></textarea>

              </div>
              <div className="w-full">
                <h1 className="text-xl font-semibold text-red-600 pt-4 ">Thumbnil Image</h1>
                <p className="pb-3 text-xs mt-2">Try to upload " 2048*1152 " Banner size image.</p>
                <input className="" required type="file" name="image" />
              </div>
              <input type="submit" className="btn bg-red-500 w-full mt-5 text-white" value="Submit" />
            </div>


            {afterloading && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                <span className="loading loading-spinner text-primary"></span>
              </div>
            )}
          </form>
        </div>

        <div className="mt-10">

          {user ? (
            <div>
              <div>
                <p className="border-b-2 border-red-500 mb-5 font-medium"> Your Profiles</p>

                {
                  users?.map(item => (
                    <div className="" key={item._id}>
                      <div className="">

                        <img className="w-28 h-28  rounded-full" src={item.photoUrl || user?.photoURL} alt="" />
                      </div>
                      <div className="mt-4 ">

                        <p className="text-2xl"> Name: <span className="text-red-600">  {item.name}</span> </p>
                        <p className="text-xs mt-3">Email: {item.email} </p>
                      </div>
                      <div className="mt-5">
                        <form onSubmit={(e) => handlepatchimage(e, item._id)}>
                          <label className="label">
                            <span className="label-text text-red-00">Edit profile photo</span>
                          </label>
                          <input className=" block" type="file" name="image" onChange={handleFileChange} />
                          <input className="btn border-2 px-1 text-red-500 rounded-lg mt-2" type="submit" value="Edit Photo" disabled={!selectedFile} />

                        </form>
                      </div>




                    </div>


                  ))
                }
              </div>
              <div>
               

                {myblog?.length > 0 ? (
  <div>
    <p className="text-xl my-5 mt-10 font-semibold border-b-4 w-28 text-red-500"> Your Blogs </p>
    {myblog?.map((data) => (
                  <div key={data._id}>
                    <div className="card card-compact mb-7 shadow-xl">
                      <figure className="relative">
                        <img className="h-40 w-full" src={data.thumbnil} alt="image" />
                        <div className="absolute top-2  rounded-md left-2  bg-red-500  p-2">
                          <p className="text-white text-xs">
                            {new Date(data.timestamp).toLocaleTimeString([], {
                              hour: 'numeric',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                        <div>
                          {user && (
                            <button
                              onClick={() => handledelete(data._id)}
                              className="absolute top-2  rounded-md right-2 mt-2 mr-2 bg-red-500 text-white px-2 py-1 rounded"
                            >
                              <FaTrash></FaTrash>
                            </button>
                          )}
                        </div>
                      </figure>

                      <div className="card-body">
                        <h2 className="text-black text-base font-mono">{data.title}</h2>


                        <div >

                          <p className="text-red-400 flex gap-9 mt-4">
                            <span className="flex items-center gap-1 font-bold">
                              ( <SlLike /> {data.like} )
                            </span>
                            <span className="flex items-center gap-1 font-bold">
                              ( <SlDislike /> {data.dislike} )
                            </span>

                          </p>
                        </div>
                        <div className="flex items-center gap-8  justify-between">
                          <div className="flex items-center gap-3">   <img className="w-11 h-11 rounded-full" src={data.photoUrl} alt="" />
                            <p className="text-black">{data.name}</p>
                          </div>
                          <button onClick={() => handleShare(data)} className="text-red-500"> <FaShare></FaShare>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}

  </div>
) : (
  <p className="text-red-500">No blogs available. Start writing now! 📝</p>
)}


              
              </div>
            </div>
          ) : (
            <p className="text-red-500">You need to log in for this section ⚠️</p>
          )}






        </div>


      </div>


      <div className="mt-14">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default WriteBlog;
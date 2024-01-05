import { useContext, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import useAxoisPublic from "../Hooks/useAxiosPublic";
import { SlDislike, SlLike } from "react-icons/sl";
import Swal from "sweetalert2";
import useAdmin from "../Hooks/useAdmin";
import { FaShare, FaTrash } from "react-icons/fa";
import img4 from '../assets/icu-batch.jpg'
import img5 from '../assets/mocktest-poster.jpg'
import useAxoisSecure from "../Hooks/useAxiosSecure";



const Blog = () => {
  const [expanded, setexpanded] = useState(false);
  const axoisPublic = useAxoisPublic()
  const [blogVotes, setBlogVotes] = useState({});
  const [isAdmin] = useAdmin()
  const { user } = useContext(AuthContext)
  const axoisSecure=useAxoisSecure()
  const toggleContent = () => {
    setexpanded(!expanded);
  };

  const { isPending, data: blogdata, refetch } = useQuery({
    queryKey: ['blogs'],
    queryFn: () =>
      fetch('https://radiance-education-server.vercel.app/blogs').then(
        (res) => res.json(),
      ),
  })


  const {  data: myblog,refetch:refresh } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      const res = await axoisPublic.get(`blogs?email=${user?.email}`)
      return res.data
    }

  })

  
  if (isPending) return <Spinner></Spinner>
  


  const handleVote = async (type, _id) => {
    if (user) {
      if (!blogVotes[_id]) {
        const response = await axoisPublic.patch(`/blogs/${_id}/vote`, { type });
        if (response.data) {
          setBlogVotes((prevVotes) => ({
            ...prevVotes,
            [_id]: { voted: true, voteType: type },
          }));
          refetch();
        }
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You have to log in to like/dislike",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
        axoisSecure.delete(`/blogs/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
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

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto mt-10 p-10 lg:p-0">

        {/* --------------------------------------------------- */}



        <div>

        <div className="fixed bottom-5 right-0 z-40 bg-white p-4 border border-red-600 border-2 rounded-lg w-48">
      <h1 className="text-xs ">What's on your mind?</h1>
      <Link to="/writeBlog">
        <button className="btn bg-red-600 mt-2 text-white">Write your Blog</button>
      </Link>
    </div>

          <div className=" flex flex-col lg:flex-row gap-10" style={{ overflowX: "hidden" }} >
            <div className=" text-red-500  lg:w-4/6">
              <p className="text-2xl text-center mb-10 font-semibold ">Blogs</p>
              <div className=" mb-10 grid grid-cols-1 gap-10">
                {blogdata.map((data) => (
                  <div key={data._id}>
                    <div className="card card-compact  shadow-xl">
                      <figure className="relative">
                        <img className="h-72 w-full" src={data.thumbnil} alt="image" />
                        <div className="absolute top-2  rounded-md left-2  bg-red-500  p-2">
                          <p className="text-white text-xs">
                            {new Date(data.timestamp).toLocaleTimeString([], {
                              hour: 'numeric',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                        <div>
                          {isAdmin && (
                            <button
                              onClick={() => handledelete(data._id)}
                              className="absolute top-2  rounded-md right-2 mt-2 mr-2 bg-red-500 text-white px-2 py-1 rounded"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </figure>

                      <div className="card-body">
                        <h2 className="text-black text-2xl font-mono">{data.title}</h2>
                        <div className="text-black">
                          <p>{expanded ? data.description : `${data.description.slice(0, 200)}...`}</p>

                          {data.description.length > 40 && (
                            <button
                              onClick={toggleContent}
                              className="text- underline"
                            >
                              {expanded ? "Show Less" : "Show All"}
                            </button>
                          )}
                        </div>

                        <div>

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



                          <div className="flex gap-4 my-5">
                            <button
                              onClick={() => handleVote('like', data._id)}
                              className={`flex btn gap-2 items-center rounded-lg p-1 px-3 ${blogVotes[data._id]?.voteType === 'like' ? 'bg-blue-500 text-white' : ''
                                }`}
                              disabled={blogVotes[data._id]?.voted}
                            >
                              <SlLike />
                            </button>
                            <button
                              onClick={() => handleVote('dislike', data._id)}
                              className={`flex gap-2 btn items-center rounded-lg p-1 px-3 ${blogVotes[data._id]?.voteType === 'dislike' ? 'bg-blue-700 text-white' : ''
                                }`}
                              disabled={blogVotes[data._id]?.voted}
                            >
                              <SlDislike />
                            </button>
                            <button onClick={() => handleShare(data)} className="text-red-500"> <FaShare></FaShare>
                            </button>
                          </div>


                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="lg:w-2/6 ">


             
<div className="mt-14">
<iframe className="rounded" src="https://www.youtube.com/embed/sTW3dvuDmBE?si=1R6ynYHZWz0AuJDd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<img className=" my-10" src={img4} alt="" />

<iframe className="rounded" src="https://www.youtube.com/embed/yOgAbKJGrTA?si=NhE5Xq1KRJBq-hpq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<img className=" my-10" src={img5} alt="" />

</div>





            </div>
          </div>
        </div>





      </div>
      <div className="mt-14">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blog;
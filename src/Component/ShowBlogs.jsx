import { useQuery } from "@tanstack/react-query";
import { FaArrowRight } from "react-icons/fa";
import { SlDislike, SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";


const ShowBlogs = () => {

  const { isPending, data: blogdata, refetch } = useQuery({
    queryKey: ['blogs'],
    queryFn: () =>
      fetch('https://radiance-education-server.vercel.app/blogs').then(
        (res) => res.json(),
      ),
  })

  return (
    <div className="max-w-6xl mx-auto my-24">

<div className="text-center mb-10">
        <p className="text-red-600"> Latest News </p>
        <p className="text-3xl font-bold mt-3 ">
          Our New Articles
        </p>
        <p className="border-b-2 w-96 mx-auto border-animation mt-4"> </p>
      </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 ">
      {blogdata &&
        blogdata?.slice(0, 3).map((data) => (
          <div className="justify-self-center mx-auto" key={data._id}>
            <div className="w-80 h-72 card card-compact mb-7 shadow-xl">
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
              </figure>

              <div className="card-body">
                <h2 className="text-black text-sm font-mono">{data.title}</h2>

                <div>
                  <p className="text-red-400 flex gap-9 ">
                    <span className="flex items-center text-xs gap-1 ">
                      ( <SlLike /> {data.like} )
                    </span>
                    <span className="flex items-center text-xs gap-1 d">
                      ( <SlDislike /> {data.dislike} )
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-8  justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-7 h-7 mt-2 rounded-full" src={data.photoUrl} alt="" />
                    <p className="text-black">{data.name}</p>
                  </div>
                </div>
              <div className="flex justify-end">
              <Link to={`/blog/${data._id}`}> <p className="  w-20  text-red-500 font-semibold text-xs"> READ MORE... </p> </Link>
              </div>
              </div>
            </div>
          </div>
        ))}
    </div>
    <div className="flex justify-center">
      <Link to="blog">
      
  <button className='btn bg-red-500  text-white flex items-center gap-3'> More Blogs <FaArrowRight /> </button>
      </Link>
</div>
  </div>
  );
};

export default ShowBlogs;
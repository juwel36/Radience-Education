import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useAxoisPublic from '../Hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const BlogDetails = () => {
  const axiosPublic = useAxoisPublic();
  const [blogDetails, setBlogDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogDetails = async () => {
        const response = await axiosPublic.get(`/blogs/${id}`);
        setBlogDetails(response.data);
    };

    fetchBlogDetails();
  }, [axiosPublic, id]);

  if (!blogDetails) return <Spinner />;

  return (
    <div>
<Navbar></Navbar>
      <div>
      <div className="max-w-4xl mx-auto mt-10 p-10 lg:p-0">


        <div className="card card-compact shadow-xl my-10">
          <figure className="relative">
            <img className="h-72 w-full" src={blogDetails.thumbnil} alt="Blog Image" />
            <div className="absolute top-2 rounded-md left-2 bg-red-500 p-2">
              <p className="text-white text-xs">
                {new Date(blogDetails.timestamp).toLocaleTimeString([], {
                  hour: 'numeric',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </figure>

          <div className="card-body">
            <h2 className="text-black text-2xl font-mono">{blogDetails.title}</h2>
            <p className="text-black">{blogDetails.description}</p>

            <div>
              <p className="text-red-400 flex gap-9 mt-4">
                <span className="flex items-center gap-1 font-bold">
                  ( Like: {blogDetails.like} )
                </span>
                <span className="flex items-center gap-1 font-bold">
                  ( Dislike: {blogDetails.dislike} )
                </span>
              </p>
            </div>

            <div className="flex items-center gap-8 justify-between">
              <div className="flex items-center gap-3">
                <img className="w-11 h-11 rounded-full" src={blogDetails.photoUrl} alt="Author" />
                <p className="text-black">{blogDetails.name}</p>
              </div>

         
            </div>
          </div>
        </div>

      </div>
    </div>
        <Footer></Footer>
    </div>
  );
};

export default BlogDetails;

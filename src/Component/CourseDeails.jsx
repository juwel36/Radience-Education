import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const CourseDeails = () => {
  const { id } = useParams();
  const { isPending, data:courseDetails } = useQuery({
    queryKey: ['courseDetails'],
    queryFn: () =>
      fetch(`https://radiance-education-server.vercel.app/Course/${id}`).then(
        (res) => res.json(),
      ),
  })

  if (isPending) return <Spinner></Spinner>


  return (
    <div>
      <Navbar></Navbar>
    <div className="mt-10 max-w-6xl mx-auto" >

<div className='flex flex-col lg:flex-row gap-10 p-4 lg:p-0 items-center'>
<img className="w-96 h-96 border-2 rounded-md border-red-500" src={courseDetails?.image} alt="" />

<p className=''>{courseDetails.description.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>)}</p>
</div>
</div>
<div className='mt-14'>

<Footer></Footer>
</div>
    </div>
  );
};

export default CourseDeails;
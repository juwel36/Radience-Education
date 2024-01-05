

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const StudentsReview = () => {





  return (
    <div className=''>
        <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
<div className=' p-10 bg-white rounded-xl'>
<div className='flex items-center gap-4'>
<img className='w-16 h-16 rounded-full' src="https://i.ibb.co/RbpvykZ/MG-7867-01.jpg" />
<div className='text-black'>
  <p className='text-red-500 font-semibold'> Dwayne Jhonson </p> 
  <p>student</p>
</div>
</div>
<div>
  <p className='text-xs mt-7'>I had a fantastic experience with Rediance Education. The instructors are highly skilled and provide comprehensive guidance. The structured curriculum and regular mock tests significantly boosted my confidence for the IELTS exam.</p>
</div>
</div> 
        </SwiperSlide>
        <SwiperSlide>
<div className=' p-10 bg-white rounded-xl'>
<div className='flex items-center gap-4'>
<img className='w-16 h-16 rounded-full' src="https://i.ibb.co/376kx2Z/1-orig-08-01.jpg" />
<div className='text-black'>
  <p className='text-red-500 font-semibold'> Jayed Khan </p> 
  <p>student</p>
</div>
</div>
<div>
  <p className='text-xs mt-7'>The personalized attention I received at Rediance Education made a huge difference in my preparation. The faculty members are not only experts in their field but also very approachable. I felt well-supported throughout my IELTS journey.</p>
</div>
</div> 
        </SwiperSlide>
        <SwiperSlide>
<div className=' p-10 bg-white rounded-xl'>
<div className='flex items-center gap-4'>
<img className='w-16 h-16 rounded-full' src="https://i.ibb.co/P9j5Lkb/253990081-666781877820429-6735689603328731358-n.jpg" />
<div className='text-black'>
  <p className='text-red-500 font-semibold'> Saruk khan </p> 
  <p>student</p>
</div>
</div>
<div>
  <p className='text-xs mt-7'>Rediance Education's study materials are top-notch. The practice exercises, sample tests, and detailed feedback helped me understand my strengths and areas for improvement. I appreciate the emphasis on both content and test-taking strategies</p>
</div>
</div> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StudentsReview;
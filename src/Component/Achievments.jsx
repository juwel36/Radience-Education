
import img1 from '../assets/399040636_122119701824087677_7201969026962153494_n.jpg'

import img3 from '../assets/404303262_122118339014087677_5659345204187361762_n.jpg'
import img4 from '../assets/404630646_122118338972087677_8940420438679920788_n.jpg'
import img5 from '../assets/405820965_122119702292087677_2608912777484715448_n.jpg'
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import bg1 from '../assets/pngwing.com (22).png'
import bg2 from '../assets/pngwing.com (23).png'
import bg3 from '../assets/sucess2 (1).png'
import bg4 from '../assets/sucess2 (2).png'



const Achievments = () => {


  return (

<div id='achievements' className=' max-w-6xl mx-auto relative '>

<img
      src={bg1}
      alt="Background Image 1"
      className="absolute inset-0 w-16 top-3 opacity-30 h-16 z-0"
    />
<img
      src={bg3}
      alt="Background Image 1"
      className="absolute  w-16  right-10 top-36 opacity-10 h-16 z-0"
    />
<img
      src={bg4}
      alt="Background Image 1"
      className="absolute  w-40  right-36 top-56 opacity-20 h-40 z-0"
    />
    <img
      src={bg2}
      alt="Background Image 2"
      className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
    />

<div className='relative z-7'>

    <div className='flex  flex-col-reverse md:flex-row lg:flex-row justify-between items-center py-24 '>
<div className=' pt-5 lg:pt-0 md:w-2/4 lg:w-2/4'>
       <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-56 h-80 "
      >
        <SwiperSlide>
          <img className='rounded-lg' src={img1} alt="" /> 
           </SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src={img4} alt="" />  </SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src={img3} alt="" />  </SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src={img1} alt="" />  </SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src={img5} alt="" />  </SwiperSlide>
      </Swiper>

</div>
<div className=' p-5 lg:p-0 md:w-3/4 lg:w-3/4'>
 <h1 className='text-red-700 bg-red-500 text-white w-20 p-1 rounded'>  Why Ours </h1>
<p className='text-5xl my-5'> Our Best Achievements </p>
<p className='text-xs '> The success stories of our alumni speak volumes about the impact of our IELTS program. Many of our former students have gone on to pursue higher education in prestigious institutions, secure employment in international settings, and achieve personal milestones, all facilitated by their proficiency in the English language.
Join us at Radiance Education and become a part of a legacy of excellence in IELTS education. Your success is our priority, and we are dedicated to guiding you towards achieving your language proficiency goals. </p>

<div className='flex gap-5 mt-3'>
<p className='text-4xl bg-red-200 p-2 rounded-xl'> 8<span className='text-base'>20+</span> </p>
<p className='text-4xl bg-red-200 p-2 rounded-xl'> 7<span className='text-base'>30+</span > </p>
<p className='text-4xl bg-red-200 p-2 rounded-xl'> 6<span className='text-base'>70+</span> </p>
<p className='text-4xl bg-red-200 p-2 rounded-xl'> 5.5<span className='text-base'>100+</span> </p>


</div>




</div>

    </div>
</div>

</div>

  );
};

export default Achievments;
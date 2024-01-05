import img from '../assets/399347415_122112739238087677_8454850037602480999_n.jpg'
import img2 from '../assets/i want create banner for my Radiance Education ielts and english learning Educational Consult.png'
import img3 from '../assets/banner3.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  <img className='h-64 lg:h-96 w-full' src={img} alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='h-64  lg:h-96 w-full' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='h-64  lg:h-96 w-full' src={img3} alt="" /></SwiperSlide>
       
        
      </Swiper>
    
<div>

</div>


    </div>
  );
};

export default Banner;
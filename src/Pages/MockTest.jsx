import Navbar from "../Component/Navbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BookingForm from "../Component/BookingForm";
import Testschedule from "../Component/Testschedule";




const MockTest = () => {
  return (
    <div>
      <Navbar></Navbar>



      <div className='max-w-6xl mx-auto'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  <img className='h-64 lg:h-96 w-full' src="https://i.ibb.co/4dyyRJZ/411213274-122123002046087677-6705968011897669205-n.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='h-64  lg:h-96 w-full' src="https://i.ibb.co/dgdX34b/410632009-122123225690087677-7560991353971705709-n.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='h-64  lg:h-96 w-full' src="https://i.ibb.co/Rg3Rr3C/410784904-122123225726087677-7472096457129339707-n.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='h-64  lg:h-96 w-full' src="https://i.ibb.co/3rbQgRx/410488451-122123225630087677-4256236978286516840-n.jpg " alt="" /></SwiperSlide>
       {/* 
       


*/}

        
      </Swiper>
       
</div>

<div className="bg-red-100 text-center">
  <div className="py-8 my-5">

   <p className="text-3xl "> IELTS Mock Test </p>
   <p className="text-base pt-2 "> Want to pass the IELTS ? Practise with our range of tests! And you are sure to get a better score! </p>
  </div>
</div>

<div className='max-w-6xl mx-auto p-2 lg:p-0'>
<p className="text-3xl font-serif py-3"> Why try IELTS mock tests?</p>
<p>At Redience, we believe in empowering students to achieve their dreams of studying or working abroad. Our IELTS mock test section is designed to provide a realistic exam experience, allowing students to assess their readiness and identify areas for improvement. We are committed to making quality education accessible to all, and our affordable costs ensure that financial constraints never hinder academic aspirations.</p>
<div className="mt-8">
<p className="text-xl pb-3"> ✅We are dealing with: </p>
<p className="font-semibold font-serif"> 📌 Realistic Exam Environment</p>
<p className="font-semibold font-serif"> 📌 Quality Qustion </p>
<p className="font-semibold font-serif"> 📌 Feedback after speaking test</p>
<p className="font-semibold font-serif"> 📌 𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐚𝐧𝐝 𝐖𝐫𝐢𝐭𝐢𝐧𝐠 𝐟𝐞𝐞𝐝𝐛𝐚𝐜𝐤 𝐨𝐧 𝐦𝐨𝐜𝐤      𝐞𝐱𝐚𝐦 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐚𝐟𝐭𝐞𝐫 𝐫𝐞𝐬𝐮𝐥𝐭 𝐩𝐮𝐛𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧  </p>


</div>
<div className="mt-16">

<Testschedule></Testschedule>
<BookingForm></BookingForm>

</div>

</div>

    </div>
  );
};

export default MockTest;
import Footer from "../../Component/Footer";
import Location from "../../Component/Location";
import Navbar from "../../Component/Navbar";
import OurTeam from "../../Component/OurTeam";
import Testimonial from "../../Component/Testimonial";
import img2 from '../../assets/about.png'

const AboutUs = () => {



  return (
    <div>
<Navbar></Navbar>
<div className="w-full h-40 lg:h-80 bistro-item bg-fixed ">
</div>
<div className=" py-20">
<div className='max-w-6xl mx-auto flex justify-evenly items-center flex-col md:flex-row lg:flex-row'>
      <div className='w-1/2'>
        <div className='flex justify-end lg:mr-14  '>
    
        <img className=' lg:w-96' src="https://i.ibb.co/7Nfd6W5/Screenshot-2024-01-05-001510-removebg-preview.png" alt="" />

        </div>
      </div>



<div className=' md:w-1/2 lg:w-1/2 p-3 lg:p-0'>
  <p className='text-red-500'> About </p>
  <p className='text-2xl lg:text-4xl font-semibold my-4'> Welcome To Radiance Education </p>

<p className='text-xs lg:text-sm mb-6 '>
Welcome to Radiance Education, where excellence meets learning in a harmonious blend we call "A Tone of Quality Education." At Radiance, we illuminate the path to IELTS success with a commitment to unparalleled teaching standards. Our dedicated faculty brings expertise and passion, ensuring a transformative educational experience. We prioritize individualized attention, fostering a supportive environment for language mastery. Radiance Education is not just a center; it's a journey towards linguistic brilliance. Join us in sculpting your language proficiency and unlocking doors to a radiant future. Experience the resonance of quality education at Radiance - where every student's success echoes our commitment.</p>



</div>


    </div>
<div className="bg-red-100 ">
<div className="px-2">

<Testimonial></Testimonial>

</div>
</div>
<OurTeam></OurTeam>





</div >

<Footer></Footer>      
    </div>
  );
};

export default AboutUs;
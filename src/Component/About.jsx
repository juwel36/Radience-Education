import { Link } from 'react-router-dom';
import img2 from '../assets/about.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


const About = () => {

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init();
  }, []);



  return (

<div id='about' className='max-w-6xl mx-auto pt-10  pb-24 '>
    <div className='flex justify-evenly items-center flex-col md:flex-row lg:flex-row'>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='w-1/2'>
        <div className='flex justify-end lg:mr-14  '>
    
<img className=' lg:w-96' src="https://i.ibb.co/7Nfd6W5/Screenshot-2024-01-05-001510-removebg-preview.png" alt="" />

        </div>
      </div>



<div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className=' md:w-1/2 lg:w-1/2 p-3 lg:p-0'>
  <p className='text-red-500'> About </p>
  <p className='text-2xl lg:text-4xl font-semibold my-4'> Welcome To Radiance Education </p>

<p className='text-xs lg:text-sm mb-6 '>
Welcome to Radiance Education, where excellence meets learning in a harmonious blend we call "A Tone of Quality Education." At Radiance, we illuminate the path to IELTS success with a commitment to unparalleled teaching standards. Our dedicated faculty brings expertise and passion, ensuring a transformative educational experience. We prioritize individualized attention, fostering a supportive environment for language mastery. Radiance Education is not just a center; it's a journey towards linguistic brilliance. Join us in sculpting your language proficiency and unlocking doors to a radiant future. Experience the resonance of quality education at Radiance - where every student's success echoes our commitment.</p>

<Link to='/aboutUs'> <button className='btn bg-red-500 text-white'> Read More ...</button> </Link>


</div>


    </div>

</div>

  );
};

export default About;
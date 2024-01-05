import StudentsReview from "./StudentsReview";
import img from '../assets/pngwing.com (22).png'
import img1 from '../assets/pngwing.com (23).png'

const Testimonial = () => {

  


  return (
    <div className="relative max-w-6xl mx-auto">
    
    <img
      src={img}
      alt="Background Image 1"
      className="absolute inset-0 w-16 top-3 opacity-30 h-16 z-0"
    />
    <img
      src={img1}
      alt="Background Image 2"
      className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
    />

    <div className="relative z-10">
      <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-around py-20 mt-28">
        <div className="lg:w-1/3">
          <p className="text-xl font-normal text-rose-900">Testimonial </p>
          <p className="text-4xl font-semibold py-2 mt-5">
            See What <br /> Our Students Say’s
          </p>
          <p className="text-sm mt-8">
            Showcase any notable achievements of your students. If they
            achieved high scores, gained admission to prestigious
            institutions, or experienced other positive outcomes, include
            these details in the testimonials.
          </p>
        </div>

        <div className="lg:w-1/3">
          <StudentsReview></StudentsReview>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Testimonial;
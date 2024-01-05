import img1 from '../assets/yasir.jpg'
import img2 from '../assets/s2.jpg'
import img3 from '../assets/s3.jpg'
import img4 from '../assets/pollob.jpg'

const OurTeam = () => {
  return (
   <div className='max-w-6xl mx-auto my-16'>
 <div className="text-center my-10 w-96 mx-auto  ">
      <p className="text-red-600 text-xl  "> Top-performing Mentor </p>
      <p className="border-animation  text-black text-3xl border-y-2 py-2 mt-2"> Our Team </p>


    </div>

     <div className='grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-10 text-center '>
      <div className='team-member'>
        <img className='w-64 h-60 rounded-lg' src={img1} alt="" />
        <h1 className='text-2xl font-semibold mt-4'> Yasir rahman </h1>
        <p className='text-sm mt-1'>Senior instructor</p>
      </div>
      {/*  */}
      <div className='team-member'>
        <img className='w-64 h-60 rounded-lg' src={img2} alt="" />
        <h1 className='text-2xl font-semibold mt-4'> Rafi Rahman </h1>
        <p className='text-sm mt-1'>Assistant teacher</p>
      </div>
      {/*  */}
      <div className='team-member'> 
        <img className='w-64 h-60 rounded-lg' src={img3} alt="" />
        <h1 className='text-2xl font-semibold mt-4'> Zihaf rayhan </h1>
        <p className='text-sm mt-1'>Assistant teacher</p>
      </div>
      {/*  */}
      <div className='team-member'>
        <img className='w-64 h-60 rounded-lg' src={img4} alt="" />
        <h1 className='text-2xl font-semibold mt-4'> Pollov Roy </h1>
        <p className='text-sm mt-1'>Assistant teacher</p>
      </div>
      {/*  */}
    </div>
   </div>
  );
};

export default OurTeam;
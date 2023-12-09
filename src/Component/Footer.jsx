import { FaFacebook, FaInstagram, FaPhone, FaSearchLocation, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer footer-center p-10 bg-black text-base-content rounded">
<div className="max-w-6xl mx-auto text-white">
<div className="text-white text-3xl">
Radiance Education
</div>

  <div className="flex items-center gap-4 my-5">
   <div className="flex items-center gap-4">
<FaSearchLocation></FaSearchLocation> <h1 className="text-xs"> Scout building- 2nd Floor, Opposite of Moulvibazar Pourosova, <br /> Court Road, Moulvibazar, Maulvi Bazar,Bangladesh, 3200</h1>
   </div>
<div className="flex items-center gap-4">
  <FaPhone></FaPhone> <h1> 
01759-787364</h1>
</div>
  </div> 
  <nav>
    <div className="grid grid-flow-col gap-4 mb-5">
      <div className="text-2xl">
        <a href="https://api.whatsapp.com/send?phone=%2B8801759787364&data=ARCgoc1Fl64Ae006k335Y5w_OaKfyuX20ZfEEWPSA0fmeLK8AQQPzBcV_WLc6doDrhE-qx1J5L03vsVmHgTVI7HrtElh_yoQDrUgn7vmn0P2Ow1DvmbLhpYp8OFvCMeBeuXMRuOUaIMDLihskxnwuQsfeg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR27SbT1g8Dp04_HKjLpRSYXvoQfwVVjSON_6Nw4A2RqPK7rbTnlZisy-RY"> <FaWhatsapp></FaWhatsapp> </a>
      </div>
      <div className="text-2xl">
        <a href="https://api.whatsapp.com/send?phone=%2B8801759787364&data=ARCgoc1Fl64Ae006k335Y5w_OaKfyuX20ZfEEWPSA0fmeLK8AQQPzBcV_WLc6doDrhE-qx1J5L03vsVmHgTVI7HrtElh_yoQDrUgn7vmn0P2Ow1DvmbLhpYp8OFvCMeBeuXMRuOUaIMDLihskxnwuQsfeg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR27SbT1g8Dp04_HKjLpRSYXvoQfwVVjSON_6Nw4A2RqPK7rbTnlZisy-RY"> <FaFacebook></FaFacebook> </a>
      </div>
      <div className="text-2xl">
        <a href="https://api.whatsapp.com/send?phone=%2B8801759787364&data=ARCgoc1Fl64Ae006k335Y5w_OaKfyuX20ZfEEWPSA0fmeLK8AQQPzBcV_WLc6doDrhE-qx1J5L03vsVmHgTVI7HrtElh_yoQDrUgn7vmn0P2Ow1DvmbLhpYp8OFvCMeBeuXMRuOUaIMDLihskxnwuQsfeg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR27SbT1g8Dp04_HKjLpRSYXvoQfwVVjSON_6Nw4A2RqPK7rbTnlZisy-RY"> <FaInstagram></FaInstagram> </a>
      </div>
      
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by Radiance Education</p>
  </aside>

</div>
</footer>
    </div>
  );
};

export default Footer;
import About from "../../Component/About";
import Achievments from "../../Component/Achievments";
import AllCourse from "../../Component/AllCourse";
import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import ShowBlogs from "../../Component/ShowBlogs";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

<Banner></Banner>
<Achievments></Achievments>

<About></About>
<AllCourse></AllCourse>
<ShowBlogs></ShowBlogs>
<Footer></Footer>
    </div>
  );
};

export default Home;
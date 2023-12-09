import About from "../../Component/About";
import Achievments from "../../Component/Achievments";
import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

<Banner></Banner>
<Achievments></Achievments>

<About></About>
<Footer></Footer>
    </div>
  );
};

export default Home;
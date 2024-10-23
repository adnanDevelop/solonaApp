import Navbar from "@/components/global/Navbar";
import Hero from "./component/Hero";
import GetStarted from "./component/GetStarted";
import EcoSystem from "./component/EcoSystem";
import Source from "./component/Source";
import Footer from "@/components/global/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GetStarted />
      <EcoSystem />
      <Source />
      <Footer />
    </>
  );
};

export default Home;

import Navbar from "@/components/global/Navbar";
import Hero from "./component/Hero";
import GetStarted from "./component/GetStarted";
import EcoSystem from "./component/EcoSystem";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GetStarted />
      <EcoSystem />
      <div className="h-[200vh]"></div>
    </>
  );
};

export default Home;

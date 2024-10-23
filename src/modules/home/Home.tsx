import Navbar from "@/components/global/Navbar";
import Hero from "./component/Hero";
import GetStarted from "./component/GetStarted";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GetStarted />
      <div className="h-[200vh]"></div>
    </>
  );
};

export default Home;

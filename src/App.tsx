import { useEffect } from "react";
import Home from "./modules/home/Home";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;

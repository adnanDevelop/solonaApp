// links
import { FaArrowUp } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      className="border-t-2 relative border-t-[#141414] rounded-[30px] bg-[#000508]"
      id="contact"
    >
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={900}
        className="w-[40px] h-[40px] cursor-pointer rotate-[45deg] flex items-center justify-center bg-[#141414] rounded-sm text-content absolute top-[-20px] left-1/2 -translate-x-1/2 transitions hover:text-white hover:bg-purple"
      >
        <FaArrowUp className="rotate-[-45deg] " />
      </Link>
      <section className="custom-width py-[50px] md:grid grid-cols-12">
        {/* First section */}
        <div className="col-span-6 pe-4 ">
          <img src="/image/logo-img.svg" className="mb-4 md:mb-0" alt="" />
          <p className="mt-5 text-base text-white">
            Managed by Solana Foundation
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-[25px]">
            {[
              <FaFacebookF />,
              <FaInstagram />,
              <FaLinkedinIn />,
              <FaTwitter />,
            ].map((element, index: number) => {
              return (
                <button
                  key={index}
                  className="w-[35px] h-[35px] rounded-md border-2 border-[#141414] bg-transparent grid place-items-center text-sm text-white transitions hover:bg-purple hover:border-purple"
                >
                  {element}
                </button>
              );
            })}
          </div>
          <p className="mt-5 text-sm text-white">
            © 2024 Solana Foundation. All Rights Reserved By.{" "}
            <a
              className="underline text-purple"
              target="_blank"
              href="https://adnandev.netlify.app/"
            >
              Adnan Tariq
            </a>
          </p>
        </div>

        <div className="grid col-span-6 mt-10 sm:grid-cols-3 md:mt-0">
          <div className="mb-6 sm:mb-0">
            <h4 className="mb-4 text-base text-white font-poppin">SOLONA</h4>
            <div className="flex flex-col text-white gap-y-4 ">
              {["Home", "About", "Jobs", "Service", "Blog"].map(
                (link, index: number) => (
                  <a
                    key={index}
                    className="text-sm cursor-pointer transitions hover:text-purple"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="mb-6 sm:mb-0">
            <h4 className="mb-4 text-base text-white font-poppin">SOLONA</h4>
            <div className="flex flex-col text-white gap-y-4 ">
              {["Ecosystem", "blog", "Newsletter"].map(
                (link, index: number) => (
                  <a
                    key={index}
                    className="text-sm cursor-pointer transitions hover:text-purple"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-base text-white font-poppin">SOLONA</h4>
            <div className="flex flex-col text-white gap-y-4 ">
              {["Terms", "Privacy", "Cookies"].map((link, index: number) => (
                <a
                  key={index}
                  className="text-sm cursor-pointer transitions hover:text-purple"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

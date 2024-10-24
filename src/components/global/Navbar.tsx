import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sideBar, showSideBar] = useState<boolean>(false);

  const links = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Service", path: "#service" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const windowScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && window.scrollY > 50) {
        document.querySelector("nav")?.classList.add("nav-hide");
        document.querySelector("nav")?.classList.remove("nav-show");
      } else {
        document.querySelector("nav")?.classList.add("nav-show");
        document.querySelector("nav")?.classList.remove("nav-hide");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", windowScroll);

    return () => window.removeEventListener("scroll", windowScroll);
  }, [lastScrollY]);

  // Sidebar function
  const openSidebar = () => {
    showSideBar(!sideBar);
    setOpen(!open);
  };

  return (
    <div className="relative">
      {/* Large screen Navbar */}
      <nav className="w-full transitions fixed top-0 left-0 z-[50] bg-black">
        <div className="flex items-center justify-between custom-width h-[65px] ">
          {/* Logo section */}
          <div
            data-aos="zoom-in-out"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <Link to="hero" spy={true} smooth={true} duration={500}>
              <>
                <img
                  src="/image/logo.png"
                  className="hidden md:block w-[180px] object-cover cursor-pointer"
                  alt="Logo"
                />
                <img
                  src="/image/logo-img.svg"
                  className="block md:hidden w-[35px] object-cover cursor-pointer"
                  alt="Logo"
                />
              </>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center text-sm font-medium gap-x-8 ">
              {links.map((link, index: number) => (
                <p
                  data-aos="zoom-in-out"
                  data-aos-duration={0.5 * index}
                  data-aos-easing="linear"
                >
                  <a
                    href={link?.path}
                    // spy={true}
                    // smooth={true}
                    // duration={500}
                    key={index}
                    className="transitions text-[#848895] hover:text-green cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0 })}
                  >
                    {link?.name}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button
              type="button"
              className="flex flex-col hamburger "
              onClick={openSidebar}
            >
              <span
                className={`w-[30px] h-[2px] bg-green rounded-full transform transition duration-500 ease-in-out mb-1.5 ${
                  open
                    ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.6rem]"
                    : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] bg-green rounded-full transform transition duration-500 ease-in-out mb-1.5 ${
                  open ? " opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] bg-green rounded-full transform transition duration-500 ease-in-out ${
                  open
                    ? " -rotate-45 md:translate-y-[-.6rem] translate-y-[-.45rem]"
                    : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      <div>
        <div
          className={`fixed w-[250px] h-screen bg-dark-blue border-r-2 border-r-green rounded-tr-xl top-0 transitions overflow-y-auto z-[60] bg-black ${
            sideBar ? " left-[0%]" : "left-[-200%]"
          } `}
        >
          {/* Logo section */}
          <div className="p-[20px]">
            <div className="flex items-center justify-between menu_header">
              <div className="logo">
                <Link to="hero" spy={true} smooth={true} duration={500}>
                  <img
                    src="/image/logo.png"
                    alt=""
                    className=" w-[120px]"
                    onClick={() => {
                      showSideBar(false);
                      setOpen(false);
                    }}
                    loading="lazy"
                  />
                </Link>
              </div>
              <button
                className="close_btn text-[16px] text-white p-2 border  border-white rounded-md transition duration-300 hover:border-white hover:text-white "
                onClick={() => {
                  showSideBar(false);
                  setOpen(false);
                }}
              >
                <GrClose />
              </button>
            </div>
            {/* Link */}
            <ul className="flex flex-col items-start list-none gap-y-6 mt-[50px]">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link?.path}
                      spy={true}
                      smooth={true}
                      duration={500}
                      key={index}
                      className="transitions text-[#848895] hover:text-green"
                      onClick={() => {
                        showSideBar(false);
                        setOpen(false);
                        window.scrollTo({ top: 0 });
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

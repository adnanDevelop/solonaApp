import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Jobs", path: "/jobs" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    {
      name: "More",
    },
  ];

  // Scroll animation
  useEffect(() => {
    const windowScroll = () => {
      if (window.scrollY > 1) {
        setScrollAnimation(true);
      } else {
        setScrollAnimation(false);
      }
    };
    window.addEventListener("scroll", windowScroll);

    return () => window.removeEventListener("scroll", windowScroll);
  }, []);

  // // Sidebar function
  // const openSidebar = () => {
  //   showSideBar(!sideBar);
  //   setOpen(!open);
  // };

  return (
    <div className="relative ">
      {/* large screen navbar */}
      <nav
        className={` w-full  padding-inline transitions fixed top-0 left-0 z-[10] ${
          scrollAnimation ? "bg-black" : "bg-black"
        }`}
      >
        <div className="flex items-center justify-between custom-width sm:h-[75px] h-[55px]">
          {/* Logo section */}
          <div>
            <img src="/image/logo.png" className="hidden md:block" alt="" />
            <img
              src="/image/small-logo.png"
              className="block md:hidden w-[35px] object-cover"
              alt=""
            />
          </div>

          {/* links */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center text-sm font-medium text-white gap-x-6 ">
              {links.map((link, index: number) => {
                return (
                  <a
                    key={index}
                    className={`transitions hover:text-green`}
                    href={link?.path}
                    onClick={() => {
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    {link?.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Small screen navbar */}
      {/* <div>
        <div
          className={`fixed w-[250px] h-screen bg-dark-blue border-r-2 border-r-green rounded-tr-xl top-0 transitions overflow-y-auto z-10 ${
            sideBar ? " left-[0%]" : "left-[-200%]"
          } `}
        >
          <div className="p-[20px]">
            <div className="flex items-center justify-between menu_header">
              <div className="logo">
                <Link to="/">
                  <img
                    src="/image/small-logo.png"
                    alt=""
                    className=""
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
            <ul className="flex flex-col items-start list-none gap-y-6 mt-[50px]">
              {links.map((link, index) => {
                return link?.links ? (
                  <div
                    key={index}
                    className="rounded-md dropdown dropdown-bottom "
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      className="flex items-center justify-center text-sm text-white focus:text-green"
                    >
                      More
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content  menu rounded-xl p-2 z-[1] w-[200px] bg-dark-blue shadow border-b-2 border-b-green"
                    >
                      {link.links.map((sublink, subIndex: number) => (
                        <li key={subIndex}>
                          <Link
                            to={sublink.path}
                            className="p-2 font-medium text-white bg-transparent rounded-md transitions hover:bg-green text-content-color hover:text-white focus:text-green"
                            onClick={() => {
                              showSideBar(false);
                              setOpen(false);
                              window.scrollTo({ top: 0 });
                            }}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`transitions hover:text-green ${
                        activeLink === link?.path ? "text-green" : "text-white"
                      }`}
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

            <div className="mt-[40px] md:hidden block">
              <button
                onClick={() => navigate("/register")}
                className="w-full primary-btn-outline"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/login")}
                className="w-full mt-2 primary-btn"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;

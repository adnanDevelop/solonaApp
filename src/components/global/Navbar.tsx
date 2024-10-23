import { useEffect, useState } from "react";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
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

  return (
    <div className="relative">
      <nav className="w-full transitions fixed top-0 left-0 z-[10] bg-black">
        <div className="flex items-center justify-between custom-width h-[65px] ">
          {/* Logo section */}
          <div>
            <img
              src="/image/logo.png"
              className="hidden md:block w-[180px] object-cover"
              alt="Logo"
            />
            <img
              src="/image/logo-img.svg"
              className="block md:hidden w-[35px] object-cover"
              alt="Logo"
            />
          </div>

          {/* Links */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center text-sm font-medium gap-x-8 ">
              {links.map((link, index: number) => (
                <a
                  key={index}
                  className="transitions text-[#848895] hover:text-green"
                  href={link?.path}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  {link?.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

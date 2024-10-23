import { deeperContent } from "../data";
import { GoArrowUpRight } from "react-icons/go";

const EcoSystem = () => {
  return (
    <main className="custom-width padding-block" id="service">
      {/* Header Section */}
      <section>
        <h1
          className="text-white xl:text-[55px] lg:text-[45px] md:text-[40px] text-[35px] leading-none font-medium "
          data-aos="fade-zoom-in"
          data-aos-duration="1200"
          data-aos-easing="ease-in-sine"
        >
          Dig deeper.
        </h1>
        <p
          className="mt-2 text-sm text-content sm:text-lg text-light"
          data-aos="zoom-in-out"
          data-aos-duration="1400"
          data-aos-easing="ease-in-sine"
        >
          Learn from resources across the greater Solana ecosystem.
        </p>
      </section>

      {/* Card Section */}
      <section className="grid grid-cols-12 gap-6 mt-[30px]">
        {deeperContent.map(
          (
            element: { title: string; label: string; content: string },
            index: number
          ) => {
            return (
              <div
                className="relative p-[2px] overflow-hidden bg-[#3c3939d7] rounded-md lg:col-span-4 sm:col-span-6 col-span-full flex items-center justify-center group"
                data-aos="fade-zoom-in"
                data-aos-duration={0.5 * 1000}
                data-aos-easing="ease-in-sine"
              >
                <div className="w-[120px] h-[250%] bg-gradient-to-l from-purple to-[#3c3939d7] absolute   border_animation  opacity-0 transitions group-hover:opacity-100" />
                <div
                  key={index}
                  className="z-[10] relative flex flex-col justify-between items-start rounded-lg p-[20px]  h-[282px] w-full cursor-pointer bg-[#19161C]"
                >
                  <div>
                    <span className="mb-1 text-xs font-medium uppercase text-purple font-poppin">
                      {element?.label}
                    </span>
                    <h3 className="font-medium text-white font-helvetica text-[20px] mb-3">
                      {element?.title}
                    </h3>
                    <p className="text-base font-light font-poppin text-content">
                      {element?.content}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-light text-white transitions hover:text-purple font-poppin group">
                    LEARN MORE{" "}
                    <GoArrowUpRight className="text-lg group-hover:text-purple transitions" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </section>
    </main>
  );
};

export default EcoSystem;

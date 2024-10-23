import { deeperContent } from "../data";
import { GoArrowUpRight } from "react-icons/go";

const EcoSystem = () => {
  return (
    <main className="custom-width padding-block" id="service">
      {/* Header Section */}
      <section>
        <h1 className="text-white xl:text-[55px] lg:text-[45px] md:text-[40px] text-[35px] leading-none font-medium ">
          Dig deeper.
        </h1>
        <p className="mt-2 text-sm text-content sm:text-lg text-light">
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
                key={index}
                className="lg:col-span-4 sm:col-span-6 col-span-full z-[10] relative overflow-hidden flex flex-col justify-between items-start rounded-lg p-[20px] bg-[#19161C] h-[282px] w-full cursor-pointer"
              >
                <div className="absolute bottom-0 left-0 w-[140px] rounded-full z-[-1] h-[80px] card-gradient" />
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
            );
          }
        )}
      </section>
    </main>
  );
};

export default EcoSystem;

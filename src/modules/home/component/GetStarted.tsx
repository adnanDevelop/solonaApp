import { FaArrowRight } from "react-icons/fa6";
import { getStartedData } from "../data";

const GetStarted = () => {
  return (
    <main className="custom-width pt-[50px]" id="about">
      <section>
        <h1
          className="text-white xl:text-[55px] lg:text-[45px] md:text-[40px] text-[35px] leading-none font-medium "
          data-aos="fade-zoom-in"
          data-aos-duration="1200"
          data-aos-easing="ease-in-sine"
        >
          Get started
        </h1>
        <p
          className="mt-2 text-sm font-light text-content sm:text-lg font-poppin"
          data-aos="zoom-in-out"
          data-aos-duration="1400"
          data-aos-easing="ease-in-sine"
        >
          Use these Solana Foundation and community courses to begin your
          journey into Solana development.
        </p>
      </section>
      <section className="mt-[30px] grid grid-cols-12 gap-6">
        <div className="col-span-full relative p-[20px] md:h-[320px] h-[280px] flex items-end rounded-lg bg-[url('/image/getStarted/img-1.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5] z-[5] " />
          <div className="z-[10]">
            <span
              className="px-4 py-1 text-sm text-white rounded-full bg-purple"
              data-aos="zoom-in-out"
              data-aos-duration="1200"
              data-aos-easing="ease-in-sine"
            >
              17 Chapters
            </span>
            <h1
              className="text-white lg:text-[38px] sm:text-[35px] text-[28px] leading-none font-medium mt-4 "
              data-aos="zoom-in-out"
              data-aos-duration="1400"
              data-aos-easing="ease-in-sine"
            >
              Solana Development Course
            </h1>
            <p
              className=" mt-5 text-sm text-content sm:text-base text-light max-w-[350px]"
              data-aos="zoom-in-out"
              data-aos-duration="1600"
              data-aos-easing="ease-in-sine"
            >
              Quickstart your Solana development starting from nothing to
              complex programs.
            </p>
            <button
              className="w-[35px] h-[35px] text-sm flex items-center justify-center border border-content text-content rounded-full mt-6 transitions hover:border-green hover:text-green"
              data-aos="zoom-in-out"
              data-aos-duration="1800"
              data-aos-easing="ease-in-sine"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        {getStartedData?.map(
          (
            element: { image: string; label: string; title: string },
            index: number
          ) => {
            return (
              <div
                key={index}
                className={`lg:col-span-4 sm:col-span-6 col-span-full  p-[20px] relative rounded-lg w-full md:h-[320px] h-[280px] flex items-end bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url('${element?.image}')` }}
                data-aos="fade-zoom-in"
                data-aos-duration={0.5 * 1000}
                data-aos-easing="ease-in-sine"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5] z-[5] " />
                <div className="z-[10] w-full">
                  <span className="px-4 py-1 text-sm text-white rounded-full bg-purple ">
                    {element?.label}
                  </span>
                  <div className="flex items-center justify-between mt-1.5">
                    <p className="text-lg text-white capitalize font-helvetica sm:text-base text-light max-w-[350px]">
                      {element?.title}
                    </p>
                    <button className="w-[35px] h-[35px] text-sm flex items-center justify-center border border-content text-content rounded-full transitions hover:border-green hover:text-green">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </section>
    </main>
  );
};

export default GetStarted;

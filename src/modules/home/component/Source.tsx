import { GoArrowUpRight } from "react-icons/go";
import { sourceData } from "../data";

const Source = () => {
  return (
    <main className="source-gradient pt-[70px] pb-[40px]" id="blog">
      <section className="custom-width">
        {/* Header Section */}
        <div>
          <h1 className="text-white xl:text-[55px] lg:text-[45px] md:text-[40px] text-[35px] leading-none font-medium ">
            Go to the source.
          </h1>
          <p className="mt-2 text-sm text-content sm:text-lg text-light">
            Read the documentation for Solana and popular tools.
          </p>
        </div>

        <div className="grid grid-cols-12 md:gap-8 mt-[30px]">
          {sourceData?.map(
            (element: { title: string; content: string }, index: number) => {
              return (
                <div
                  key={index}
                  className="mb-6 md:col-span-6 col-span-full lg:mb-0"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="xl:text-[30px] md:text-[26px] text-[22px] text-white capitalize font-poppin ">
                      {element?.title}
                    </h3>
                    <button
                      type="button"
                      className="text-sm px-[20px] h-[42px] rounded-full border border-content text-white font-poppin transitions hover:scale-[1.04] flex items-center gap-2 hover:bg-purple hover:border-purple"
                    >
                      VIEW ALL
                      <GoArrowUpRight className="text-lg group-hover:text-purple transitions" />
                    </button>
                  </div>
                  <div className="w-full my-4 h-[1px] bg-[#ffffff84]" />
                  <p className="text-sm font-light text-white sm:text-base xl:text-lg font-poppin">
                    {element?.content}
                  </p>
                </div>
              );
            }
          )}
          <div className="mb-6 md:col-span-6 col-span-full lg:mb-0">
            <h3 className="xl:text-[30px] md:text-[26px] text-[22px] text-white capitalize font-poppin ">
              Solana Changelog
            </h3>
            <p className="mb-8 text-sm font-light text-white sm:text-base xl:text-lg font-poppin">
              Some more Solana changes from Jacob & Joe. Subscribe to the
              newsletter: https://solana.us17.list-manage.com/s... Proposal -
              Priced Compute Units: ...
            </p>
            <span className="px-4 py-1 text-xs text-white bg-transparent border border-white rounded-full cursor-pointer font-poppin">
              LATEST EPISODE
            </span>
          </div>
          <div className="md:col-span-6 col-span-full">
            <img
              src="/image/footer-img.svg"
              //   className="lg:w-auto max-w-[300px] md:max-w-[450px]"
              alt=""
            />
          </div>
        </div>

        {/* Social Section  */}
        <div className="grid gap-y-4 md:gap-6 md:grid-cols-2 padding-block">
          {/* First Card */}
          <div className="xl:pt-[50px] sm:pt-[40px] pt-[30px] xl:pb-[45px] sm:pb-[40px] pb-[30px] xl:px-[45px] sm:px-[30px] px-[20px] rounded-lg bg-[#19161C] ">
            <h3 className="text-white font-poppin xl:text-[35px] text-[22px] lg:mb-0 mb-1.5">
              Solana Developer Update
            </h3>
            <p className="text-sm font-light xl:text-base text-content font-poppin">
              Sign up to the newsletter and learn about new resources, new
              commits, new proposals, and more.
            </p>
            <div className="flex items-center p-2 w-full h-[55px] bg-black rounded-full mt-[75px]">
              <input
                type="text"
                className="w-full h-full px-3 text-sm text-white bg-transparent focus:outline-none font-poppin"
                placeholder="Email"
              />
              <button className="w-[120px] h-full flex items-center justify-center bg-green text-black uppercase rounded-full text-base font-poppin font-medium ">
                sign up
              </button>
            </div>
          </div>

          {/* Second Card */}
          <div className="xl:pt-[50px] sm:pt-[40px] pt-[30px] xl:pb-[45px] sm:pb-[40px] pb-[30px] xl:px-[45px] sm:px-[30px] px-[20px] rounded-lg bg-[#19161C] ">
            <h3 className="text-white font-poppin xl:text-[35px] text-[22px] lg:mb-0 mb-1.5">
              Even more resources
            </h3>
            <p className="text-sm font-light xl:text-base text-content font-poppin">
              More videos, more episodes. Discussions between industry leaders
              in both blockchain and technology, our team, and community
              developers.
            </p>
            <div className="flex items-center justify-center gap-3 mt-[64px]">
              <button
                type="button"
                className=" md:px-[20px] px-[15px] h-[42px] rounded-full border border-content text-white font-poppin transitions text-sm hover:scale-[1.04] flex items-center gap-2"
              >
                VIEW ALL
                <img src="/image/footer/icon-1.svg" alt="" />
              </button>
              <button
                type="button"
                className=" md:px-[20px] px-[15px] h-[42px] rounded-full border border-content text-white font-poppin transitions text-sm hover:scale-[1.04] flex items-center gap-2"
              >
                VIEW ALL
                <img src="/image/footer/icon-2.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Source;

import { deeperContent } from "../data";

const EcoSystem = () => {
  return (
    <main className="custom-width padding-block">
      {/* Header Section */}
      <section>
        <h1 className="text-white lg:text-[38px] sm:text-[55px] text-[35px] leading-none font-medium ">
          Dig deeper.
        </h1>
        <p className="mt-2 text-sm text-content sm:text-lg text-light">
          Learn from resources across the greater Solana ecosystem.
        </p>
      </section>

      {/* Card Section */}
      <section className="grid grid-cols-12 gap-6">
        {deeperContent.map(
          (
            element: { title: string; label: string; content: string },
            index: number
          ) => {
            return (
              <div
                key={index}
                className="col-span-4 flex flex-col justify-between items-start rounded-lg p-[20px] bg-[#19161C] h-[282px] w-full"
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
                <button className="font-light text-white transitions hover:text-purple font-poppin">
                  LEARN MORE
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

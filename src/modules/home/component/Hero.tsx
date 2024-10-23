const Hero = () => {
  return (
    <main className="pt-[60px] relative" id="hero">
      <div className="items-center justify-between lg:flex custom-width">
        {/* Hero Content */}
        <section className="basis-1/3 lg:pt-0 pt-[50px] lg:text-left text-center">
          <h1
            className="text-white xl:text-[90px] lg:text-[75px] sm:text-[55px] text-[35px] leading-none font-medium"
            data-aos="fade-zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            Developer <span className="lg:block">Resource</span>
          </h1>
          {/* <h1 className="text-white xl:text-[90px] text-[75px] leading-none font-medium ">
            Resource
          </h1> */}
          <p
            className="text-content lg:mt-[20px] mt-3 sm:text-lg text-sm text-light lg:max-w-[300px]"
            data-aos="fade-zoom-in"
            data-aos-duration="1400"
            data-aos-easing="ease-in-sine"
          >
            A manual for joining the Solana ecosystem. By builders for builders.
          </p>
          <div className="lg:mt-[40px] mt-[30px] flex items-center lg:justify-start justify-center gap-3">
            <button
              type="button"
              className="px-[20px] h-[42px] rounded-full bg-green text-black transitions hover:scale-[1.04] font-poppin"
              data-aos="fade-zoom-in"
              data-aos-duration="1800"
              data-aos-easing="ease-in-sine"
            >
              BUILD NOW
            </button>
            <button
              type="button"
              className="btn-secondary px-[20px] h-[42px] rounded-full border border-content text-white font-poppin transitions hover:scale-[1.04]"
              data-aos="fade-zoom-in"
              data-aos-duration="2200"
              data-aos-easing="ease-in-sine"
            >
              STOCK EXCHANGE
            </button>
          </div>
        </section>
        {/* Hero Image */}
        <section className="flex items-center justify-center mt-6 lg:justify-end basis-2/3 lg:mt-0">
          <img
            src="/image/hero-image.png"
            className="xl:max-w-[550px] sm:max-w-[450px] max-w-[350px] "
            alt=""
            data-aos="fade-zoom-in"
            data-aos-duration="2600"
            data-aos-easing="ease-in-sine"
          />
        </section>
      </div>
      <div className="absolute top-0 right-0 gradient-background -z-[1]  xl:w-[700px] xl:h-[700px] lg:w-[500px] lg:h-[500px] lg:block hidden " />
    </main>
  );
};

export default Hero;

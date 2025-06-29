import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Banner */}
      <section>
        <div className="bg-[#13006A] h-[129px] md:h-[105px] lg:h-12 md:px-8 py-4 px-6 flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-[17px]">
          <p className="text-white font-bold text-base mb-1 lg:mb-2 lg:mt-1 lg:tracking-[0.008em] xl:tracking-[0.01em]">
            Learn why Gartner recognized Salesforce as the World's #1 Leader in Customer Data Platforms (CDP)
          </p>
          <button className="text-white text-[15px] font-[646] underline lg:mb-1 xl:text-[17px]">
            Get the report
          </button>
        </div>
      </section>

      {/* Hero section */}
      <section
        id="hero"
        className="bg-[url('https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2024/02/php-marquee-starter-sm-bg.jpg?resize=1462,2048')]
          lg:bg-[url('https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2024/02/php-marquee-starter-lg-bg.jpg?resize=2048,640')]
          bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <div className="py-12 flex flex-col gap-3 mx-[24px] md:px-[65px] md:py-16 lg:flex-row lg:mx-0 lg:px-12 xl1440:gap-[130px] xl1440:mx-14">
          <div className="flex flex-col lg:w-1/2 xl1440:w-[510px] xl1440:h-[336px] xl1440:ml-4">
            <span className="font-semibold text-[40px] md:text-[48px] xl1440:text-[56px] tracking-tight text-brand-dark leading-[1.15] mb-5 lg:tracking-wide xl1440:tracking-normal">
              Try Salesforce Starter Suite for free.
            </span>
            <span className="text-[20px] mb-8 md:mb-12">
              Unite marketing, sales, and service in a single app. Try Salesforce Starter Suite today. There's nothing to install. No credit card required.
            </span>
            <div className="flex flex-col justify-start gap-6 items-center md:flex-row">
              <button className="btn-primary">
                Start free trial
              </button>
              <button className="btn-secondary">
                Watch demo
              </button>
            </div>
          </div>

          <div className="mt-12 w-full flex max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden lg:my-auto lg:w-1/2 lg:items-start xl:mt-6 xl1440:w-[600px] xl1440:h-[338px]">
            <iframe
              title="Salesforce Intro Video"
              src="https://play.vidyard.com/EPhLojrTKLFGqAWw9ECW23?disable_popouts=1&type=inline&hidden_controls=0&hide_playlist=0&hide_html5_playlist=0&viral_sharing=0&name_overlay=0&autoplay=0&v=4.3.15"
              width="100%"
              height="100%"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

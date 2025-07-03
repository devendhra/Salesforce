import React from 'react'

function Seepricing() {
  return (
    <div> 
    {/* <!-- See pricing --> */}
    <section id="See pricing">
    <div className="pt-8 py-12 xs402:pt-24 md:py-16 ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mx-6 md:mx-8 lg:mx-12 rounded-2xl shadow-2xl 
                lg:gap-8  xl1440:w-[1280px] xl1440:h-[451px] xl1440:mx-auto">
            <div className="mx-8 pt-10 pb-2 md:py-16 md:mx-14 lg:mx-20 xl1440:mx-28">
                <header className="mb-4 md">    
                    <h2 className="text-[32px] text-brand-dark font-bold leading-tight md:tracking-tight md:w-[278px] md:h-[160px] 
                               lg:w-[367px] lg:h-[120px] xl1440:w-[510px] xl1440:h-[144px] xl1440:text-[40px]">
                        Try Salesforce for free. No credit card required, no software to install.
                    </h2>
                </header>
                <p className="mb-8 md:mb-10">&nbsp;</p>
                <p className="hidden md:block">&nbsp;</p>
                <div className="flex flex-col gap-4 xl1440:gap-6 xl1440:flex-row">
                    <button className="btn-primary font-[633] md:text-[17.5px]">
                        Start free trail
                    </button>
                    <button className="btn-secondary">
                                 <div className="flex justify-center items-center">
                                     <p className="mr-2">See pricing</p>
                                     <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="w-[327px] h-[277px] xs402:w-[376px] xs402:h-[320px] md:w-[339px] md:h-[288px] md:mt-[220px] lg:w-[447px] lg:h-[380px] lg:mt-[85px] xl1440:w-[510px] xl1440:h-[434px] xl1440:mt-[17px] xl1440:ml-[115px]">
                    <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/12/php-free-trial-mobile-inr2000-940w.png?resize=768,654" alt="salesforce"/>
                </div>
            </div>
        </div>
    </section></div>
  )
}

export default Seepricing
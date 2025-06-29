
function Hero() {
    return (
        <div>
            <section id="hero"
                className="bg-[url('https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/11/01-marquee-background.png?resize=2048,640')] bg-no-repeat bg-cover bg-center">
                <div className="flex justify-center py-4 lg:py-6  xl1440:w-[1280px] xl1440:mx-auto">
                    <article className="grid grid-cols-1 mx-6 gap-6 lg:grid-cols-2 lg:mx-12 lg:gap-8 xl1440:gap-10 xl1440:mx-0">
                        <div className="md:flex md:flex-col md:justify-center">
                            <header className="flex justify-center">
                                <h1 className="text-[40px] font-bold text-brand-dark leading-[1.14]
                            xs402:tracking-wide md:w-[582px]  md:text-5xl md:leading-tight
                            lg:w-[448px] lg:leading-[1.14] xl1440:text-[56px] xl1440:w-[620px] xl1440:tracking-normal">
                                    Discover your path to success powered by humans with agents.
                                </h1>
                            </header>
                            <div className="flex items-center justify-center">
                                <p className="text-[20px] mb-8 mt-4  xs402:tracking-[0.020em] md:mt-6 md:mb-12 
                                    md:w-[582px] lg:w-[448px] xl1440:w-[620px]">
                                    Create more value than you ever thought possible. From on-demand resources and tailored
                                    support to expert advisory services and hands-on implementation, Salesforce Customer Success
                                    provides everything you need to bring your vision to life‌ — ‌with guidance from the people
                                    who know our products best.
                                </p>
                            </div>
                            <div>
                                <button className="btn-primary">
                                    <div className="flex justify-center items-center">
                                        <p className="mr-2">Contact us</p>
                                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z">
                                            </path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-6 xl1440:pt-0 xl1440:justify-end ">
                            <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/11/01-marquee-hero-image.png?resize=768,768"
                                alt="hero-image" className="size-auto md:size-[340px] lg:size-[448px] xl1440:size-[510px]" />
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Hero
import React from 'react'

function Hero() {
    return (
        <div>
            <section id="hero"
                className=" min-h-[991px] xs402:min-h-[971px] md:min-h-[1100px] lg:min-h-[1263px] xl1440:min-h-[1483px]">
                <div className="relative py-4 lg:py-6 ">
                    <div
                        className="flex flex-col gap-6 justify-center items-center mx-6 md:mx-8 lg:mx-12 xl1440:mx-20 xl1440:gap-16">
                        <div className="flex flex-col justify-center items-center">
                            <header
                                className="flex flex-col justify-center items-center mb-8 md:mb-12 md:w-[582px] xl1440:mb-12 xl1440:w-[840px]">
                                <div className="text-[15px] font-semibold text-brand-dark mb-3 md:mb-4">
                                    Impact at Salesforce
                                </div>
                                <div>
                                    <h1 className="text-[40px] font-bold leading-[1.16] tracking-tight text-brand-dark text-center
                                    xs402:tracking-normal md:text-[48px] xl1440:text-[56px] xl1440:tracking-tight">
                                        Business is the greatest platform for change.
                                    </h1>
                                </div>
                                <div>
                                    <p
                                        className="mt-4 text-center text-xl tracking-wider leading-[1.55] xs402:tracking-normal md:mt-6 lg:mx-14 lg:leading-[1.45]">
                                        At Salesforce, our values create value. Bringing humans and <a
                                            href="https://www.salesforce.com/agentforce/"
                                            className="text-brand-light underline hover:text-black">agents</a>
                                        together, we use the full power of our business to make the world a better place for all
                                        of our stakeholders, including stockholders, customers,
                                        employees, partners, the planet, and the communities in which we work and live.
                                    </p>
                                </div>
                            </header>
                            <button className="btn-primary text-[17px]">
                                <div className="flex justify-center items-center">
                                    <p className="mr-2">Learn more in our Stakeholder Impact Report</p>
                                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div
                            className="flex justify-center items-center pt-6 md:pt-10 md:w-[582px] lg:w-[768px] xl1440:w-[1061px] xl1440:pt-0">
                            <div
                                className="bg-black rounded-2xl lg:flex lg:justify-center lg:items-center lg:w-[768px] lg:h-[381px] xl1440:w-[1061px] xl1440:h-[490px]">
                                <img src="assets/images/hero-video.png" alt="sales"
                                    className="rounded-xl md:size-auto lg:rounded-none lg:h-[381px] xl1440:h-[490px]" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute -bottom-[120px] -z-10 xs402:-bottom-[135px] md:-bottom-[250px] lg:-bottom-[325px] xl1440:-bottom-[475px]">
                        <picture>
                            <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/marquee-stakeholder-impact-background.png?resize=150,150 150w,https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/marquee-stakeholder-impact-background.png?resize=300,94 300w,https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/marquee-stakeholder-impact-background.png?resize=768,240 768w,https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/marquee-stakeholder-impact-background.png?resize=1024,320 1024w,https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/marquee-stakeholder-impact-background.png?resize=1536,480 1536w,https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/marquee-stakeholder-impact-background.png?resize=2048,640 2048w"
                                alt="bg" className="w-full" />
                        </picture>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
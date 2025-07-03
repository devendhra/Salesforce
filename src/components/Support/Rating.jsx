import {Link} from 'react-router-dom';

function Rating() {
    return (
        <div>
            {/* <!-- Rating  --> */}
            <section id="rating">
                <div className="py-4 pt-8 md:pt-32 md:pb-6 lg:pt-40 xl1440:pt-60">
                    <div className="flex flex-col justify-center items-center mx-6 gap-6 lg:mx-12 lg:gap-8 xl1440:gap-10">
                        <header className="flex justify-center">
                            <h2
                                className="text-[32px] text-brand-dark  font-bold tracking-tight md:tracking-wide text-center leading-tight md:w-[582px] lg:tracking-tight xl1440:text-[40px] xl1440:w-full">
                                Thank you for rating us 4.5 stars on G2.
                            </h2>
                        </header>
                        <div
                            className="bg-white flex flex-col justify-center items-center rounded-2xl shadow-lg mt-0 w-[327px] h-[213px] xs402:w-[377px] md:mt-10
                            md:w-[461px] md:h-[281px] lg:w-[608px] lg:h-[379px] lg:mt-8 xl:mt-6 xl1440:w-[620px] xl1440:h-[379px]">
                            <div className="flex flex-col m-10 mb-0 md:m-[56px] md:mb-0 lg:m-16 lg:mb-0 ">
                                <span
                                    className="text-[56px] text-brand-dark  font-bold flex justify-center md:text-[80px] lg:text-[112px] hover:text-brand-light">4.5</span>
                                <div
                                    className="text-[20px] text-brand-dark font-bold -mt-2 md:text-[24px] lg:text-[32px] lg:-mt-8 hover:text-brand-light">
                                    Start on G2</div>
                            </div>
                            <div className="flex items-center mt-6 mb-[30px] md:mt-[32px] md:mb-[46px] lg:mt-10 lg:mb-16">
                                <Link to="/"
                                    className="lg:hidden text-base text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Read
                                    the reviews</Link>
                                <div className="lg:hidden group w-fit cursor-pointer">
                                    <svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                                        fill="#032D60">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z">
                                        </path>
                                    </svg>
                                </div>
                                <button className="hidden lg:flex btn-primary">
                                    <div className="flex justify-center items-center">
                                        <p className="mr-2">Read the reviews</p>
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
                    </div>
                </div>
            </section>

            {/* <!-- Read the story  --> */}
            <section id="Read the story">
                <div
                    className="py-4 md:py-6 xl1440:w-[1280px] xl1440:flex xl1440:justify-center xl1440:items-center xl1440:mx-auto">
                    <div className="mx-6 shadow-2xl rounded-2xl md:mx-8 lg:mx-12 xl1440:mx-0">
                        <article>
                            <div className="flex flex-col md:flex-row md:justify-between lg:justify-around px-8 pt-8 pb-10 md:py-12 md:px-16 lg:py-14 lg:px-24 
                                xl1440:py-16 xl1440:px-[110px] xl1440:pl-[140px]">
                                <div className="md:w-[1/2] flex md:items-center md:justify-center">
                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/11/06-customer-story-william-sanoma-inc_6bc348.png?w=1024"
                                        alt="salesforce" className="size-[162px] md:size-[220px] lg:size-[240px] xl1440:size-[320px]" />
                                </div>
                                <div className="mt-6 md:w-1/2 md:mt-0 xl1440:ml-20">
                                    <div>
                                        <img src="https://a.sfdcstatic.com/shared/images/pbc/icons/quotation-english.svg" alt="salesforce"
                                            className="w-[26px] h-[21px] lg:w-[31px] lg:h-[25px] xl1440:w-[41px] xl1440:h-[34px]" />
                                    </div>
                                    <h3
                                        className="mt-3 text-xl text-brand-dark font-bold lg:text-2xl xl1440:text-[32px] 
                                    xl1440:leading-tight xl1440:tracking-tighter hover:text-brand-light transition-all">
                                        With Salesforce, we have a partner that not only enables the integration of innovation,
                                        but welcomes it.
                                        The platform allows us to really layer in our own capabilities to deliver the customer
                                        experiences
                                        we want at scale, securely and reliably.
                                    </h3>
                                    <div className="mb-6 mt-4">
                                        <div className="text-base font-bold text-brand-dark lg:text-xl">Sameer Hassan</div>
                                        <div className="text-base font-medium lg:text-xl">
                                            SVP, Technology, Williams-Sonoma, Inc.
                                        </div>
                                    </div>
                                    <div>
                                        <Link to="#"
                                            className="md:hidden text-base text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">
                                            Read the story.
                                        </Link>
                                        <button className="hidden md:flex btn-secondary md:py-3 md:px-8 lg:mt-8 xl1440:mt-10">
                                            <div className="flex justify-center items-center">
                                                <p>Read the story</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* <!-- Values  --> */}
            <section id="Values" className="relative">
                <div
                    className="flex flex-col justify-center items-center gap-6 pt-12 pb-12 mx-6 md:pt-16 md:pb-16 md:mx-8 lg:gap-8 lg:mx-12 xl1440:mx-20 xl1440:gap-16 xl1440:pb-32">
                    <div className="flex flex-col justify-center items-center">
                        <h2
                            className="text-[32px] text-brand-dark font-bold text-center leading-tight md:max-w-[582px] xl1440:text-[40px] xl1440:max-w-[840px]">
                            Learn new skills with free, guided learning on Trailhead.</h2>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-6 mb-12 md:mt-0 md:gap-8 lg:grid-cols-3 lg:gap-10 xl1440:gap-16 xl1440:mb-0 xl1440:max-w-[1280px] md:w-full">
                        {/* <!-- Card 1 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl p-6 bg-white relative z-10  md:mt-0 lg:max-h-fit">
                            <div className="flex justify-center items-center">
                                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/premier-success-plans/5f81e2ec1959a2413f52ab474945ca95_badge.png"
                                    className=" size-[120px]" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 mt-3">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-[9px] rounded-full w-fit">Module</span>
                                <h2 className="text-2xl font-bold text-brand-dark xl1440:text-[25px] tracking-wide">Salesforce
                                    Success Plans</h2>
                                <p className="text-base text-[#181818] leading-snug mb-6 lg:mb-16 xl1440:text-sm">
                                    Get more value from Salesforce with Success Plans.
                                </p>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline pt-5 lg:mb-4 xl1440:pt-6">
                                    Start learning
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div
                            className="flex flex-col justify-center rounded-2xl shadow-2xl p-6 bg-white relative z-10 lg:max-h-fit">
                            <div className="flex justify-center items-center">
                                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/salesforce-professional-services/7337aa3e827d21108180b9684f1186f4_badge.png"
                                    className=" size-[120px]" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 mt-3">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-[9px] rounded-full w-fit">Module</span>
                                <h2 className="text-2xl font-bold text-brand-dark xl1440:text-[25px] leading-none">Salesforce
                                    Professional Services: Quick Look</h2>
                                <p className="text-base text-[#181818] leading-snug mb-6  xl1440:text-sm lg:mb-[50px]">
                                    Learn how Salesforce experts help customers implement and innovate.
                                </p>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline py-[10px]">
                                    Start learning
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div
                            className="flex flex-col justify-center rounded-2xl shadow-2xl p-6 bg-white relative z-10 lg:max-h-fit">
                            <div className="flex justify-center items-center ">
                                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/agentforce-agents-quick-look/4cf356491cf8efec76413b315449019f_badge.png"
                                    className=" size-[120px]" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 mt-3">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-[9px] rounded-full w-fit">Module</span>
                                <h2 className="text-2xl font-bold text-brand-dark xl1440:text-[25px] leading-none">Agentforce Key
                                    Components: Quick Look</h2>
                                <p className="text-base text-[#181818] leading-snug mb-6 lg:mb-[50px] xl1440:text-sm">
                                    Learn how AI agents use LLMs and context to assist customers and human agents.
                                </p>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline py-[10px]">
                                    Start learning
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Background Image --> */}
                <div className="absolute z-[-1] -bottom-[9px] md:-bottom-20 lg:-bottom-[100px] lg:w-full xl1440:-bottom-44">
                    <picture>
                        <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/11/07-trailhead-background-1-1.png?w=1024"
                            alt="salesforce"  className="w-full" />
                    </picture>
                </div>
            </section>
        </div>
    )
}

export default Rating
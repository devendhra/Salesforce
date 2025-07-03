import React from 'react'
import { Link } from 'react-router-dom'

function Values() {
    return (
        <div>
            {/* <!-- Values --> */}
            <section id="Values">
                <div className="flex flex-col justify-center items-center gap-6 pt-4 pb-12 mx-6 md:pt-6 md:pb-16 lg:mx-12 xl1440:mx-20 xl1440:gap-16 xl1440:pb-32">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-[32px] text-brand-dark font-bold text-center leading-tight md:max-w-[582px] xl1440:text-[40px] xl1440:max-w-[840px]">Learn valuable skills for free, with Trailhead.</h2>
                        <p className="text-lg text-[#181818] text-center pt-5 md:max-w-[470px] xl1440:max-w-[728px]">Follow guided learning paths and get hands-on to learn Salesforce, digital, and soft skills from anywhere.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 mb-12 md:mt-0 md:gap-8 lg:grid-cols-3 lg:gap-10 xl1440:gap-16 xl1440:mb-0 xl1440:max-w-[1280px]">
                        {/* <!-- Card 1 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl p-6 bg-white relative z-10 mt-[18px] md:mt-0">
                            <div className="flex justify-center items-center">
                                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/salesforce-quick-look-1/259d8619519bb3912ef0100cee5071cc_badge.png"
                                    className=" size-[120px]" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 mt-3">
                                <span className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-[9px] rounded-full w-fit">Module</span>
                                <h2 className="text-2xl font-bold text-brand-dark xl1440:text-[25px]">Salesforce Values: Quick Look</h2>
                                <p className="text-base text-[#181818] leading-snug mb-6 xl1440:text-lg">
                                    Learn how Salesforce helps your business build stronger relationships with your customers.
                                </p>
                                <Link to="/" className="text-base font-semibold text-brand-dark underline pt-[20px]">
                                    Start learning
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div className="flex flex-col justify-center rounded-2xl shadow-2xl p-6 bg-white relative z-10 ">
                            <div className="flex justify-center items-center">
                                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/lex_implementation_basics/56b5a2cb9fb731dbfe6b5b88cd855775_badge.png"
                                    className=" size-[120px]" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 mt-3">
                                <span className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-[9px] rounded-full w-fit">Module</span>
                                <h2 className="text-2xl font-bold text-brand-dark xl1440:text-[25px]">Salesforce CRM</h2>
                                <p className="text-base text-[#181818] leading-snug mb-6  xl1440:text-lg lg:mb-[80px]">
                                    Learn how to use customer relationship management (CRM) software to grow your business.
                                </p>
                                <Link to="/" className="text-base font-semibold text-brand-dark py-[10px]">
                                    Start learning
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div className="flex flex-col justify-center rounded-2xl shadow-2xl p-6 bg-white relative z-10">
                            <div className="flex justify-center items-center ">
                                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/sales-cloud-platform-quick-look/b91b2499486a772a4eee8ce55aa32b57_badge.png"
                                    className=" size-[120px]" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 mt-3">
                                <span className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-[9px] rounded-full w-fit">Module</span>
                                <h2 className="text-2xl font-bold text-brand-dark xl1440:text-[25px]">Sales Cloud Basics</h2>
                                <p className="text-base text-[#181818] leading-snug mb-6 lg:mb-[80px] xl1440:text-lg">
                                    Grow your business, boost productivity, and make smart decisions with Sales Cloud.
                                </p>
                                <Link to="/" className="text-base font-semibold text-brand-dark underline py-[10px]">
                                    Start learning
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full md:mt-8 xl1440:mt-8">
                        <button className="btn-secondary">
                            <div className="flex justify-center items-center">
                                <p className="mr-2">Learn for free</p>
                                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Values
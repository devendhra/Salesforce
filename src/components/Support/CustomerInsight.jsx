import React from 'react'
import { Link } from 'react-router-dom'

function CustomerInsight() {
    return (
        <div>
            {/* <!--Customer Insights --> */}
            <section id="Values">
                <div
                    className="flex flex-col justify-center items-center gap-6 pt-4 pb-12 mx-6 md:mx-8 md:pt-28 lg:pt-32 xl1440:pt-48 md:pb-6 lg:mx-12 xl1440:mx-20 xl1440:gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <h2
                            className="text-[32px] text-brand-dark font-bold text-center leading-tight md:max-w-[582px] xl1440:text-[40px] xl1440:max-w-[840px]">
                            Keep up with the latest Customer Success trends, insights and conversations.</h2>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-6 md:mt-10 md:gap-6 md:mb-0 lg:gap-8 xl1440:gap-10 xl1440:mb-0 xl1440:mt-6 xl1440:max-w-[1280px]">
                        {/* <!-- Card 1 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10  md:mt-0">
                            <div className="flex justify-center items-center">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/04/Resource-Card-Behind-the-Build_-Deploying-Agentforce-on-Help.Salesforce-1.png?w=500"
                                    className="size-fit rounded-t-2xl " alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 m-8 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">Webinar</span>
                                <h2
                                    className="text-xl font-bold tracking-wide lg:text-base text-brand-dark xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-2 xl1440:leading-tight">
                                    Building Your AI Roadmap: 5 Strategic Steps to Success</h2>
                                <Link to="/"
                                    className="flex justify-center md:justify-start md:ml-0 md:pt-14 lg:pt-6 lg:mb-0 lg:mr-0 mx-8 mb-2 text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all pt-[20px] xl1440:pt-[58px]">
                                    Watch the webinar
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                            <div className="flex justify-center items-center">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/04/Resource-Card_-Build-Your-First-AgF-Use-Case.png?w=340"
                                    className="size-fit rounded-t-2xl " alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">Video</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-2 xl1440:leading-tight xl1440:tracking-wide">
                                    Customer Success Keynote: A Path to Success with Salesforce
                                </h2>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all py-[10px] pt-6 xl1440:pt-8">
                                    Watch the video
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                            <div className="flex justify-center items-center ">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/11/08-resource-card-assessment.png?w=1024"
                                    className="size-fit rounded-t-2xl" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1  rounded-full w-fit">Assessment</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-2 xl1440:leading-tight">
                                    Is your organisation ready to adopt AI?</h2>
                                <Link to="/"
                                    className="flex justify-center md:justify-start text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all py-[10px] pt-6 pb-5 lg:pt-10 lg:pb-1 xl1440:pt-[80px]">
                                    Take the assessment
                                    <div className="group w-fit cursor-pointer">
                                        <svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                                            fill="#032D60" className="mt-1 ml-1 lg:mt-4 xl1440:mt-1">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z">
                                            </path>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                            <div className="flex justify-center items-center ">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/08-drive-adoption-video.png?w=1024"
                                    className="size-fit rounded-t-2xl" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">Video</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-2 xl1440:leading-tight xl1440:tracking-wide">
                                    Drive Adoption Success with Expert Strategies</h2>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all  py-[10px] pt-6 lg:pt-8 lg:pb-0 xl1440:pt-[58px]">
                                    Watch the video
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full md:mt-8 xl1440:mt-8">
                        <button className="btn-primary">
                            <div className="flex justify-center items-center">
                                <p>See all resources</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* <!-- Contact us --> */}
            <section id="contact">
                <div className="py-4 md:py-6 flex justify-center xl1440:mx-auto">
                    <article
                        className="flex flex-col lg:flex-row justify-center items-center gap-6 mx-6 lg:mx-12 lg:gap-8 xl1440:mx-20 xl1440:gap-[150px]">
                        <div
                            className="flex flex-col md:justify-center  md:w-[582px] lg:w-[448px] xl1440:w-[620px] xl1440:justify-center">
                            <header>
                                <h2 className="text-[32px] text-brand-dark font-bold leading-tight xl1440:text-[40px]">
                                    Ready to take the next step with Customer Success?
                                </h2>
                            </header>
                            <div>
                                <p className="text-lg mt-4 md:mt-6 md:mb-4 ">
                                    Talk to an expert and tell us a bit more so the right person can keep in touch faster.
                                </p>
                            </div>
                            <button className="btn-primary mt-8">
                                <div className="flex justify-center items-center">
                                    <p>Contact us</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/1-up-contact-us-5.webp?w=1024"
                                alt="main"
                                className="rounded-2xl size-auto mt-6 md:mt-10 md:size-[340px] lg:size-[448px] lg:mt-0 xl1440:size-[510px]" />
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default CustomerInsight
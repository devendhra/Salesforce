import { Link } from 'react-router-dom';

function Conversations() {
    return (
        <div>
            {/* <!-- Conversations --> */}
            <section id="Conversations">
                <div
                    className="flex flex-col justify-center items-center gap-6 py-12 mx-6 md:mx-8 md:py-16 lg:mx-12 xl1440:mx-20 xl1440:gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <h2
                            className="text-[32px] xl:text-[40px] text-brand-dark font-bold text-center leading-tight md:tracking-[0.012em] lg:w-[608px] lg:tracking-normal xl:w-[840px]">
                            Keep up with the latest travel, transportation, and hospitality trends, insights, and conversations.
                        </h2>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mt-10 md:gap-6 md:mb-0 lg:gap-8 xl1440:gap-10 xl1440:mb-0 xl1440:mt-6 xl1440:max-w-[1280px]">
                        {/* <!-- Card 1 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white mt-[18px] relative z-10  md:mt-0">
                            <div className="flex justify-center items-center">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/05/tth-great-wolf-lodge-webinar-resource-card.jpg?w=768"
                                    className="size-fit rounded-t-2xl " alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-4 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">Webinar</span>
                                <h2
                                    className="text-xl font-bold tracking-wide md:tracking-normal lg:text-base lg:tracking-tight text-brand-dark xl1440:text-[20px] hover:text-brand-light transition-all xl1440:tracking-wide xl1440:mt-0 xl1440:leading-[1.35]">
                                    Unlocking Customer Loyalty with Great Wolf Lodge
                                </h2>
                                <Link to="#"
                                    className="flex md:ml-0 lg:pt-16 lg:mb-0 lg:mr-0 mb-3 text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all pt-[20px] xl1440:pt-[70px]">
                                    Watch the webinar
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                            <div className="flex justify-center items-center ">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/05/tth-werner-elevates-logisitics-webinar-resource-card.jpg?w=768"
                                    className="size-fit rounded-t-2xl" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1  rounded-full w-fit">Webinar</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-0 xl1440:leading-[1.35]">
                                    How Werner Elevates Logistics with Salesforce
                                </h2>
                                <Link to="#"
                                    className="flex  text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all  pt-6 pb-3 lg:pt-16 lg:pb-1 xl1440:pt-[80px]">
                                    Watch the webinar
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                            <div className="flex justify-center items-center">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/07/The-Top-5-Ways-AI-is-Unlocking-Growth-Opportunities-in-the-Travel-and-Hospitality-Industry.png?w=1024"
                                    className="size-fit rounded-t-2xl "alt="salesforce" />
                            </div>
                            <div className="flex flex-col gap-4 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">Article</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-0 xl1440:leading-[1.35] xl1440:tracking-wide">
                                    The Top 5 Ways AI is Unlocking Growth Opportunities in the Travel and Hospitality Industry
                                </h2>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all pb-[10px] pt-6 lg:pt-4">
                                    Read the article
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                            <div className="flex justify-center items-center ">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/05/tth-estes-salesforce-service-webinar-resource-card.jpg?w=768"
                                    className="size-fit rounded-t-2xl" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">Webinar</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-0 xl1440:leading-[1.35] tracking-wide">
                                    Elevate Your Service Game: Insights from Estes and Salesforce
                                </h2>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all  py-[10px] pt-6 md:pt-16 lg:pt-10 lg:pb-0 xl1440:pt-[78px]">
                                    Watch the webinar
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full md:mt-10 xl1440:mt-6">
                        <button className="btn-secondary bg-white">
                            <div className="flex justify-center items-center ">
                                <p>See all resources</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* <!-- #1 CRM  --> */}
            <section id="#1 CRM"
                className="relative overflow-hidden h-[877px] xs402:h-[789px] md:h-[813px] lg:h-[719px] xl:h-[819px]">
                <div className="z-40 flex flex-col items-center pt-4 pb-12 md:pt-6 md:pb-16 md:mx-8 text-center mx-6">
                    {/* <!-- Heading --> */}
                    <h2
                        className="text-[32px] xl:text-[40px] font-bold text-brand-dark leading-tight md:w-[461px] lg:w-[608px] xl:w-[840px]">
                        Ready to take the next step with the world’s
                        #1 AI CRM for Travel, Transportation, & Hospitality
                    </h2>

                    {/* <!-- Cards Wrapper --> */}
                    <div className="mt-12 flex flex-col  justify-center items-center gap-4 lg:mt-16 lg:flex-row lg:gap-8 xl:gap-10">
                        {/* <!-- Card 1 --> */}
                        <div className="bg-white flex justify-between rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] p-8 lg:p-10 w-full text-left
                    lg:flex-col">
                            <div
                                className="bg-[#e6f1fc] w-10 h-10 lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center mb-6">
                                <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2024/08/call.svg"
                                    alt="Call Icon" className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
                            </div>
                            <div className="w-[205px] md:w-[339px] md:pl-4 lg:w-[286px] lg:pl-0 xl:w-[318px]">
                                <h3 className="text-[24px] font-bold text-brand-dark my-2 md:mt-0">Talk to an expert.</h3>
                                <p className="mb-4 lg:mb-16">Tell us a bit more so the right person can reach out faster.</p>
                                <Link to="/" className="text-brand-dark font-semibold underline">Request a call</Link>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="bg-white flex justify-between rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] p-8 lg:p-10 w-full text-left
                        lg:flex-col">
                            <div
                                className="bg-[#e6f1fc] w-10 h-10 lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center mb-6">
                                <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2024/08/email.svg"
                                    alt="Email Icon" className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
                            </div>
                            <div className="w-[205px] md:w-[339px] md:pl-4 lg:w-[286px] lg:pl-0 xl:w-[318px]">
                                <h3 className="text-[24px] font-bold text-brand-dark my-2 md:mt-0">Stay up to date.</h3>
                                <p className="mb-4 lg:mb-8 md:tracking-[-0.010em] xl:tracking-normal xl:mb-[47px]">Get the latest
                                    research, industry insights, and product news delivered
                                    straight to your inbox.</p>
                                <Link to="/" className="text-brand-dark font-semibold underline">Sign up for newsletter</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full overflow-hidden z-[-10]
                        xs402:bottom-[0px]">
                    <div className="w-full">
                        <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/07/THT-Hospitality-Next-steps-Background.png?w=1024"
                            alt="background" className="w-full object-contain" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Conversations
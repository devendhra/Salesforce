import { Link } from 'react-router-dom'

function Ceo() {
    return (
        <div>
            {/* <!-- CEO  --> */}
            <section id="CEO">
                <div
                    className="py-12 md:py-16 xl1440:w-[1280px] xl1440:flex xl1440:justify-center xl1440:items-center xl1440:mx-auto">
                    <div className="mx-6 shadow-2xl rounded-2xl md:mx-8 lg:mx-12 xl1440:mx-0 relative">
                        {/* <!-- Background SVG  --> */}
                        <div className="hidden md:block absolute inset-0 -z-10 h-[350px] xl:h-[510px] rounded-t-2xl w-full bg-no-repeat bg-center bg-cover"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='1280' height='459' viewBox='0 0 1390 459' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2462 -979C2462 -184.814 1812.81 459 1012 459C211.187 459 -438 -184.814 -438 -979C-438 -1773.19 211.187 -2417 1012 -2417C1812.81 -2417 2462 -1773.19 2462 -979Z' fill='rgb(234, 245, 254)'/%3E%3C/svg%3E")`
                            }}>
                        </div>
                        <article>
                            <div className="flex flex-col md:flex-row md:justify-between lg:justify-around px-8 pt-8 pb-10 md:py-12 md:px-16 lg:py-14 lg:px-24 
                                xl1440:py-16 xl1440:px-[110px] xl1440:pl-[140px]">
                                <div className="md:w-[1/2] flex md:items-center md:justify-center">
                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/n-up-quote-mb-stakeholder.webp?w=1024"
                                        alt="" className="size-[162px] md:size-[220px] lg:size-[240px] xl1440:size-[320px]" />
                                </div>
                                <div className="mt-6 md:w-1/2 md:mt-0 xl1440:ml-20">
                                    <div>
                                        <img src="https://a.sfdcstatic.com/shared/images/pbc/icons/quotation-english.svg" alt=""
                                            className="w-[26px] h-[21px] lg:w-[31px] lg:h-[25px] xl1440:w-[41px] xl1440:h-[34px]" />
                                    </div>
                                    <h3
                                        className="mt-3 text-xl text-brand-dark font-bold lg:text-2xl xl1440:text-[32px] md:tracking-tight
                                    xl1440:leading-tight xl1440:tracking-[0.001em] hover:text-brand-light transition-all xl:mt-5 xl:mb-6">
                                        When we focus on stakeholder value as well as shareholder value, our companies will be
                                        more successful,
                                        our communities will be more equal, our societies will be more just, and our planet will
                                        be healthier.
                                    </h3>
                                    <div className="mb-6 text-[17px]">
                                        <div className="mt-4 text-brand-dark font-bold xl:text-xl">Marc Benioff</div>
                                        <div className="tracking-[0.005em] xl:text-xl">Chair, CEO & Co-Founder, Salesforce</div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* <!-- Impact News  --> */}
            <section id="Impact-News">
                <div
                    className="flex flex-col justify-center items-center gap-6 py-12 mx-6 md:mx-8 md:py-16 lg:mx-12 xl1440:mx-20 xl1440:gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-[34px] xl:text-[42px] text-brand-dark font-bold text-center">
                            Impact News
                        </h2>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mt-10 md:gap-6 md:mb-0 lg:gap-8 xl1440:gap-10 xl1440:mb-0 xl1440:mt-6 xl1440:max-w-[1280px]">
                        {/* <!-- Card 1 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white mt-[18px] relative z-10  md:mt-0">
                            <div className="flex justify-center items-center">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/Salesforce-Launches-Agents-for-Impact-Accelerator-for-Nonprofits-to-Scale-Impact-with-Agentforce.jpg?w=580"
                                    className="size-fit rounded-t-2xl " />
                            </div>
                            <div className="flex flex-col gap-4 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">News</span>
                                <h2
                                    className="text-xl font-bold tracking-wide lg:text-base lg:tracking-tight text-brand-dark xl1440:text-[20px] hover:text-brand-light transition-all xl1440:tracking-wide xl1440:mt-0 xl1440:leading-[1.35]">
                                    Salesforce Unveils Agentforce Accelerator to Boost Nonprofit Impact
                                </h2>
                                <Link to="/"
                                    className="flex md:ml-0 md:pt-[75px] lg:pt-[50px] lg:mb-0 lg:mr-0 mb-3 text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all pt-[20px] xl1440:pt-[78px]">
                                    Read more
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                            <div className="flex justify-center items-center ">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/AI-for-All_-Salesforce-Offers-Free-Training-Creates-New-Spaces-to-Help-Everyone-Succeed-in-an-AI-World.jpg?w=580"
                                    className="size-fit rounded-t-2xl" />
                            </div>
                            <div className="flex flex-col gap-3 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1  rounded-full w-fit">News</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-0 xl1440:leading-[1.35]">
                                    AI for All: Salesforce Provides Free AI Training, Dedicates Office Space to Help Anyone
                                    Succeed in an AI World</h2>
                                <Link to="/"
                                    className="flex  text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all  pt-6 pb-3 lg:pt-3 lg:pb-1 xl1440:pt-[30px]">
                                    Read more
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                            <div className="flex justify-center items-center">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/Salesforce-Gives-23M-to-Education-to-Help-the-AI-Generation-Unlock-Critical-Skills.jpg?w=580"
                                    className="size-fit rounded-t-2xl " />
                            </div>
                            <div className="flex flex-col gap-4 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">News</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-0 xl1440:leading-[1.35] xl1440:tracking-wide">
                                    Salesforce Gives $23M to Education to Help the AI Generation Unlock Critical Skills
                                </h2>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all pb-[10px] pt-6 xl1440:pt-[70px]">
                                    Read more
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                            <div className="flex justify-center items-center ">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/Sustainable-AI_-Balancing-Innovation-with-Environmental-Responsibility.jpg?resize=150,150 150w,https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/Sustainable-AI_-Balancing-Innovation-with-Environmental-Responsibility.jpg?resize=300,169 300w"
                                    className="size-fit rounded-t-2xl" />
                            </div>
                            <div className="flex flex-col gap-3 m-8 lg:m-6 xl1440:m-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-1 rounded-full w-fit">News</span>
                                <h2
                                    className="text-xl font-bold text-brand-dark lg:text-base xl1440:text-[20px] hover:text-brand-light transition-all xl1440:mt-0 xl1440:leading-[1.35] tracking-wide">
                                    How Salesforce Is Balancing AI Innovation with Environmental Responsibility</h2>
                                <Link to="/"
                                    className="text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all  py-[10px] pt-6 lg:pt-8 lg:pb-0 xl1440:pt-[58px]">
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full md:mt-10 xl1440:mt-6">
                        <button className="btn-secondary">
                            <div className="flex justify-center items-center">
                                <p>See more news</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ceo
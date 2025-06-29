import React from 'react'
import { Link } from 'react-router-dom'

function Skills() {
    return (
        <div>
            {/* <!-- Skills --> */}
            <section id="Skills">
                <div
                    className="flex flex-col justify-center items-center gap-6 py-12 mx-6 lg:gap-8 md:mx-8 md:py-16 lg:mx-12 xl1440:mx-20 xl1440:gap-16">
                    <div className="flex flex-col justify-center items-center">
                        <h2
                            className="text-[32px] text-brand-dark font-bold text-center leading-tight md:max-w-[582px] xl1440:text-[40px] xl1440:max-w-[840px]">
                            Learn new skills with free, guided learning on Trailhead.</h2>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-4 md:mt-0 md:gap-6 lg:grid-cols-3 lg:gap-8 lg:pb-8 xl1440:gap-10 xl1440:mb-0 xl1440:max-w-[1280px]">
                        {/* <!-- Card 1 --> */}
                        <div className="flex flex-col rounded-2xl shadow-2xl p-8 md:p-6 lg:p-8 xl:p-10 bg-white relative z-10 ">
                            <div className="flex justify-center items-center">
                                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/data-cloud-powered-experiences/fbab10d514f686372f2b87a636dfb8d3_badge.png"
                                    className=" size-[120px]" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 mt-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-[4px] rounded-full w-fit">Module</span>
                                <h2 className="text-2xl font-bold text-brand-dark xl1440:text-[25px] leading-none lg:leading-tight">
                                    Data Cloud-Powered Experiences</h2>
                                <p
                                    className="text-base text-[#181818] leading-snug md:tracking-[0.025em] mb-6 xl:mb-0 xl1440:text-lg lg:tracking-tight">
                                    Use Data Cloud to create personalized, real-time experiences across Salesforce and beyond.
                                </p>
                                <Link to="/" className="text-base font-semibold text-brand-dark underline pt-[20px] pb-[10px]">
                                    Start learning
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div
                            className="flex flex-col justify-center rounded-2xl shadow-2xl p-8 md:p-6 lg:p-8 xl:p-10 bg-white relative z-10 lg:justify-start ">
                            <div className="flex justify-center items-center">
                                <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/data-spaces-in-data-cloud-quick-look/88ded49bc301bebb4339f42ff16e7b0d_badge.png"
                                    className=" size-[120px]" alt="salesforce"/>
                            </div>
                            <div className="flex flex-col gap-3 mt-8">
                                <span
                                    className="text-xs font-semibold text-brand-dark bg-blue-100 px-[10px] py-[4px] rounded-full w-fit">Module</span>
                                <h2
                                    className="text-2xl font-bold text-brand-dark xl1440:text-[25px] leading-none lg:tracking-[0.01em] lg:leading-tight xl:tracking-normal ">
                                    Data Spaces in Data Cloud: Quick Look</h2>
                                <p
                                    className="text-base text-[#181818] leading-snug mb-8   xl1440:text-lg lg:mb-[80px] xl:mb-[40px]">
                                    Learn the benefits of using data spaces in Data Cloud.
                                </p>
                                <Link to="/" className="text-base font-semibold underline text-brand-dark py-[10px]">
                                    Start learning
                                </Link>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
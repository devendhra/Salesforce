import React from 'react'
import { Link } from 'react-router-dom'

function Crm() {
    return (
        <div>
            {/* <!-- #1 CRM  --> */}
            <section id="#1 CRM"
                className="relative overflow-hidden h-[677px] xs402:h-[613px] md:h-[669px] lg:h-[615px] xl:h-[707px]">
                <div className="z-40 flex flex-col items-center pt-4 pb-12 md:pt-6 md:pb-16 md:mx-8 text-center mx-6">
                    {/* <!-- Heading --> */}
                    <h2
                        className="text-[32px] xl:text-[40px] font-bold text-brand-dark leading-tight md:w-[461px] lg:w-[608px] xl:w-[840px]">
                        Ready to take the next step with Data Cloud?
                    </h2>

                    {/* <!-- Cards Wrapper --> */}
                    <div className="mt-12 flex flex-col  justify-center items-center gap-4 lg:mt-16 lg:flex-row lg:gap-8 xl:gap-10">
                        {/* <!-- Card 1 --> */}
                        <div className="bg-white flex justify-between rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] p-8 pt-[30px] lg:p-10 w-full text-left
                            lg:flex-col">
                            <div
                                className="bg-[#e6f1fc] w-10 h-10 lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center mb-6">
                                <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2024/08/call.svg"
                                    alt="Call Icon" className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
                            </div>
                            <div className="w-[205px] xs402:w-[256px] md:w-[339px] pl-4 lg:w-[286px] lg:pl-0 xl:w-[318px]">
                                <h3 className="text-[24px] font-bold text-brand-dark mb-2 md:mt-0 tracking-[-0.02em]">Talk to an expert.</h3>
                                <p className="mb-4 lg:mb-8">Tell us a bit more so the right person can reach out faster.</p>
                                <Link to="/" className="text-brand-dark font-semibold underline">Request a call</Link>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="bg-white flex justify-between rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] p-8 pt-[30px] lg:p-10 w-full text-left
                            lg:flex-col">
                            <div
                                className="bg-[#e6f1fc] w-10 h-10 lg:w-[46px] lg:h-[46px] rounded-full flex items-center justify-center mb-6">
                                <img src="https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2024/08/screen.svg"
                                    alt="Email Icon" className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
                            </div>
                            <div className="w-[205px] xs402:w-[256px] md:w-[339px] pl-4 lg:w-[286px] lg:pl-0 xl:w-[318px]">
                                <h3 className="text-[24px] font-bold text-brand-dark mb-2 md:mt-0">Get started.</h3>
                                <p className="mb-4 lg:mb-12 md:tracking-[-0.010em] xl:tracking-normal xl:mb-[47px]">Activate Data Cloud for your team today.</p>
                                <Link to="/" className="text-brand-dark font-semibold underline">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full overflow-hidden z-[-10]">
                    <div className="w-full">
                        <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/03/trailhead-background_3fb138.png?w=1024"
                            alt="background" className="w-full object-contain" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Crm
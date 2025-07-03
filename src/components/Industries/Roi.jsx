import React from 'react'

function Roi() {
    return (
        <div>
            {/* <!-- ROI  --> */}
            <section className="ROI">
                <div className="py-12 md:py-16">
                    <div className="mx-6 md:mx-8 lg:mx-12 xl:mx-20 ">
                        <div
                            className="rounded-2xl shadow-2xl flex flex-col gap-6 md:flex-row-reverse md:items-end md:justify-end lg:gap-8 xl:gap-16 xl:h-[451px] xl:w-[1280px] xl:mx-auto">
                            <div
                                className="pt-10 pb-2 mx-8 md:py-16 md:w-[278px] md:mx-0 lg:w-[367px] xl:w-[510px] xl:ml-20 xl:-mr-4 xl:-mt-8">
                                <header>
                                    <h2 className="text-[32px] mb-4 md:mb-6 font-bold leading-tight text-brand-dark xl:text-[40px]">
                                        Maximize ROI with the #1 Success Ecosystem.
                                    </h2>
                                    <p className="text-lg mb-8 md:mb-12 lg:tracking-[0.015em] xl:tracking-[0.022em]">
                                        From support, expert guidance, and resources to our partners on AppExchange,
                                        the Success Ecosystem is here to help you unlock the full power of your full investment.
                                    </p>
                                </header>
                                <div>
                                    <button className="btn-secondary">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                            <div className="md:size-[339px] lg:size-[447px] xl:size-[510px]">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/04/success-ecosystem-min.png?w=1024"
                                    alt="salesfoce" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Roi
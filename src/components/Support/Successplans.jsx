import {Link} from "react-router-dom";

function Successplans() {
    return (
        <div>
            {/* <!-- Success Plans  --> */}
            <section id="success-plans">
                <div className="py-4 md:py-6 xl:pb-0 flex justify-center items-center mx-auto">
                    <div className="grid grid-cols-1 gap-8 mx-6 lg:gap-10 lg:mx-12 xl:mx-20 ">
                        <header className="flex justify-center items-center">
                            <h2
                                className="text-[32px] text-brand-dark font-bold leading-tight text-center mt-[26px] md:w-[582px] md:mt-8 lg:w-[768px] xl:[840px] xl:text-[40px] xl:mt-[33px]">
                                Explore our solutions for every stage of your Salesforce journey.
                            </h2>
                        </header>
                        <div className="flex lg:hidden justify-center">
                            <button
                                className="flex justify-between py-[10px] px-3 text-base rounded-sm border-[0.8px] border-[#181818] hover:bg-[#EAF5FE] hover:border-brand-dark hover:text-brand-dark md:w-[340px]">
                                <p className="mr-2">
                                    Learn more
                                </p>
                                <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23808080%22%20d%3D%22M7.41%208.59L12%2013.17l4.59-4.58L18%2010l-6%206l-6-6z%22/%3E%3C/svg%3E"
                                    alt="cheveron-button" className="-mt-1" />
                            </button>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:items-start">
                            <div
                                className="flex flex-col justify-center items-center lg:mt-10 lg:pr-6 lg:justify-start lg:items-start">
                                <h2
                                    className="text-[24px] pb-[10px] text-brand-dark font-bold md:pb-[18px] lg:w-[196px] xl:w-[266px] xl:text-[32px]">
                                    Success Plans
                                </h2>
                                <Link to="/"
                                    className="text-base font-semibold underline text-brand-dark hover:text-brand-light hover:no-underline">
                                    Learn more
                                </Link>
                            </div>
                            {/* <!-- Cards  --> */}
                            <div
                                className="horizontal-scroll-section relative w-full overflow-hidden xl1440:flex xl1440:justify-center">
                                {/* <!-- Scroll Buttons --> */}
                                <button
                                    className="scroll-left absolute hidden md:flex xl:hidden left-10 lg:left-0 top-[40%] lg:top-[39%] z-10 bg-white shadow-lg p-5 rounded-full">
                                    <img src="https://a.sfdcstatic.com/shared/images/pbc/icons/chevron-right.svg"
                                        alt="Scroll Left" className="w-4 h-4 rotate-180" />
                                </button>
                                <button
                                    className="scroll-right absolute hidden md:flex xl:hidden right-10 top-[40%] z-10 bg-white shadow-lg p-5 rounded-full">
                                    <img src="https://a.sfdcstatic.com/shared/images/pbc/icons/chevron-right.svg"
                                        alt="Scroll Right" className="w-4 h-4" />
                                </button>

                                {/* <!-- Left & Right Fades --> */}
                                <div
                                    className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-r from-white to-transparent z-10">
                                </div>
                                <div
                                    className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-gradient-to-l from-white to-transparent z-10">
                                </div>

                                {/* <!-- Cards Wrapper --> */}
                                <div
                                    className="card-wrapper flex hide-scrollbar overflow-x-auto scroll-smooth gap-6 lg:gap-8 xl1440:gap-10 lg:mb-4">
                                    {/* <!-- Card-1 --> */}
                                    <div
                                        className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[280px] lg:w-[288px] lg:ml-[5px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-6 md:ml-[68px]">
                                        <div className="flex flex-col justify-between h-full p-8">
                                            <div className="flex-grow">
                                                <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                    to="#">Standard Success Plan</Link></h3>
                                                <p className="mt-4 text-sm">Set your company up for success with free, always-on
                                                    resources and essential support for all your needs.</p>
                                            </div>
                                            <div>
                                                <Link to="/"
                                                    className="text-sm text-brand-dark underline font-semibold hover:text-brand-light hover:no-underline">Learn
                                                    more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Card-2 --> */}
                                    <div
                                        className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[280px] lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-6">
                                        <div className="flex flex-col justify-between h-full p-8">
                                            <div className="flex-grow">
                                                <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                    to="/">Premier Success Plan</Link></h3>
                                                <p className="mt-4 text-sm">Start strong and discover new ways to get more value
                                                    from Salesforce every day with personalised programmes, expert guidance and
                                                    expedited support.</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Link to="/"
                                                    className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                    for free</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Card-3 --> */}
                                    <div
                                        className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[280px] lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-6    xl1440:mr-2">
                                        <div className="flex flex-col justify-between h-full p-8">
                                            <div className="flex-grow">
                                                <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                    to="#">Signature Success Plan</Link></h3>
                                                <p className="mt-4 text-sm">Clear a path for Agentforce transformation and run at
                                                    peak performance with your go-to advocate, specialised programmes and the
                                                    fastest support.</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Link to="/"
                                                    className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                    for free</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--  Scroll Indicator --> */}
                                <div
                                    className="relative w-[318px] md:w-[575px] mb-4 h-[13px] md:ml-[68px] xl1440:hidden border-[1px] z-20 rounded-full overflow-hidden lg:ml-0 lg:w-[618px]">
                                    <div className="scroll-indicator absolute h-[5px] m-[3px] bg-[#939393] rounded-full transition-all duration-300"
                                        style={{width: "0%", left: "0%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Successplans
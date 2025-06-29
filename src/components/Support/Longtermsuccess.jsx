import { Link } from 'react-router-dom'

function Longtermsuccess() {
    return (
        <div>
            {/* <!-- Longterm-success  --> */}
            <section className="longterm-success">
                <div className="py-4 xs402:-mt-3 xs402:pt-0 md:-mt-0 md:py-4 xl1440:py-0 xl1440:-mt-[12px] md:pb-6 lg:pb-0">
                    <div className="flex flex-col mx-6 gap-6">
                        <header className="flex flex-col lg:ml-40 xl:ml-[280px] xl1440:max-h-full">
                            <h2 className="text-[32px] md:ml-9 text-center text-brand-dark leading-tight font-bold
                                md:w-[636px] xl1440:text-[40px] xl1440:w-[851px]">
                                Set your foundation for long-term Agentforce success.
                            </h2>
                            <p className="md:ml-20 text-xl leading-snug text-center mt-4 md:w-[524px] xl1440:w-[739px]">
                                Customer Success offers self-service resources and expert services from our CRM, AI and data
                                experts with a special focus on Agentforce, our AI-powered agent solution, through Success Plans
                                and Professional Services.
                            </p>
                        </header>

                        {/* <!-- Cards  --> */}
                        <div
                            className="horizontal-scroll-section relative w-full overflow-hidden xl1440:flex xl1440:justify-center">
                            {/* <!-- Scroll Buttons --> */}
                            <button
                                className="scroll-left absolute hidden md:flex lg:hidden left-4 top-1/2 z-10 bg-white shadow p-5 rounded-full">
                                <img src="https://a.sfdcstatic.com/shared/images/pbc/icons/chevron-right.svg" alt="Scroll Left"
                                    className="w-4 h-4 rotate-180" />
                            </button>
                            <button
                                className="scroll-right absolute hidden md:flex lg:hidden right-2 top-1/2 z-10 bg-white shadow p-5 rounded-full">
                                <img src="https://a.sfdcstatic.com/shared/images/pbc/icons/chevron-right.svg" alt="Scroll Right"
                                    className="w-4 h-4" />
                            </button>

                            {/* <!-- Left & Right Fades --> */}
                            <div
                                className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-r from-white to-transparent z-10">
                            </div>
                            <div
                                className="pointer-events-none absolute right-0 top-0 h-full w-1 bg-gradient-to-l from-white to-transparent z-10">
                            </div>

                            {/* <!--  Cards Wrapper --> */}
                            <div
                                className="card-wrapper flex hide-scrollbar overflow-x-auto scroll-smooth gap-6 mt-8 md:mt-16 lg:gap-8 xl1440:gap-10">
                                {/* <!-- Card-1 --> */}
                                <div
                                    className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[270px] lg:w-[288px] lg:ml-[25px] shadow-xl border-t-8 bg-white rounded-b-2xl rounded-t-lg mb-8 md:ml-3">
                                    <div className="flex flex-col justify-between h-full p-8">
                                        <div className="flex-grow">
                                            <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                to="#">Trailhead</Link></h3>
                                            <p className="mt-4 text-sm">Learn how Agentforce fits your business goals, launch your
                                                first agent and build a plan for AI success.</p>
                                        </div>
                                        <div>
                                            <Link to="#"
                                                className="text-sm text-brand-dark underline font-semibold hover:text-brand-light hover:no-underline">Learn
                                                more
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Card-2 --> */}
                                <div
                                    className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[270px] lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-8">
                                    <div className="flex flex-col justify-between h-full p-8">
                                        <div className="flex-grow">
                                            <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link to="#">Success
                                                Plans for Agentforce</Link></h3>
                                            <p className="mt-4 text-sm">Achieve your workplace efficiency goals with Agentforce
                                                using innovative tools, guidance and support.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Link to="#"
                                                className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                for free</Link>
                                            <div className="group w-fit cursor-pointer">
                                                <svg width="16" height="16" viewBox="0 0 18 18"
                                                    xmlns="http://www.w3.org/2000/svg" fill="#032D60">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Card-3 --> */}
                                <div
                                    className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[270px] lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-8 xl1440:mr-2">
                                    <div className="flex flex-col justify-between h-full p-8">
                                        <div className="flex-grow">
                                            <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                to="#">Agentforce Activator</Link></h3>
                                            <p className="mt-4 text-sm">Tap into our unmatched Agentforce expertise to help you
                                                quickly build and deploy an agent for long-term success.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Link to="#"
                                                className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                for free</Link>
                                            <div className="group w-fit cursor-pointer">
                                                <svg width="16" height="16" viewBox="0 0 18 18"
                                                    xmlns="http://www.w3.org/2000/svg" fill="#032D60">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--  Scroll Indicator --> */}
                            <div
                                className="relative w-[355px] md:w-[680px] h-[13px] mt-[26px] md:mt-[6px] md:ml-3 lg:hidden border-[1px] z-20 rounded-full overflow-hidden">
                                <div className="scroll-indicator absolute h-[5px] m-[3px] bg-[#939393] rounded-full transition-all duration-300"
                                    style={{width: "0%", left: "0%"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Longtermsuccess
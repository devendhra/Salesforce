import { Link } from "react-router-dom";
import { useEffect } from "react";


function Travel() {
    useEffect(() => {
        const section = document.querySelector(".horizontal-scroll-section");
        if (!section) return;

        const wrapper = section.querySelector(".card-wrapper");
        const leftBtn = section.querySelector(".scroll-left");
        const rightBtn = section.querySelector(".scroll-right");
        const indicator = section.querySelector(".scroll-indicator");

        const updateIndicator = () => {
            const scrollLeft = wrapper.scrollLeft;
            const scrollWidth = wrapper.scrollWidth;
            const visibleWidth = wrapper.clientWidth;
            const scrollableWidth = scrollWidth - visibleWidth;

            if (scrollableWidth <= 0) {
                indicator.style.opacity = "0";
                return;
            }

            const percentage = scrollLeft / scrollableWidth;
            const indicatorWidth = (visibleWidth / scrollWidth) * 100;
            const indicatorLeft = percentage * (100 - indicatorWidth);
            indicator.style.width = `${indicatorWidth}%`;
            indicator.style.left = `${indicatorLeft}%`;
            indicator.style.opacity = "1";
        };

        leftBtn.addEventListener("click", () => wrapper.scrollBy({ left: -300, behavior: "smooth" }));
        rightBtn.addEventListener("click", () => wrapper.scrollBy({ left: 300, behavior: "smooth" }));
        wrapper.addEventListener("scroll", updateIndicator);
        window.addEventListener("load", updateIndicator);
        window.addEventListener("resize", updateIndicator);

        updateIndicator();

        return () => {
            wrapper.removeEventListener("scroll", updateIndicator);
            window.removeEventListener("resize", updateIndicator);
        };
    }, []);

    return (
        <div>
            {/* <!-- Travel --> */}
            <section id="travel" className="longterm-success">
                <div className="py-12 md:-mt-0 md:py-16 xl:flex xl:w-[1440px] xl:mx-auto xl:justify-center">
                    <div className="flex flex-col mx-6 gap-6">
                        <div className="flex flex-col lg:ml-40 xl:ml-0 xl:justify-center xl:items-center xl1440:max-h-full">
                            <h2 className="text-[32px] md:ml-9 text-center text-brand-dark leading-tight font-bold
                        md:w-[636px] lg:w-[672px] lg:ml-0 xl1440:text-[40px] xl1440:w-[851px]">
                                Bring trusted data and Agentforce together to drive growth, unite teams, and deliver real-time
                                personalization at scale.
                            </h2>
                        </div>
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
                                className="card-wrapper  flex hide-scrollbar overflow-x-auto scroll-smooth gap-6 mt-8 md:mt-10 lg:gap-8 xl1440:gap-10">
                                {/* <!-- Card-1 --> */}
                                <div
                                    className="card border-[#D17DFE] h-[300px] flex-shrink-0 w-[270px] lg:w-[288px] lg:ml-[25px] shadow-xl border-t-8 bg-white rounded-b-2xl rounded-t-lg mb-8 md:ml-3 lg:mb-4">
                                    <div className="flex flex-col justify-between h-full p-8">
                                        <div className="flex-grow">
                                            <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                to="/">Travel</Link></h3>
                                            <p className="mt-4 text-sm">Harness the power of agentic AI to cost-effectively
                                                transform operations,
                                                scale capabilities, and deliver highly personalized travel experiences.
                                            </p>
                                        </div>
                                        <div>
                                            <Link to="/"
                                                className="text-sm text-brand-dark underline font-semibold hover:text-brand-light hover:no-underline">Learn
                                                more
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Card-2 --> */}
                                <div
                                    className="card border-[#D17DFE] h-[300px] flex-shrink-0 w-[270px] lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-8 lg:mb-4">
                                    <div className="flex flex-col justify-between h-full p-8">
                                        <div className="flex-grow">
                                            <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                to="/">Transportation and Logistics</Link></h3>
                                            <p className="mt-4 text-sm">Lower costs, safeguard margins, and unlock growth
                                                opportunities through
                                                connected data, Agentforce, and AI-powered insights.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Link to="/"
                                                className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                more
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Card-3 --> */}
                                <div
                                    className="card border-[#D17DFE] h-[300px] flex-shrink-0 w-[270px] lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-8 xl1440:mr-2 lg:mb-4">
                                    <div className="flex flex-col justify-between h-full p-8">
                                        <div className="flex-grow">
                                            <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                to="/">Hospitality</Link></h3>
                                            <p className="mt-4 text-sm">Deliver seamless guest journeys, build loyalty, and redefine
                                                service excellence through
                                                connected data, advanced analytics, and AI-powered personalized experiences.</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Link to="/"
                                                className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--  Scroll Indicator --> */}
                            <div
                                className="relative w-[355px] md:w-[680px] h-[13px] mt-[26px] md:mt-[6px] md:mb-4 md:ml-3 lg:hidden border-[1px] z-20 rounded-full overflow-hidden mb-4">
                                <div className="scroll-indicator absolute h-[5px] m-[3px] bg-[#939393] rounded-full transition-all duration-300 "
                                    style={{ width: "0%", left: "0%" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Deliver --> */}
            <section id="deliver">
                <div className="pt-12 pb-4 mx-6 md:pt-16 md:pb-6 md:mx-20 lg:pt-16 lg:pb-6 lg:w-[608px] lg:mx-auto xl:w-[840px] ">
                    <h1 className="text-[40px] xl:text-[48px] font-bold leading-[1.16] tracking-normal text-brand-dark text-center
                        xs402:tracking-normal xl1440:tracking-">
                        Deliver customer success with travel, hotel, and logistics software.
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default Travel
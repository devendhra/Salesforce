import { Link } from "react-router-dom"
import { useEffect } from "react";


function Professionalservice() {
    useEffect(() => {
        const sections = document.querySelectorAll(".horizontal-scroll-section");

        sections.forEach((section) => {
            const wrapper = section.querySelector(".card-wrapper");
            const leftBtn = section.querySelector(".scroll-left");
            const rightBtn = section.querySelector(".scroll-right");
            const indicator = section.querySelector(".scroll-indicator");

            const updateIndicator = () => {
                const scrollLeft = wrapper.scrollLeft;
                const scrollWidth = wrapper.scrollWidth;
                const visibleWidth = wrapper.clientWidth;
                const scrollableWidth = scrollWidth - visibleWidth;
                const percentage = scrollLeft / scrollableWidth;
                const indicatorWidth = (visibleWidth / scrollWidth) * 100;
                const indicatorLeft = percentage * (100 - indicatorWidth);
                if (indicator) {
                    indicator.style.width = `${indicatorWidth}%`;
                    indicator.style.left = `${indicatorLeft}%`;
                }
            };

            const scrollLeft = () => {
                wrapper.scrollBy({ left: -300, behavior: "smooth" });
            };
            const scrollRight = () => {
                wrapper.scrollBy({ left: 300, behavior: "smooth" });
            };

            leftBtn?.addEventListener("click", scrollLeft);
            rightBtn?.addEventListener("click", scrollRight);
            wrapper?.addEventListener("scroll", updateIndicator);
            window.addEventListener("load", updateIndicator);
            window.addEventListener("resize", updateIndicator);

            updateIndicator();

            return () => {
                leftBtn?.removeEventListener("click", scrollLeft);
                rightBtn?.removeEventListener("click", scrollRight);
                wrapper?.removeEventListener("scroll", updateIndicator);
                window.removeEventListener("load", updateIndicator);
                window.removeEventListener("resize", updateIndicator);
            };
        });
    }, []);


    return (
        <div>
            {/* <!-- Professional Services  --> */}
            <section id="Prof-Services">
                <div className="relative py-4 md:py-6 xl:pb-0 flex justify-center items-center mx-auto">
                    <div className=" grid grid-cols-1 gap-8 mx-6 lg:gap-10 lg:mx-12 xl:mx-20">
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
                        <div
                            className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:items-start xl1440:w-[1280px]">
                            <div
                                className="flex flex-col justify-center items-center lg:mt-10 lg:pr-6 lg:justify-start lg:items-start">
                                <h2
                                    className="text-[24px] pb-[10px] text-brand-dark font-bold md:pb-[18px] lg:w-[196px] xl:w-[266px] xl:text-[32px]">
                                    Professional Services
                                </h2>
                                <Link to="/"
                                    className="text-base font-semibold underline text-brand-dark hover:text-brand-light hover:no-underline">
                                    Learn more
                                </Link>
                            </div>
                            {/* <!-- Cards  --> */}
                            <div
                                className="z-20 horizontal-scroll-section relative w-full overflow-hidden xl1440:flex xl1440:flex-col xl1440:justify-center ">
                                {/* <!-- Scroll Buttons --> */}
                                <button
                                    className="scroll-left absolute hidden md:flex left-10 lg:left-0 top-[40%] lg:top-[39%] z-10 bg-white shadow-lg p-5 rounded-full">
                                    <img src="https://a.sfdcstatic.com/shared/images/pbc/icons/chevron-right.svg"
                                        alt="Scroll Left" className="w-4 h-4 rotate-180" />
                                </button>
                                <button
                                    className="scroll-right absolute hidden md:flex right-10 top-[40%] z-10 bg-white shadow-lg p-5 rounded-full">
                                    <img src="https://a.sfdcstatic.com/shared/images/pbc/icons/chevron-right.svg"
                                        alt="Scroll Right" className="w-4 h-4" />
                                </button>

                                {/* <!-- Left & Right Fades --> */}
                                <div
                                    className="pointer-events-none hidden absolute left-0 top-0 h-full w-1 bg-gradient-to-r from-white to-transparent z-10">
                                </div>
                                <div
                                    className="pointer-events-none hidden absolute right-0 top-0 h-full w-1 bg-gradient-to-l from-white to-transparent z-10">
                                </div>

                                {/* <!-- Cards Wrapper --> */}
                                <div
                                    className="card-wrapper flex hide-scrollbar overflow-x-auto scroll-smooth gap-6 lg:gap-8 xl1440:gap-10 lg:mb-4">
                                    {/* <!-- Card-1 --> */}
                                    <div
                                        className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[280px] bg-white lg:w-[288px] lg:ml-[5px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-6 md:ml-[68px]">
                                        <div className="flex flex-col justify-between h-full p-8">
                                            <div className="flex-grow">
                                                <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                    to="#">Strategy & Roadmap</Link></h3>
                                                <p className="mt-4 text-sm">Align on a vision, develop a digital transformation
                                                    strategy and build an actionable roadmap, together with our expertise.</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Link to="/"
                                                    className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                    more
                                                </Link>
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
                                    {/* <!-- Card-2 --> */}
                                    <div
                                        className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[280px] bg-white lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-6">
                                        <div className="flex flex-col justify-between h-full p-8">
                                            <div className="flex-grow">
                                                <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                    to="#">Prototype</Link></h3>
                                                <p className="mt-4 text-sm">Prove functionality and features, mitigate and minimise
                                                    risk and validate business value and impact as we work together to help you
                                                    build confidence in how Salesforce will work in your environment.</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Link to="/"
                                                    className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                    more</Link>
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
                                        className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[280px] bg-white lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-6    xl1440:mr-2">
                                        <div className="flex flex-col justify-between h-full p-8">
                                            <div className="flex-grow">
                                                <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                    to="/">Implement</Link></h3>
                                                <p className="mt-4 text-sm">Prove functionality and features, mitigate and minimise
                                                    risk and validate business value and impact as we work together to help you
                                                    build confidence in how Salesforce will work in your environment.</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Link to="/"
                                                    className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                    more</Link>
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
                                    {/* <!-- Card-4 --> */}
                                    <div
                                        className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[280px] bg-white lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-6    xl1440:mr-2">
                                        <div className="flex flex-col justify-between h-full p-8">
                                            <div className="flex-grow">
                                                <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link to="/">Run &
                                                    Innovate</Link></h3>
                                                <p className="mt-4 text-sm">Embed proven governance frameworks, improve experiences
                                                    and adoption and continuously realise value as we help you to drive ongoing
                                                    transformation.</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Link to="/"
                                                    className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                    more</Link>
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
                                    {/* <!-- Card-5 --> */}
                                    <div
                                        className="card border-[#90D0FE] h-[300px] flex-shrink-0 w-[280px] bg-white lg:w-[288px] shadow-xl border-t-8 rounded-b-2xl rounded-t-lg mb-6    xl1440:mr-2">
                                        <div className="flex flex-col justify-between h-full p-8">
                                            <div className="flex-grow">
                                                <h3 className="text-xl text-brand-dark font-bold tracking-tighter"><Link
                                                    to="#">Expert Services</Link></h3>
                                                <p className="mt-4 text-sm">Engage experts to access the right skill sets for your
                                                    needs, get unrivalled Salesforce expertise and extend your teams with speed.
                                                </p>
                                            </div>
                                            <div className="flex items-center">
                                                <Link to="/"
                                                    className="text-sm text-brand-dark underline font-semibold mr-1 hover:text-brand-light hover:no-underline">Learn
                                                    more</Link>
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
                                    className="relative w-[318px] md:w-[575px] mb-4 h-[13px] bg-white md:ml-[68px] border-[1px] z-20 rounded-full overflow-hidden lg:ml-0 lg:w-[618px] xl1440:w-[918px]">
                                    <div className="scroll-indicator absolute h-[5px] m-[3px] bg-[#939393] rounded-full transition-all duration-300"
                                        style={{ width: "0%", left: "0%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Background Image  --> */}
                    <div className="absolute z-[-1] -bottom-4 md:-bottom-28 lg:-bottom-32 xl:-bottom-56">
                        <picture className="w-full">
                            <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/03-card-blade-logo-background.jpg?resize=2048,640"
                                alt="salesforce" />
                        </picture>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Professionalservice
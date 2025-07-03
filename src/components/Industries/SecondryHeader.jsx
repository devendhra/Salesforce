import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";


function SecondryHeader() {
    const secondaryHeaderRef = useRef(null);
    const secondaryDeskNavRef = useRef(null);
    const icon2Ref = useRef(null); 

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const secondaryHeader = secondaryHeaderRef.current;
            const secondarydesknav = secondaryDeskNavRef.current;
            const icon2 = icon2Ref.current;

            if (!secondaryHeader || !secondarydesknav) return;

            if (scrollTop > 100) {
                secondaryHeader.classList.add("fixed", "top-0", "left-0");
                secondaryHeader.classList.remove("mt-[56px]");
                secondarydesknav.classList.remove("mt-[72px]");
                if (icon2) icon2.classList.remove("hidden");
            } else {
                secondaryHeader.classList.remove("fixed", "top-0", "left-0");
                secondaryHeader.classList.add("mt-[56px]");
                secondarydesknav.classList.add("mt-[0px]");
                if (icon2) icon2.classList.add("hidden");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };
    const downarrow = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23032d60%22%20d%3D%22M7.41%208.59L12%2013.17l4.59-4.58L18%2010l-6%206l-6-6z%22/%3E%3C/svg%3E";
    const uparrow = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZmlsbD0iIzAzMmQ2MCIgZD0iTTEwNC43MDQgNjg1LjI0OGE2NCA2NCAwIDAgMCA5MC40OTYgMGwzMTYuOC0zMTYuOGwzMTYuOCAzMTYuOGE2NCA2NCAwIDAgMCA5MC40OTYtOTAuNDk2TDU1Ny4yNDggMjMyLjcwNGE2NCA2NCAwIDAgMC05MC40OTYgMEwxMDQuNzA0IDU5NC43NTJhNjQgNjQgMCAwIDAgMCA5MC40OTYiLz48L3N2Zz4=";


    return (
        <>
            {/* // < !--Header - 2  -- > */}
            <header id="secondary-header" ref={secondaryHeaderRef} className="mt-[56px] xl:mt-[72px] transition-all duration-300 z-40 w-full bg-white shadow-md xl1440:shadow-none
                                        xl:pt-2 xl:sticky">
                <div className="flex xl:hidden justify-between items-center px-6 py-1 max-w-screen-xl mx-auto">
                    <div className="flex">
                        <Link id="logo-2" to="/" className="hidden mr-4 md:ml-2">
                            <img src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-no-type-logo.svg"
                                className="w-[45px] h-[31.3px] " alt="Salesforce Logo" />
                        </Link>
                        <Link to="/service" id="secondart-text"
                            className="text-[18px] py-1 pr-1 font-semibold tracking-tighter text-brand-dark">
                            Travel, Transportation, & Hospitality
                        </Link>
                    </div>
                    <div className="flex size-10 mr-[-12px] mt-2">
                        <button id="secondary-menu-btn" onClick={toggleMenu}>
                            <img id="icon-1"
                                src={!isMenuOpen ? downarrow : uparrow}
                                alt="salesforce" />
                        </button>
                    </div>
                </div>

                {/* <!-- Desktop Menu  --> */}
                <header id="second-desk-nav" ref={secondaryDeskNavRef} className="hidden xl:flex py-1 ">
                    <div className="flex px-11 w-full gap-1">
                        <div className="flex items-start">
                            <Link to="/service" id="impact"
                                className="text-[25px] font-semibold whitespace-nowrap tracking-[-0.010em] text-brand-dark">
                                Travel, Transportation, & Hospitality
                            </Link>
                        </div>
                        <div className="flex justify-between w-full pl-10 mt-[7px]">
                            <nav>
                                <ul className="flex items-start text-brand-dark justify-between">
                                    <div className="flex">
                                        <li>
                                            <Link to="/impact"
                                                className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                                Overview
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/"
                                                className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                                Subverticals
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 24 24" className=" ml-[7px] mt-[4px]">
                                                    <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </div>
                                </ul>
                            </nav>
                            <Link to="/" className="btn-primary py-2 px-6 mb-2">
                                Contact us
                            </Link>
                        </div>
                    </div>
                </header>

                {/* <!-- Mobile Nav Menu --> */}
                {isMenuOpen && (
                    <div id="secondary-mobile-menu"
                        className="xl:hidden  absolute left-0 shadow-lg w-full h-fit bg-white z-40 pb-8 px-6 space-y-2 text-[20px] text-brand-dark font-bold">
                        <nav className="">
                            <Link to="/impact"
                                className="flex py-2 mt-3 text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                                Overview
                            </Link>
                            <Link to="/" className="flex py-2 mt-3 text-base justify-between font-semibold hover:text-brand-light">
                                Subverticals
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className="md:mt-1 ">
                                    <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                </svg>
                            </Link>
                            <div className="pt-8 w-full flex justify-center">
                                <Link to="/" className="btn-primary md:w-full text-center">
                                    Contact us
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* <!-- Banner --> */}
            <section>
                <div className="bg-brand-dark h-[105px] md:h-[81px] lg:h-12 md:px-8 py-4 px-6 flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-[17px]">
                    <p className="text-white font-bold text-base mb-1 lg:mb-2 lg:mt-1 lg:tracking-[0.008em] xl:tracking-[0.01em] ">
                        Join us at Dreamforce in San Francisco, October 14-16.
                    </p>
                    <Link to="/" className="text-white text-[15px] font-[646] underline lg:mb-1 xl:text-[17px]">
                        Register now
                    </Link>
                </div>
            </section>
        </>
    )
}

export default SecondryHeader
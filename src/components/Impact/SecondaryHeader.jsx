import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function SecondaryHeader() {
    const secondaryHeaderRef = useRef(null);
    const secondaryDeskNavRef = useRef(null);
    const icon2Ref = useRef(null); // optional, if used

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


    const downarrow = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23032d60%22%20d%3D%22M7.41%208.59L12%2013.17l4.59-4.58L18%2010l-6%206l-6-6z%22/%3E%3C/svg%3E";
    const uparrow = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZmlsbD0iIzAzMmQ2MCIgZD0iTTEwNC43MDQgNjg1LjI0OGE2NCA2NCAwIDAgMCA5MC40OTYgMGwzMTYuOC0zMTYuOGwzMTYuOCAzMTYuOGE2NCA2NCAwIDAgMCA5MC40OTYtOTAuNDk2TDU1Ny4yNDggMjMyLjcwNGE2NCA2NCAwIDAgMC05MC40OTYgMEwxMDQuNzA0IDU5NC43NTJhNjQgNjQgMCAwIDAgMCA5MC40OTYiLz48L3N2Zz4=";


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    return (
        <div>
            {/* <!-- Header-2  --> */}
            <header id="secondary-header" ref={secondaryHeaderRef} className="mt-[56px] xl:mt-[72px] transition-all duration-300 z-40 w-full bg-white shadow-md xl1440:shadow-none
                                        xl:py-2 xl:sticky">
                <div className="flex xl:hidden justify-between items-center px-6 py-1 max-w-screen-xl mx-auto">
                    <div className="flex">
                        <Link id="logo-2" to="/" className="hidden mr-4 md:ml-2">
                            <img src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-no-type-logo.svg"
                                className="w-[45px] h-[31.3px] " alt="Salesforce Logo" />
                        </Link>
                        <Link to="/impact" className="text-[18px] py-1 pr-1 font-semibold tracking-tight text-brand-dark">
                            Our Impact
                        </Link>
                    </div>
                    <div className="flex size-10 mr-[-12px] mt-2">
                        <button id="secondary-menu-btn" onClick={toggleMenu}>
                            <img id="icon-1"
                                src={!isMenuOpen ? downarrow : uparrow}
                                alt="salesimage" />
                        </button>
                    </div>
                </div>

                {/* <!-- Desktop Menu  --> */}
                <header id="second-desk-nav" ref={secondaryDeskNavRef}   className="hidden xl:flex py-1">
                    <div className="flex px-10 w-full">
                        <div className="flex items-center">
                            <Link to="/impact" id="impact"
                                className="text-[29px] font-medium whitespace-nowrap tracking-tighter text-brand-dark">
                                Our Impact
                            </Link>
                        </div>
                        <div className="flex justify-between w-full pl-10 mt-[7px]">
                            <nav>
                                <ul className="flex items-center text-brand-dark">
                                    <li>
                                        <Link to="/impact"
                                            className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                            Overview
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="flex px-4 py-2items-center font-semibold hover:text-brand-light">
                                            People
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                className=" ml-[7px] mt-[4px]">
                                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                            Planet
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                className=" ml-[7px] mt-[4px]">
                                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                            Communities
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                className=" ml-[7px] mt-[4px]">
                                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                            Technology
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                className=" ml-[7px] mt-[4px]">
                                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                            Goverance
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                className=" ml-[7px] mt-[4px]">
                                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* <!-- Mobile Nav Menu --> */}
                {isMenuOpen && (
                <div id="secondary-mobile-menu"
                    className="xl:hidden absolute left-0 shadow-lg w-full h-fit bg-white z-40 pb-12  px-6 pr-4 space-y-2 text-[20px] text-brand-dark font-bold">
                    <nav className="">
                        <Link to="/impact"
                            className="flex py-2 mt-3 text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                            Overview
                        </Link>
                        <Link to="/"
                            className="flex py-2 mt-3 text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                            People
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                                className="md:mt-1 mr-[12px]">
                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                            </svg>
                        </Link>
                        <Link to="/"
                            className="flex py-2 mt-3  text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                            Planet
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                                className="md:mt-1 mr-[12px]">
                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                            </svg>
                        </Link>
                        <Link to="/"
                            className="flex py-2 mt-3  text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                            Communities
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                                className="md:mt-1 mr-[12px]">
                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                            </svg>
                        </Link>
                        <Link to="/"
                            className="flex py-2 mt-3  text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                            Technology
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                                className="md:mt-1 mr-[12px]">
                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                            </svg>
                        </Link>
                        <Link to="/"
                            className="flex py-2 mt-3  text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                            Goverance
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                                className="md:mt-1 mr-[12px]">
                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                            </svg>
                        </Link>
                    </nav>
                </div>
                )}
            </header>
        </div>
    )
}

export default SecondaryHeader
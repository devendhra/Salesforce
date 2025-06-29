import { useState } from 'react'
import { Link } from 'react-router-dom'

function SecondaryHeader() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };
    const downarrow = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23032d60%22%20d%3D%22M7.41%208.59L12%2013.17l4.59-4.58L18%2010l-6%206l-6-6z%22/%3E%3C/svg%3E";
    const uparrow = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZmlsbD0iIzAzMmQ2MCIgZD0iTTEwNC43MDQgNjg1LjI0OGE2NCA2NCAwIDAgMCA5MC40OTYgMGwzMTYuOC0zMTYuOGwzMTYuOCAzMTYuOGE2NCA2NCAwIDAgMCA5MC40OTYtOTAuNDk2TDU1Ny4yNDggMjMyLjcwNGE2NCA2NCAwIDAgMC05MC40OTYgMEwxMDQuNzA0IDU5NC43NTJhNjQgNjQgMCAwIDAgMCA5MC40OTYiLz48L3N2Zz4=";


    return (
        <div>
            <header id="secondary-header" className="mt-[56px] xl:mt-[72px] transition-all duration-300 z-40 w-full bg-white 
                                        xl:py-2 xl:sticky">
                <div className="flex xl:hidden justify-between items-center px-6 py-1 max-w-screen-xl mx-auto">
                    <div className="flex">
                        <Link to="/support" className="text-[18px] py-1 pr-1 font-semibold tracking-tight text-brand-dark">
                            Customer Success
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
                <header id="second-desk-nav" className="hidden xl:flex py-1">
                    <div className="flex px-10 w-full">
                        <div className="flex items-center">
                            <Link to="/service"
                                className="text-[29px] font-medium whitespace-nowrap tracking-tighter text-brand-dark">
                                Customer Success
                            </Link>
                        </div>
                        <div className="flex justify-between w-full pl-10 mt-[7px]">
                            <nav>
                                <ul className="flex items-center text-brand-dark">
                                    <li>
                                        <Link to="/service"
                                            className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                            Overview
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/"
                                            className="flex px-4 py-2items-center font-semibold hover:text-brand-light">Solutions
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                className=" ml-[7px] mt-[4px]">
                                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="flex px-4 py-2 items-center font-semibold hover:text-brand-light">
                                            Pricing
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* <!-- Mobile Nav Menu --> */}
                <div id="secondary-mobile-menu"
                    className="xl:hidden hidden absolute left-0 shadow-lg w-full h-fit bg-white z-40 pb-12  px-6 pr-4 space-y-2 text-[20px] text-brand-dark font-bold">
                    <nav className="">
                        <Link to="/service"
                            className="flex py-2 mt-3 text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                            Overview
                        </Link>
                        <Link to="/"
                            className="flex py-2 mt-3 text-base justify-between md:justify-normal font-semibold hover:text-brand-light">Solutions
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                                className="md:mt-1 mr-[12px]">
                                <path fill="#032d60" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                            </svg>
                        </Link>
                        <Link to="/"
                            className="flex py-2 mt-3 pb-[5px] text-base justify-between md:justify-normal font-semibold hover:text-brand-light">
                            Pricing
                        </Link>
                    </nav>
                </div>
            </header>
            {/* <!-- Banner  --> */}
            <section id="banner">
                <div className="bg-brand-dark h-[129px] xs402:h-[105px] md:px-8 py-4 px-6 flex flex-col 
                       lg:h-12 lg:flex-row lg:justify-center lg:items-center lg:space-x-[17px]">
                    <p className="flex items-center md:tracking-[0.01em] text-white xl1440:text-[17px] xl1440:tracking-[-0.01em] font-bold text-base mb-1 lg:mb-2 lg:mt-[5px]">
                        See how Salesforce used data-driven design to reimagine the Help experience on Agentforce.
                    </p>
                    <Link to="/" className="text-white text-sm xl1440:text-base font-[646] underline lg:mb-1">
                        Register now.
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default SecondaryHeader
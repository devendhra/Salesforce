import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const hamburgerURL = "https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#hamburger-blue";
    const closeURL = "https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#close-blue";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };
    return (
        <div>
            {/* <!-- navbar --> */}
            <header id="main-header" className="fixed top-0 left-0 w-full z-50 bg-white  border-b  
            xl:flex xl:h-[72px] xl:items-center">
                <div className="flex items-center justify-between text-brand-dark h-14 px-[23px] md:px-8 xl:px-0 xl:mx-10 xl:mr-5">
                    <div className="flex items-center gap-6 xl:hidden ">
                        {/* <!-- Mobile Menu Button --> */}
                        <button id="menu-btn" className="xl:hidden size-[18px]" onClick={toggleMenu}>
                            <img id='menu-icon' src={isMenuOpen ? closeURL : hamburgerURL}
                                alt="Menu icon" />
                        </button>
                        {/* <!-- Logo --> */}
                        <Link to="/">
                            <img src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-no-type-logo.svg"
                                className="w-[45px] h-[31.3px]" alt="Salesforce Logo" />
                        </Link>
                    </div>
                    <div className="flex items-center xl:hidden  space-x-4">
                        <Link to="/" className="hover:bg-sky-100 hover:text-blue-700 rounded-full py-2 md:pr-1">
                            <img src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#search-blue"
                                className="size-[18px]" alt="salesforce"/>
                        </Link>
                        <Link to="/"
                            className="flex justify-center items-center mr-2 gap-1 px-3 py-2 md:pr-6 hover:bg-sky-100 hover:text-blue-700 rounded-3xl">
                            <img src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#user-blue"
                                className="h-[18px] w-[18px] font-bold" alt="salesforce"/>
                        </Link>
                        <button
                            className="bg-[#2E844A] text-white text-[14px] rounded-[4px] tracking-wide hover:bg-[#080707] font-semibold px-[14px] py-[3px]">
                            Try for free
                        </button>
                    </div>

                    {/* <!-- Desktop nav bar --> */}
                    <div className="hidden xl:flex justify-center items-center">
                        <Link to="/">
                            <img src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg"
                                className="w-[45.33px] h-[32.01px] mb-1" alt="salesforce"/>
                        </Link>
                        <nav className="font-[645] ml-6">
                            <Link to="/products" className="px-4 hover:text-brand-light">Products</Link>
                            <Link to="/industries" className="px-4 hover:text-brand-light">Industries</Link>
                            <Link to="/" className="px-4 hover:text-brand-light">Customers</Link>
                            <Link to="/" className="px-4 hover:text-brand-light">Learning</Link>
                            <Link to="/support" className="px-4 hover:text-brand-light">Support</Link>
                            <Link to="/impact" className="px-4 hover:text-brand-light">Company</Link>
                            <Link to="/" className="px-4 hover:text-brand-light">Salesforce+</Link>
                        </nav>
                    </div>
                    <div className="hidden xl:flex ml-[185px] items-center">
                        <div className="flex items-center flex-col mx-4">
                            <Link to="/" className="font-normal text-[15px] underline hover:text-blue-600">Contact Us</Link>
                            <p>1800-420-7332</p>
                        </div>
                        <Link to="/" className="hover:bg-sky-100 hover:text-blue-700 rounded-full px-3 py-2"><img
                            src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#search-blue"
                            className="h-[18px] w-[18px]" alt="salesforce"/></Link>
                        <Link to="/" className="px-3 py-2 hover:bg-sky-100 hover:text-blue-700 rounded-full"><img
                            src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#globe-blue"
                            className="h-[18px] w-[18px]" alt="salesforce"/></Link>
                        <Link to="Login.html"
                            className="flex justify-center items-center gap-1 px-3 py-2 hover:bg-sky-100 hover:text-blue-700 rounded-3xl">
                            <img src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#user-blue"
                                className="h-[18px] w-[18px]" alt="salesforce"/>
                            <span className="font-[600]">Login</span>
                        </Link>
                        <Link to="/">
                            <button
                                className="bg-[#2E844A] text-white rounded-[4px] hover:bg-[#080707] tracking-wide font-[600] ml-4 px-[26px] py-[10px]">
                                Try for free
                            </button>
                        </Link>
                    </div>
                </div>

                {/* <!-- Mobile Nav Menu --> */}
                {isMenuOpen && (
                <div id="mobile-menu"
                    className="xl:hidden fixed left-0 w-full h-[calc(100vh-56px)] overflow-y-auto bg-white z-40 pb-7  px-6 pr-4 pt-2 mb-4 space-y-2 text-[25px] text-brand-dark font-bold">
                    <nav>
                        <Link to="/products" className="flex py-[7px] justify-between hover:text-brand-light">Products
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                        <Link to="/industries" className="flex py-[7px] justify-between hover:text-brand-light">Industries
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                        <Link to="/" className="flex py-[7px] justify-between hover:text-brand-light">Customers
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                        <Link to="/" className="flex py-[7px] justify-between hover:text-brand-light">Learning
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                        <Link to="/support" className="flex py-[7px] justify-between hover:text-brand-light">Support
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                        <Link to="/impact" className="flex py-[7px] justify-between hover:text-brand-light">Company
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                        <Link to="/" className="flex py-[7px] justify-between hover:text-brand-light">Salesforce+
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                    </nav>
                    <div className="pt-7">
                        <Link to="/login" className="flex items-center justify-between py-[6px]">
                            <div className="flex">
                                <img src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#user-blue"
                                    className="h-[20px] w-[24px] px-1 mt-[3px] mr-2" alt="salesforce"/>
                                <span className=" text-[16px] text-brand-dark font-bold">Login</span>
                            </div>
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                        <Link to="/" className="flex items-center justify-between py-[6px]">
                            <div className="flex">
                                <img src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#phone-blue"
                                    className="h-[20px] w-[24px] px-1 mt-[3px] mr-2" alt="salesforce"/>
                                <span className=" text-[16px] text-brand-dark font-bold">Contact</span>
                            </div>
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                        <Link to="/" className="flex items-center justify-between py-[6px]">
                            <div className="flex">
                                <img src="https://a.sfdcstatic.com/shared/images/c360-nav/icons.svg#globe-blue"
                                    className="h-[20px] w-[24px] px-1 mt-[3px] mr-2" alt="salesforce"/>
                                <span className=" text-[16px] text-brand-dark font-bold">Change Region</span>
                            </div>
                            <img src="assets/images/icons/arro-icon.svg" alt="arrow" className="size-9" />
                        </Link>
                    </div>
                    <p className="flex justify-center items-center text-base py-2">1-800-664-9073</p>
                </div>
                )}
            </header>

        </div>
    )
}

export default Navbar2
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
             {/* <!-- Footer  --> */}
            <footer className="flex flex-col">
                <div className="hidden lg:flex px-4 mx-[10px] xl1440:mx-12 xl1440:w-[1344px] xl1440:h-[503px] 2xl:mx-auto">
                    <div className="flex gap-[76px] xl1440:gap-[163px]">
                        <div id="coloumn-1">
                            <div>
                                <img src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg" alt="salesforce"
                                    className="w-[92px] h-[64px] mt-[70px] mb-[50px]" />
                            </div>
                            <div className="flex mb-6">
                                <Link to="/" className=" mr-4">
                                    <img src="https://i.postimg.cc/W3Fph0hC/Untitled-design-1.png" alt="salesforce"
                                        className="size-[28px]" />
                                </Link>
                                <Link to="/" className="mr-4">
                                    <img src="https://i.postimg.cc/fbjpZ6Jq/X-icon.png" alt="salesforce"
                                        className="size-[28px] rounded-md" />
                                </Link>
                                <Link to="/" className="mr-4">
                                    <img src="https://i.postimg.cc/Zq5stjy6/linked-icon.png" alt="salesforce"
                                        className="size-[28px]" />
                                </Link>
                                <Link to="/" className="mr-4">
                                    <img src="https://i.postimg.cc/sX3PS23y/dark-insta-icon.jpg" alt="salesforce"
                                        className="size-[28px] rounded-md" />
                                </Link>
                                <Link to="/" className="mr-4">
                                    <img src="https://i.postimg.cc/RVDsww3R/youtube-icon.jpg" alt="salesforce"
                                        className="size-[28px] rounded-md" />
                                </Link>
                            </div>
                            <div>
                                <p className="text-sm text-[#444444] my-[14px] font-semibold">Call us at 1800-420-7332</p>
                            </div>
                        </div>
                        <div id="column-2">
                            <h3 className="text-sm text-[#444444] mt-[65px] mb-[30px] font-bold">New to Salesforce?</h3>
                            <ul className="mt-4 mb-[55px]">
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">Why Salesforce</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">What is CRM?</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">Explore All Products</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">SaaS</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">Customer Success</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">Product Pricing</Link>
                                </li>
                            </ul>
                        </div>
                        <div id="column-3">
                            <h3 className="text-sm text-[#444444] mt-[65px] mb-[30px] font-bold">About Salesforce</h3>
                            <ul className="mt-4 mb-[55px]">
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">Our Story</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">Careers</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Press</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Blog</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Security and Performance</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span >Salesforce.org</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Best CRM Software</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Sustainability</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Legal</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">Give us your Feedback</Link>
                                </li>
                            </ul>
                        </div>
                        <div id="column-4">
                            <h3 className="text-sm text-[#444444] mt-[65px] mb-[30px] font-bold">Popular Links</h3>
                            <ul className="mt-4 mb-[55px]">
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>New Release Features</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">Salesforce Mobile App</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Business App Store</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Dreamforce</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer">CRM Software</Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Salesforce Plus</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                                <li className="pb-[10px]">
                                    <Link to="/" className="text-[13px] text-brand-footer flex items-center space-x-2"><span>Salesforce for startups</span>
                                        <div className="size-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path fill="none" stroke="#215CA0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" /></svg>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- footer End  --> */}
                <div className="pb-[20px] bg-[#032E61]">
                    <div className="flex flex-col justify-center px-8
                        md:flex-row md:items-start md:px-4 lg:mx-[10px] xl1440:mx-12 xl1440:ml-[90px]">
                        <div className="flex items-center justify-center ">
                            {/* <!-- Wordwide --> */}
                            <div className="flex flex-row justify-center h-[54px] items-center py-2 px-4 
                                xs402:ml-5 xs402:px-6 xs402:py-[11px] md:ml-0 md:h-[60px]">
                                <Link to="/" className="text-white md:hidden size-4 md:size-6 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><path fill="currentColor" d="M21.41 8.64v-.05a10 10 0 0 0-18.78 0s0 0 0 .05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0s0 0 0-.05a9.86 9.86 0 0 0 0-6.72M4.26 14a7.8 7.8 0 0 1 0-4h1.86a16.7 16.7 0 0 0 0 4Zm.82 2h1.4a12 12 0 0 0 1 2.57A8 8 0 0 1 5.08 16m1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12 12 0 0 0 6.48 8M11 19.7A6.34 6.34 0 0 1 8.57 16H11Zm0-5.7H8.14a14.4 14.4 0 0 1 0-4H11Zm0-6H8.57A6.34 6.34 0 0 1 11 4.3Zm7.92 0h-1.4a12 12 0 0 0-1-2.57A8 8 0 0 1 18.92 8M13 4.3A6.34 6.34 0 0 1 15.43 8H13Zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7m2.86-5.7H13v-4h2.86a14.4 14.4 0 0 1 0 4m.69 4.57a12 12 0 0 0 1-2.57h1.4a8 8 0 0 1-2.4 2.57M19.74 14h-1.86a16 16 0 0 0 .12-2a16 16 0 0 0-.12-2h1.86a7.8 7.8 0 0 1 0 4" /></svg>
                                </Link>
                                <Link to="/" className="hidden text-white md:block size-4 md:size-6 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.41 8.64v-.05a10 10 0 0 0-18.78 0s0 0 0 .05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0s0 0 0-.05a9.86 9.86 0 0 0 0-6.72M4.26 14a7.8 7.8 0 0 1 0-4h1.86a16.7 16.7 0 0 0 0 4Zm.82 2h1.4a12 12 0 0 0 1 2.57A8 8 0 0 1 5.08 16m1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12 12 0 0 0 6.48 8M11 19.7A6.34 6.34 0 0 1 8.57 16H11Zm0-5.7H8.14a14.4 14.4 0 0 1 0-4H11Zm0-6H8.57A6.34 6.34 0 0 1 11 4.3Zm7.92 0h-1.4a12 12 0 0 0-1-2.57A8 8 0 0 1 18.92 8M13 4.3A6.34 6.34 0 0 1 15.43 8H13Zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7m2.86-5.7H13v-4h2.86a14.4 14.4 0 0 1 0 4m.69 4.57a12 12 0 0 0 1-2.57h1.4a8 8 0 0 1-2.4 2.57M19.74 14h-1.86a16 16 0 0 0 .12-2a16 16 0 0 0-.12-2h1.86a7.8 7.8 0 0 1 0 4" /></svg>
                                </Link>
                                <p className="text-[15px] mx-2 text-white font-semibold 
                                md:text-[16.2px]">Worldwide</p>
                                <div className="size-4 text-white">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtNSAxMGw3IDdsNy03Ii8+PC9zdmc+" alt="salesforce" />
                                </div>
                            </div>
                        </div>
                        <div className="container md:pl-5 md:pr-[75px] lg:h-[98px] xl1440:h-[74px] xl1440:pl-[20px] xl1440:pr-0 ">
                            <nav className="mt-[40px] md:mt-[15px] xl1440:inline-block xl1440:mt-[18px]">
                                <ul className="pb-[7px] flex flex-wrap gap-y-[5px] leading-normal xl1440:pb-[4px]">
                                    <li className="mr-[20px] text-white text-[12.5px] underline w-fit"><Link to="/">Legal</Link></li>
                                    <li className="mr-[20px]  text-white text-[12.5px] underline w-fit"><Link to="/">Terms of Service</Link></li>
                                    <li className="mr-[20px] text-white text-[12.5px] underline w-fit"><Link to="/">Privacy</Link></li>
                                    <li className="mr-[20px] text-white text-[12.5px] underline w-fit"><Link to="/">Responsible Disclosure</Link></li>
                                    <li className="mr-[20px] text-white text-[12.5px] underline w-fit"><Link to="/">Trust</Link></li>
                                    <li className="mr-[20px] text-white text-[12.5px] underline w-fit"><Link to="/">Contact</Link></li>
                                    <li className="mr-[20px] text-white text-[12.5px] underline w-fit"><Link to="/">Cookie Preferences</Link></li>
                                    <li className="mr-[20px] w-fit flex items-end">
                                        <Link to="#" className="text-white text-xs underline flex items-end">
                                            <img src="/assets/images/icons/privacyoptions.svg"
                                                className="w-[30px] h-[15px] mr-[5px]" alt="salesforce"/>Your Privacy Choices</Link>
                                    </li>
                                </ul>
                            </nav>
                            <p className="mt-[10px] mb-[24px] text-[12.5px] text-white xl1440:mb-5 xl1440:mt-[14px]
                            md:mb-0">© Copyright 2025 Salesforce, Inc. <Link to="/company/legal/intellectual/" className="underline">All rights reserved</Link>
                                . Various trademarks held by their respective owners.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
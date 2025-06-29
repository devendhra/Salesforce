import React from 'react'
import { Link } from 'react-router-dom'

function Ourfeatures() {
    return (
        <div>
            {/* <!-- Our Features --> */}
            <section id="Our Features">
                <div className="flex justify-center pt-12 md:py-16">
                    <div className="flex flex-col gap-6 mx-6 md:mx-8 lg:mx-12 lg:gap-8 justify-center items-center
                        xl1440:mx-auto xl1440:gap-16 xl1440:w-[1280px] xl1440:h-[435px]">
                        <div className="flex justify-center items-center">
                            <h2 className="text-[32px] text-brand-dark  text-center font-bold leading-tight
                               md:w-[582px] md:h-[80px] md:text-[37px] lg:w-[608px] lg:h-[40px] lg:text-[32px] xl1440:text-[40px] xl1440:w-[840px] xl1440:h-[48px]">
                                How can we help grow your<br className="hidden md:flex lg:hidden" /> business?
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 md:mt-10 md:gap-x-[27px] 
                            lg:mt-8 xl1440:gap-x-16 xl1440:mt-0">
                            <div className="mb-12 lg:mb-0">
                                <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-small-business-in.jpg?w=1024" alt="Salesforce"
                                    className="size-[327px] mb-6 xs402:size-[377px] md:size-[275.34px] lg:size-[196px] xl1440:size-[272px]" />
                                    <Link to="/" className="text-[17px] text-brand-dark underline  font-semibold flex justify-center items-center 
                                    md:justify-start hover:no-underline hover:text-brand-light ">
                                        Sell faster
                                    </Link>
                            </div>
                            <div className="mb-12 lg:mb-0">
                                <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-sales-in.jpg?w=1024" alt="Salesforce"
                                    className="size-[327px] mb-6 xs402:size-[377px] md:size-[275.34px] lg:size-[196px] xl1440:size-[272px]" />
                                    <Link to="/" className="text-[17px] text-brand-dark underline  font-semibold flex justify-center items-center 
                                        md:justify-start hover:no-underline hover:text-brand-light ">
                                        Close more deals
                                    </Link>
                            </div>
                            <div className="mb-12 md:mb-0 lg:mb-0">
                                <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/04/php-products-service-in.jpg?w=1024" alt="Salesforce"
                                    className="size-[327px] mb-6 xs402:size-[377px] md:size-[275.34px] lg:size-[196px] xl1440:size-[272px]" />
                                    <Link to="/" className="text-[17px] text-brand-dark underline  font-semibold flex justify-center items-center
                                        md:justify-start hover:no-underline hover:text-brand-light ">
                                        Scale service
                                    </Link>
                            </div>
                            <div className="mb-12 md:mb-0 lg:mb-0">
                                <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/php-products-marketing.jpg?w=1024" alt="Salesforce"
                                    className="size-[327px] mb-6 xs402:size-[377px] md:size-[275.34px] lg:size-[196px] xl1440:size-[272px]" />
                                    <Link to="/" className="text-[17px] text-brand-dark underline  font-semibold flex justify-center items-center
                                         md:justify-start hover:no-underline hover:text-brand-light ">
                                        Build customer relationships</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ourfeatures
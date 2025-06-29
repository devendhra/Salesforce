import React from 'react'

function Products() {
    return (
        <div>
            {/* <!-- Products --> */}
            <section id="Products"
                className="relative w-full overflow-hidden h-[2100px] xs402:h-[2212px] md:h-[1320px] lg:h-[788px] xl1440:h-[995px] ">
                <div className="relative w-full xl1440:max-w-[1440px] xl1440:mx-auto z-10 ">
                    <div
                        className="flex flex-col pt-4 pb-12 mx-6 gap-6 md:pt-6 md:pb-16 md:mx-8 lg:mx-12 xl1440:gap-10 xl1440:mx-20 xl1440:pt-14">
                        {/* <!-- Section header  --> */}
                        <header className="flex justify-center items-center">
                            <span className="text-[34px] text-brand-dark font-bold text-center leading-tight xl1440:text-[40px]">
                                Learn what <br className="xs402:hidden"/>Salesforce products can do for<br
                                    className="hidden xl1440:block"/> you.
                                </span>
                                </header>
                                {/* <!-- Products card grids  --> */}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 md:mt-10 md:gap-6 lg:grid-cols-4 lg:mt-8 lg:gap-8 xl1440:mt-6 xl1440:gap-10">

                                    {/* <!-- Card 1 --> */}
                                    <article
                                        className="bg-white rounded-2xl h-fit overflow-hidden shadow-xl mb-4 mt-[18px] md:mb-0 md:mt-0">
                                        <div>
                                            <img
                                                src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-1.jpg?w=873" alt="productsvg" />
                                        </div>
                                        <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[23px] xl1440:gap-7">
                                            <div className="m-8 mt-[51px] lg:m-6 xl1440:m-8">
                                                <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">Small Business</h3>
                                                <p className="text-[#181717] text-base mt-4 lg:text-sm xl1440:text-base">
                                                    Sales, service, and email outreach tools in a single app.
                                                </p>
                                            </div>
                                            <div className="mx-8 mb-10 lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                                <button className="font-medium underline ">Learn more</button>
                                            </div>
                                        </div>
                                    </article>

                                    {/* <!-- Card 2 --> */}
                                    <article className="bg-white rounded-2xl h-fit overflow-hidden shadow-xl mb-4 md:mb-0">
                                        <div>
                                            <img
                                                src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-2.jpg?resize=768,433" alt="product svg"/>
                                        </div>
                                        <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[23px] xl1440:gap-[35px]">
                                            <div className="m-8 mt-[51px] lg:m-6 xl1440:m-8">
                                                <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">Sales Cloud</h3>
                                                <p className="text-[#181717] text-base mt-4 lg:text-sm l1440:text-base">
                                                    Close more deals and speed up growth with the #1 CRM.
                                                </p>
                                            </div>
                                            <div className="mx-8 mb-10  lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                                <button className="font-medium underline">Learn more</button>
                                            </div>
                                        </div>
                                    </article>

                                    {/* <!-- Card 3 --> */}
                                    <article className="bg-white rounded-2xl h-fit overflow-hidden shadow-xl mb-4 md:mb-0">
                                        <div>
                                            <img
                                                src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-3.jpg?resize=768,433" alt="product svg"/>
                                        </div>
                                        <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[23px] xl1440:gap-[35px]">
                                            <div className="m-8 mt-[51px] lg:m-6 xl1440:m-8">
                                                <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">Service Cloud</h3>
                                                <p className="text-[#181717] text-base mt-4 lg:text-sm l1440:text-base">
                                                    Make customers happy faster and build loyalty with Service Cloud.
                                                </p>
                                            </div>
                                            <div className="mx-8 mb-10  lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                                <button className="font-medium underline ">Learn more</button>
                                            </div>
                                        </div>
                                    </article>

                                    {/* <!-- Card 4 --> */}
                                    <article className="bg-white rounded-2xl h-fit overflow-hidden shadow-xl mb-6 md:mb-0">
                                        <div>
                                            <img
                                                src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-product-smb_icon-4.jpg?resize=768,433" alt="product svg"/>
                                        </div>
                                        <div className="text-brand-dark lg:flex lg:flex-col xl1440:gap-[35px]">
                                            <div className="m-8 mt-[51px] lg:m-6 xl1440:m-8">
                                                <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">Marketing Cloud</h3>
                                                <p className="text-[#181717] text-base mt-4 lg:text-sm l1440:text-base">
                                                    Build customer relationships for life with data-first digital marketing.
                                                </p>
                                            </div>
                                            <div className="mx-8 mb-10  lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                                <button className="font-medium underline ">Learn more</button>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="md:flex md:mt-10 md:items-center md:justify-center xl1440:mt-6">
                                    <button className="border-[1.6px] btn-secondary tracking-wide">View all our products</button>
                                </div>
                            </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full z-[-1] bg-gradient-to-b from-white via-[#edf4fa] to-white">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-products-bg.png?resize=2048,625"
                            alt="Background" className="w-full object-cover " />
                    </div>
            </section>

        </div>
    )
}

export default Products
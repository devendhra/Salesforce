import React from 'react'

function Hero() {
    return (
        <div>
            {/* <!-- hero --> */}
            <section id="hero" className="relative bg-gradient-to-b from-white via-white to-brand ">
                <div className="h-[1090px] xs402:h-[1113px] md:h-[1049px] lg:h-[778px] xl:h-[736px]">
                    <div className="py-12 md:py-16">
                        <article
                            className="flex flex-col justify-center items-center mx-6 gap-6 md:mx-8 lg:flex-row lg:gap-8 lg:mx-12 xl:justify-between xl:mx-20 xl1440:w-[1280px] xl1440:mx-auto">
                            <div className="md:w-[582px] lg:flex-1 xl:w-[620px] xl:flex-none">
                                <header className="mb-8 md:mb-12">
                                    <h1
                                        className="text-[40px] text-brand-dark font-bold leading-[1.18] tracking-[0.010em] md:text-[48px] lg:tracking-[0.020em] xl:text-[56px]">
                                        Activate Data Cloud in Your Account</h1>
                                    <div className="mt-4 md:mt-6">
                                        <ul>
                                            <li className="check-before">
                                                Log into the Salesforce Org where you’d like to provision Data Cloud
                                            </li>
                                            <li className="check-before">
                                                Click Browse & Buy to access the product catalog
                                            </li>
                                            <li className="check-before">
                                                Add “Data Cloud Provisioning” to your cart
                                            </li>
                                            <li className="check-before underline text-brand-light">
                                                Begin using Data Cloud with the guide to getting started!
                                            </li>
                                        </ul>
                                    </div>
                                </header>
                                <button className="btn-primary text-[17px]">Log into your account</button>
                            </div>
                            <div className="pt-6 md:pt-10 lg:flex lg:flex-1 lg:items-end lg:pt-0 xl:flex-none">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/09/products-features-data-out-of-the-box-connecters-v2.png?w=1024"
                                    alt="salesforce" className="md:size-[340px] lg:size-auto xl:size-[510px]" />
                            </div>
                        </article>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full">
                        <svg viewBox="0 0 1440 98" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <path d="M0 99C222.344 35.8084 466.507 0 720 0C974.953 0 1216.61 35.1147 1440 99H0Z" fill="white">
                            </path>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
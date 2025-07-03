import React from 'react'

function Reviews() {
    return (
        <div>
            {/* <!-- Reviews --> */}
            <article id="Reviews" className="relative h-[1409px] xs402:h-[1452px] md:h-[695px] lg:h-[777px] xl1440:h-[920px]">
                <div className="flex flex-col justify-center items-center pt-12 z-[10] md:pt-16">
                    <div className="flex flex-col justify-center items-center gap-6 mx-6 md:mx-8 lg:gap-8 
                    xl1440:w-[1280px] xl1440:h-[504px] xl1440:gap-16">
                        <div className="flex justify-center items-center">
                            <h2 className="text-[32px] text-brand-dark text-center font-bold leading-tight tracking-wide 
                        md:w-[582px] md:h-[120px] lg:w-[608px]
                        xl1440:w-[840px] xl1440:h-[96px] xl1440:text-[40px]">Our technology helps people create better jobs, lives, companies, and communities.
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 mt-6 md:grid-cols-3 md:mt-10 md:gap-6 lg:mt-8 xl1440:gap-16 xl1440:mt-0">
                            <div className="mb-12 md:mb-0">
                                <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/group-201168.png?w=1024" alt="salesforce"
                                    className="w-[327px] h-[218px] xs402:w-[377px] xs402:h-[251px] mb-6 
                            md:w-[218px] md:h-[145px] lg:w-[282px] lg:h-[188px] 
                            xl1440:w-[384px] xl1440:h-[256px]"/>
                                    <p className="text-lg tracking-wide md:text-sm 
                            lg:text-base lg:tracking-wider
                            xl1440:text-lg xl1440:w-[384px] xl1440:h-[28px]
                            xl1440:tracking-normal">
                                        Technology given for free or discounted
                                    </p>
                            </div>
                            <div className="mb-12 md:mb-0">
                                <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/group-201169.png?w=1024  " alt="salesforce"
                                    className="w-[327px] h-[218px] xs402:w-[377px] xs402:h-[251px]  mb-6
                            md:w-[218px] md:h-[145px] lg:w-[282px] lg:h-[188px] 
                            xl1440:w-[384px] xl1440:h-[256px]" />
                                    <p className="text-lg md:text-sm lg:text-base 
                            xl1440:text-lg xl1440:w-[384px] xl1440:h-[28px]">Fortune 100 Best Companies to Work For 2024 (16 years in a row)</p>
                            </div>
                            <div className="mb-12 md:mb-0">
                                <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/group-201170.png?w=1024" alt="salesforce"
                                    className="w-[327px] h-[218px] xs402:w-[377px] xs402:h-[251px]   mb-6
                            md:w-[218px] md:h-[145px] lg:w-[282px] lg:h-[188px] 
                                xl1440:w-[384px] xl1440:h-[256px]" />
                                    <p className="text-lg md:text-sm lg:text-base
                            xl1440:text-lg xl1440:w-[384px] xl1440:h-[28px]">Fortune World's Most Admired Companies 2024</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full ">
                            <div className="w-full">
                                <img
                                    src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-products-bg-2.png?w=1024"
                                    alt="Background"
                                    className="w-full object-contain"
                                    style={{clipPath: "ellipse(75% 100% at 50% 0%)"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Reviews
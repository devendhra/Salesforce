import React from 'react'

function Customers() {
    return (
        <div> 
            {/* <!-- Customers  --> */}
            <section id="Customers"
                className="relative overflow-hidden h-[508px] xs402:h-[468px] md:h-[592px] lg:h-[472px] xl:h-[564px]">
                <div className="py-12 md:py-16 z-10 relative">
                    <div className="flex flex-col items-center gap-6 mx-6 md:mx-8 md:gap-10 xl1440:mx-20">
                        <div
                            className="flex justify-center items-center md:w-[583px] lg:w-[628px] xl1440:w-[840px] xl1440:h-[96px]">
                            <h2 className="text-brand-dark text-[33px] text-center font-bold leading-tight  xl1440:text-[40px]">
                                Data-driven teams build meaningful customer relationships with Data Cloud.
                            </h2>
                        </div>
                        <div
                            className="grid grid-cols-2 w-[327px] h-[164px] mx-auto md:size-auto gap-4  place-items-center place-content-center lg:grid-cols-4">
                            <div
                                className="flex justify-center items-center bg-white ml-[13px] w-[144px] h-[74px] md:w-[200px] md:h-[100px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg md:ml-0">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/08/formula-1-logo.png?w=136"
                                    className="w-[104px] h-[57px] md:w-[136px] md:h-[76px]" alt="salesforce"/>
                            </div>
                            <div
                                className="bg-white w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg md:ml-0">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/08/general-mills-logo.png?w=136"
                                    className="w-[104px] h-auto md:w-[136px] " alt="salesforce"/>
                            </div>
                            <div
                                className="bg-white ml-[13px] w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg md:ml-0">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/10/sj-child-graphic-136x76-1.png?w=136"
                                    className="w-[104px] h-auto md:w-[136px] " alt="salesforce"/>
                            </div>
                            <div
                                className="bg-white w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg md:ml-0">
                                <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/08/santander-logo.png?w=136"
                                    className="w-[104px] h-auto md:w-[136px] " alt="salesforce"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full overflow-hidden z-0">
                    <div className="w-full">
                        <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/09/logo-background.png?w=1024"
                            alt="curved background" className="w-full object-contain" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Customers
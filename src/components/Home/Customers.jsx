import React from 'react'

function Customers() {
  return (
    <div>
         {/* <!-- Customers --> */}
    <section id="Customers" className="relative overflow-hidden h-[900px] xs402:h-[800px]
                         md:h-[830px] lg:h-[750px] xl1440:h-[850px] bg-gradient-to-b from-white via-[#e6f0f9] to-white">
        <div className="py-12 md:py-16 z-10 relative">
            <div className="flex flex-col items-center gap-8 mx-6 md:mx-8 md:gap-12 xl1440:mx-20">
                <div className="flex justify-center items-center md:w-[583px] md:h-[120px] xl1440:w-[840px] xl1440:h-[144px]">
                    <h2 className="text-brand-dark text-[32px] text-center font-bold leading-tight mb-12 md:mb-32 xl1440:text-[40px]">
                        Over 150,000 <br className="hidden xs402:block sm:hidden" />
                        companies, both big and small, are growing their business with Salesforce.
                    </h2>
                </div>
                <div className="w-full md:w-fit">
                    <button className="md:text-[17px] btn-secondary">
                        View all customers
                    </button>
                </div>
                <div className="grid grid-cols-2 w-[327px] h-[344px] mx-auto mt-4 md:size-auto gap-4 md:grid-cols-3 place-items-center place-content-center lg:grid-cols-4 xl1440:grid-cols-6">
                    <div className="flex justify-center items-center bg-white ml-[13px] w-[144px] h-[74px] md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-balaji.png?resize=300,108"
                            className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                    </div>
                    <div className="bg-white w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-flame.png?w=450"
                            className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                    </div>
                    <div className="bg-white ml-[13px] w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-genpact.png?w=450"
                            className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                    </div>
                    <div className="bg-white w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-godrejboyce.png?w=450"
                            className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                    </div>
                    <div className="bg-white ml-[13px] w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-mahindra.png?w=450"
                            className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                    </div>
                    <div className="bg-white  w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-pepe.png?w=450"
                            className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                    </div>
                    <div className="lg:hidden col-span-2 md:col-span-3 flex justify-center gap-4">
                        <div className="bg-white ml-[13px] w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                            <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-razorpay.png?w=450"
                                className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                        </div>
                        <div className="bg-white  w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                            <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-secutech.png?w=450"
                                className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                        </div>
                    </div>
                    <div className="bg-white  ml-[13px] w-[144px] h-[74px] hidden lg:flex xl1440:hidden justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-razorpay.png?w=450"
                            className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                    </div>
                    <div className="bg-white  w-[144px] h-[74px] hidden lg:flex xl1440:hidden justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                        <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-secutech.png?w=450"
                            className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                    </div>
                    <div className="hidden col-span-2  xl1440:flex xl1440:col-span-6 justify-center gap-4">
                        <div className="bg-white ml-[13px] w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                            <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-razorpay.png?w=450"
                                className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                        </div>
                        <div className="bg-white  w-[144px] h-[74px] flex justify-center items-center md:w-[200px] md:h-[100px] shadow-xl rounded-lg md:ml-0">
                            <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/in-hp-min-logo-secutech.png?w=450"
                                className="w-[104px] h-[37px] md:w-[136px] md:h-[48.5px]" alt="salesforce"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-[18px] w-full overflow-hidden z-0
            xs402:bottom-[0px]">
            <div className="w-full">
                <img
                src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/03/pb-hp-logos-bg-2.png?resize=2048,414"
                alt="curved background"
                className="w-full object-contain"
                style={{clipPath: "ellipse(75% 100% at 50% 0%)"}}
                />
            </div>
        </div>          
    </section>
    </div>
  )
}

export default Customers
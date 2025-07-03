import React from 'react'

function Trust() {
    return (
        <div>
            {/* <!-- Trust --> */}
            <article id="Trust" className="flex flex-col py-12 mx-6 md:py-16 md:mx-8 md:gap-6 lg:py-16 lg:mx-12 lg:gap-8 xl1440:py-16 xl1440:mx-20 ">
                <div className="flex flex-col justify-center items-center lg:gap-3">
                    <header className="flex justify-center items-center">
                        <h1 className="text-[40px] leading-[45px] text-brand-dark font-bold text-center flex justify-center items-center mb-6 md:max-w-[582px]
                           xl1440:text-5xl xl1440:max-w-[840px] lg:max-w-[608px] xl1440:leading-tight">
                            We bring companies and customers together
                        </h1>
                    </header>
                    <div className="mb-6 md:max-w-[470px] lg:max-w-[496px] xl1440:max-w-[728px]">
                        <p className="text-[18px] text-[#181818] text-center">
                            Salesforce is the world’s most trusted customer relationship management (CRM) platform.
                            We help your marketing, sales, commerce, service and IT teams work as one from anywhere —
                            so you can keep your customers happy everywhere.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start md:justify-center gap-4 md:gap-6 items-center md:flex-row">
                    <button className="btn-primary">
                        Start free trail
                    </button>
                    <button className="btn-secondary">
                        Watch demos
                    </button>
                </div>
            </article>
        </div>
    )
}

export default Trust
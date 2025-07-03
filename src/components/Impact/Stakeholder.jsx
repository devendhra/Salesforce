
const Stakeholder = () => {
    return (
        <section id="stakeholder">
            <div className="py-12 md:py-16">
                <div className="mx-6 md:w-[582px] lg:w-[608px] xl1440:w-[840px] md:flex md:flex-col md:items-center md:justify-center md:mx-auto">

                    <header>
                        <h2 className="text-[40px] xl1440:text-[48px] text-brand-dark font-bold text-center leading-tight">
                            What is the Stakeholder Impact Report?
                        </h2>
                    </header>

                    <div className="mt-4 md:w-[470px] lg:w-[496px] xl1440:w-[728px] md:mt-6">
                        <p className="text-[19px] leading-[1.50] text-center">
                            Every year, Salesforce publishes a comprehensive report that highlights how we're driving impact
                            across the business. The Stakeholder Impact Report helps our stakeholders stay informed and
                            track our progress on key initiatives.
                            We are guided by our core values and strive to provide transparent and inclusive environmental,
                            social, and governance (ESG) disclosures.{" "}
                            <a
                                href="https://www.salesforce.com/company/esg-and-impact/reports-policies/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-light underline"
                            >
                                Explore past reports
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stakeholder;

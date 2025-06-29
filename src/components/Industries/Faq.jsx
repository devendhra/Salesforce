import { useEffect } from 'react';


function Faq() {
    useEffect(() => {
        const toggleButtons = document.querySelectorAll('.toggle-btn');

        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.closest('.faq-item');
                const description = faqItem?.querySelector('.answer-description');
                const plusIcon = button.querySelector('.icon-plus');
                const minusIcon = button.querySelector('.icon-minus');

                if (!description || !plusIcon || !minusIcon) return;

                const isOpen = !description.classList.contains('hidden');

                if (isOpen) {
                    description.classList.add('hidden');
                    plusIcon.classList.remove('hidden');
                    minusIcon.classList.add('hidden');
                } else {
                    description.classList.remove('hidden');
                    plusIcon.classList.add('hidden');
                    minusIcon.classList.remove('hidden');
                }
            });
        });

        return () => {
            toggleButtons.forEach(button => {
                button.replaceWith(button.cloneNode(true)); 
            });
        };
    }, []);

    return (
        <div>
            {/* <!-- FAQ --> */}
            <section id="FAQ" className="relative">
                <div className="py-12 z-40 lg:py-16 flex justify-center lg:mx-auto">
                    <article className="flex flex-col gap-4 justify-center items-center mx-6 md:mx-8 md:gap-6 lg:mx-12">
                        <header>
                            <h2 className="text-[32px] xl1440:text-[40px] md:w-[582px] lg:w-[768px] text-brand-dark leading-tight text-center font-bold ">
                                Salesforce for travel, transportation, and hospitality FAQ
                            </h2>
                        </header>
                        <div className="md:w-[582px] lg:w-[768px] xl1440:w-[840px]">
                            {/* <!-- Question-1  --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[10px] pb-5
                                md:pt-[28px] md:pb-6 xl1440:pt-3">
                                    <span
                                        className="text-[17px]  text-brand-dark font-bold  group-hover:text-brand-light md:text-xl">
                                        What is travel booking, hotel management, and logistics software?
                                    </span>
                                    <button
                                        className="toggle-btn flex ml-8 justify-center items-center rounded-full bg-brand w-[25px] h-[25px] shrink-0 group-hover:bg-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="#032d60"
                                            className="icon-plus w-[13px] h-[13px] fill-brand-dark group-hover:fill-brand  hidden">
                                            <path
                                                d="M13 12.5h8.25c.4 0 .75-.35.75-.75v-1.5c0-.4-.35-.75-.75-.75H13c-.3 0-.5-.2-.5-.5V.75c0-.4-.35-.75-.75-.75h-1.5c-.4 0-.75.35-.75.75V9c0 .3-.2.5-.5.5H.75c-.4 0-.75.35-.75.75v1.5c0 .4.35.75.75.75H9c.3 0 .5.2.5.5v8.25c0 .4.35.75.75.75h1.5c.4 0 .75-.35.75-.75V13c0-.3.2-.5.5-.5Z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 3" fill="#032d60"
                                            className="icon-minus w-[14px] h-[2px]  fill-brand-dark group-hover:fill-brand  ">
                                            <path
                                                d="M24 2.25c0 .4-.35.75-.75.75H.75C.35 3 0 2.65 0 2.25V.75C0 .35.35 0 .75 0h22.5c.4 0 .75.35.75.75v1.5Z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="answer-description text-base pb-6 md:pb-8 tracking-[0.015em]">
                                    Salesforce offers software solutions for travel, transportation, and hospitality companies.
                                    CRM is a system that provides companies
                                    a way to manage customer interactions across sales, customer service, and marketing, as a
                                    means to stay connected, streamline processes, and improve profitability.
                                </p>
                            </div>
                            {/* <!-- Question-2  --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold tracking-wide xs402:tracking-normal group-hover:text-brand-light md:text-xl">
                                        How can these tools help my business?
                                    </span>
                                    <button
                                        className="toggle-btn  flex ml-8 justify-center items-center rounded-full bg-brand w-[25px] h-[25px] shrink-0 group-hover:bg-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="#032d60"
                                            className="icon-plus w-[13px] h-[13px] fill-brand-dark group-hover:fill-brand ">
                                            <path
                                                d="M13 12.5h8.25c.4 0 .75-.35.75-.75v-1.5c0-.4-.35-.75-.75-.75H13c-.3 0-.5-.2-.5-.5V.75c0-.4-.35-.75-.75-.75h-1.5c-.4 0-.75.35-.75.75V9c0 .3-.2.5-.5.5H.75c-.4 0-.75.35-.75.75v1.5c0 .4.35.75.75.75H9c.3 0 .5.2.5.5v8.25c0 .4.35.75.75.75h1.5c.4 0 .75-.35.75-.75V13c0-.3.2-.5.5-.5Z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 3" fill="#032d60"
                                            className="icon-minus w-[14px] h-[2px]  fill-brand-dark group-hover:fill-brand  hidden">
                                            <path
                                                d="M24 2.25c0 .4-.35.75-.75.75H.75C.35 3 0 2.65 0 2.25V.75C0 .35.35 0 .75 0h22.5c.4 0 .75.35.75.75v1.5Z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="answer-description tracking-wide  hidden text-base pb-6 md:pb-8">
                                    Salesforce CRM solutions provide travel, transportation, and hospitality companies with
                                    a 360 degree unified customer profile so they can deliver a best-in-className customer experience
                                    with proactive, data-driven guidance, streamline operations with automation and AI, and drive innovative growth.
                                </p>
                            </div>
                            {/* <!-- Question-3 --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold transition-colors group-hover:text-brand-light md:text-xl">
                                        How do I choose the right travel, hotel, or logistics platform?
                                    </span>
                                    <button
                                        className="toggle-btn flex ml-8 justify-center items-center rounded-full bg-brand w-[25px] h-[25px] shrink-0 transition-colors  group-hover:bg-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="#032d60"
                                            className="icon-plus w-[13px] h-[13px] fill-brand-dark group-hover:fill-brand transition-colors">
                                            <path
                                                d="M13 12.5h8.25c.4 0 .75-.35.75-.75v-1.5c0-.4-.35-.75-.75-.75H13c-.3 0-.5-.2-.5-.5V.75c0-.4-.35-.75-.75-.75h-1.5c-.4 0-.75.35-.75.75V9c0 .3-.2.5-.5.5H.75c-.4 0-.75.35-.75.75v1.5c0 .4.35.75.75.75H9c.3 0 .5.2.5.5v8.25c0 .4.35.75.75.75h1.5c.4 0 .75-.35.75-.75V13c0-.3.2-.5.5-.5Z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 3" fill="#032d60"
                                            className="icon-minus w-[14px] h-[2px]  fill-brand-dark group-hover:fill-brand transition-colors hidden">
                                            <path
                                                d="M24 2.25c0 .4-.35.75-.75.75H.75C.35 3 0 2.65 0 2.25V.75C0 .35.35 0 .75 0h22.5c.4 0 .75.35.75.75v1.5Z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="answer-description hidden tracking-[0.015em] text-base pb-6 md:pb-8 md:tracking-[0.020em]">
                                    Consider your specific business needs. Ask: How well does it integrate with my existing
                                    software? What security measures are in place to protect my company data? Can it be customized
                                    to fit my business processes? Can it scale with my business? What do current users say in reviews and testimonials?
                                </p>
                            </div>
                            {/* <!-- Question-4 --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold transition-colors group-hover:text-brand-light md:text-xl">
                                        What are the benefits of using software for a hotel, travel, or logistics business?
                                    </span>
                                    <button
                                        className="toggle-btn flex ml-8 justify-center items-center rounded-full bg-brand w-[25px] h-[25px] transition-colors shrink-0 group-hover:bg-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="#032d60"
                                            className="icon-plus w-[13px] h-[13px] fill-brand-dark group-hover:fill-brand transition-colors">
                                            <path
                                                d="M13 12.5h8.25c.4 0 .75-.35.75-.75v-1.5c0-.4-.35-.75-.75-.75H13c-.3 0-.5-.2-.5-.5V.75c0-.4-.35-.75-.75-.75h-1.5c-.4 0-.75.35-.75.75V9c0 .3-.2.5-.5.5H.75c-.4 0-.75.35-.75.75v1.5c0 .4.35.75.75.75H9c.3 0 .5.2.5.5v8.25c0 .4.35.75.75.75h1.5c.4 0 .75-.35.75-.75V13c0-.3.2-.5.5-.5Z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 3" fill="#032d60"
                                            className="icon-minus w-[14px] h-[2px]  fill-brand-dark group-hover:fill-brand transition-colors hidden">
                                            <path
                                                d="M24 2.25c0 .4-.35.75-.75.75H.75C.35 3 0 2.65 0 2.25V.75C0 .35.35 0 .75 0h22.5c.4 0 .75.35.75.75v1.5Z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="answer-description tracking-[0.015em] hidden text-base pb-6 md:pb-8">
                                    Software solutions offer numerous benefits for travel, transportation,
                                    and hospitality companies such as improved efficiency and cost savings from
                                    automating routing tasks, enhanced customer experiences from personalized digital interactions,
                                    and scalable customer service from AI agent solutions.
                                </p>
                            </div>
                            {/* <!-- Question-5 --> */}
                            <div className="faq-item ">
                                <div className="flex justify-between group items-center w-[88vw] md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span className="text-[17px] text-brand-dark xs402:tracking-[-0.04em]  font-bold transition-colors w-[280px] group-hover:text-brand-light
                                        md:w-[566px] md:text-xl lg:w-[650px] lg:tracking-normal xl1440:w-[700px]">
                                        What is the largest travel, hotel, and logistics software?
                                    </span>
                                    <button
                                        className="toggle-btn flex ml-8 justify-center items-center rounded-full bg-brand w-[25px] h-[25px] transition-colors shrink-0 group-hover:bg-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="#032d60"
                                            className="icon-plus w-[13px] h-[13px] fill-brand-dark group-hover:fill-brand transition-colors">
                                            <path
                                                d="M13 12.5h8.25c.4 0 .75-.35.75-.75v-1.5c0-.4-.35-.75-.75-.75H13c-.3 0-.5-.2-.5-.5V.75c0-.4-.35-.75-.75-.75h-1.5c-.4 0-.75.35-.75.75V9c0 .3-.2.5-.5.5H.75c-.4 0-.75.35-.75.75v1.5c0 .4.35.75.75.75H9c.3 0 .5.2.5.5v8.25c0 .4.35.75.75.75h1.5c.4 0 .75-.35.75-.75V13c0-.3.2-.5.5-.5Z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 3" fill="#032d60"
                                            className="icon-minus w-[14px] h-[2px]  fill-brand-dark group-hover:fill-brand transition-colors hidden">
                                            <path
                                                d="M24 2.25c0 .4-.35.75-.75.75H.75C.35 3 0 2.65 0 2.25V.75C0 .35.35 0 .75 0h22.5c.4 0 .75.35.75.75v1.5Z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="answer-description hidden tracking-[0.025em] text-base pb-6 md:pb-8 ">
                                    Salesforce is consistently ranked the #1 CRM provider every year by a variety of organizations.
                                    Salesforce has transportation and logistics customers that include the largest enterprises as well
                                    as small- and medium-sized businesses who use our transportation CRM and Agentforce solutions.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className=" bottom-0 w-full overflow-hidden z-[-10] md:mt-5 lg:mt-0
            xs402:bottom-[0px]">
                    <div className="w-full">
                        <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/07/THT-Category-pg-FAQ-Background.png?w=1024"
                            alt="background" className="w-full object-contain" />
                    </div>
                </div>
            </section>
            f
        </div>
    )
}

export default Faq
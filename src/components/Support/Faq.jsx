
import React, { useEffect } from 'react';

function Faq() {
    useEffect(() => {
        const toggleButtons = document.querySelectorAll('.toggle-btn');

        const handleClick = (button) => {
            const faqItem = button.closest('.faq-item');
            const description = faqItem.querySelector('.answer-description');
            const plusIcon = button.querySelector('.icon-plus');
            const minusIcon = button.querySelector('.icon-minus');

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
        };

        toggleButtons.forEach((button) => {
            const listener = () => handleClick(button);
            button.addEventListener('click', listener);
            button._faqListener = listener;
        });

        return () => {
            toggleButtons.forEach((button) => {
                button.removeEventListener('click', button._faqListener);
            });
        };
    }, []); 

    return (
        <div>
            {/* <!-- FAQ --> */}
            <section id="FAQ">
                <div className="py-4 md:py-6 flex justify-center lg:mx-auto">
                    <article className="flex flex-col gap-4 justify-center items-center mx-6 md:mx-8 md:gap-6 lg:mx-12">
                        <header>
                            <h2 className="text-[32px] xl1440:text-[40px] text-brand-dark leading-tight text-center font-bold ">
                                Salesforce Customer Success FAQs
                            </h2>
                        </header>
                        <div className="md:w-[582px] lg:w-[768px] xl1440:w-[840px]">
                            {/* <!-- Question-1  --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[10px] pb-5
                                    md:pt-[28px] md:pb-6 xl1440:pt-3">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold  group-hover:text-brand-light md:text-xl">
                                        What is Customer Success?
                                    </span>
                                    <button
                                        className="toggle-btn flex justify-center items-center rounded-full bg-brand w-[25px] h-[25px]  group-hover:bg-brand-light">
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
                                <p className="answer-description text-base pb-6 md:pb-8">
                                    <span className="tracking-wide">Customer Success offers self-service resources and expert
                                        services from our CRM, AI and data experts with a special focus on Agentforce, our
                                        AI-powered agent solution, through:</span>
                                    <br/><br/>Success Plans: Three levels to help you to get the most out of Salesforce, including
                                        tools to enhance your use of Agentforce with dedicated support.
                                        <br/><br/>Professional Services: Comprehensive advisory and implementation services, including
                                            Agentforce deployments from Salesforce's leading consultants.
                                </p>
                            </div>
                            {/* <!-- Question-2  --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold tracking-wide  group-hover:text-brand-light md:text-xl">
                                        Why is Customer Success important?
                                    </span>
                                    <button
                                        className="toggle-btn flex justify-center items-center rounded-full bg-brand w-[25px] h-[25px]   group-hover:bg-brand-light">
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
                                <p className="answer-description tracking-wide xs402:tracking-normal hidden text-base pb-6 md:pb-8">
                                    Salesforce Customer Success maximises your ROI, drives user adoption and provides solutions
                                    like Agentforce Activator to accelerate your business goals.
                                    With proactive support and data-driven insights, we ensure long-term growth and seamless
                                    integration.
                                    Access to our product experts ensures your business achieves your set goals.
                                </p>
                            </div>
                            {/* <!-- Question-3 --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold transition-colors group-hover:text-brand-light md:text-xl">
                                        How do I work with Customer Success?
                                    </span>
                                    <button
                                        className="toggle-btn flex justify-center items-center rounded-full bg-brand w-[25px] h-[25px] transition-colors  group-hover:bg-brand-light">
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
                                <p className="answer-description hidden text-base pb-6 md:pb-8 md:tracking-[0.020em]">
                                    As a Salesforce customer, you immediately have access to our Standard Success Plan, which
                                    includes essential resources to help you to get the most out of Agentforce.
                                    For more advanced support, such as optimising Agentforce, connect with your Account
                                    Executive to explore the best solutions for your business needs.
                                </p>
                            </div>
                            {/* <!-- Question-4 --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold transition-colors group-hover:text-brand-light md:text-xl">
                                        When do I work with Customer Success?
                                    </span>
                                    <button
                                        className="toggle-btn flex justify-center items-center rounded-full bg-brand w-[25px] h-[25px] transition-colors  group-hover:bg-brand-light">
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
                                <p className="answer-description hidden text-base pb-6 md:pb-8">
                                    Success is unique to your organisation and Customer Success is here to help you to achieve
                                    your goals. Whether you're focused on measurable results,
                                    AI adoption with Agentforce or overall business growth, we provide the expertise and
                                    resources to support you every step of the way.
                                </p>
                            </div>
                            {/* <!-- Question-5 --> */}
                            <div className="faq-item ">
                                <div className="flex justify-between group items-center w-[88vw] md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span className="text-[17px] text-brand-dark xs402:tracking-[-0.04em]  font-bold transition-colors w-[280px] group-hover:text-brand-light
                                        md:w-[566px] md:text-xl lg:w-[650px] lg:tracking-normal xl1440:w-[700px]">
                                        How can Customer Success help my business get started with Agentforce?
                                    </span>
                                    <button
                                        className="toggle-btn flex  justify-center items-center rounded-full bg-brand w-[25px] h-[25px] transition-colors  group-hover:bg-brand-light">
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
                                <p className="answer-description hidden xs402:tracking-[0.025em] text-base pb-6 md:pb-8 ">
                                    Customer Success offers everything you need to get started with Agentforce—from free
                                    resources like Trailhead to Success Plans that provide on-demand tools and tailored support.
                                    For customised solutions, Salesforce Professional Services can quickly deploy an agent
                                    aligned with your company’s goals. Learn more about
                                    <a href="https://www.salesforce.com/content/dam/web/en_us/www/documents/services/professional-services-agentforce-activator.pdf"
                                        className="text-brand-light underline hover:no-underline">
                                        Agentforce Activator
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Faq
import { useEffect } from 'react';

function Faq() {
    useEffect(() => {
        const handleClick = (event) => {
            const button = event.target.closest('.toggle-btn');
            if (!button) return;

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

        const container = document.getElementById('FAQ');
        container.addEventListener('click', handleClick);

        return () => {
            container.removeEventListener('click', handleClick);
        };
    }, []);
    return (
        <div>
            {/* <!-- FAQ --> */}
            <section id="FAQ">
                <div className="py-12 md:py-16 flex justify-center lg:mx-auto">
                    <article className="flex flex-col gap-4 justify-center items-center mx-6 md:mx-8 md:gap-6 lg:mx-12">
                        <header>
                            <h2 className="text-[32px] xl1440:text-[40px] text-brand-dark leading-tight text-center font-bold ">
                                FAQs
                            </h2>
                        </header>
                        <div className="md:w-[582px] lg:w-[768px] xl1440:w-[840px]">
                            {/* <!-- Question-1  --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[10px] pb-5
                                md:pt-[28px] md:pb-6 lg:pt-5 xl1440:pt-3">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold  group-hover:text-brand-light md:text-xl">
                                        Where do I find Your Account?
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
                                <p className="answer-description text-base pb-6 md:pb-8 tracking-[0.019em]">
                                    You can manage your account in Salesforce by clicking the Setup gear in the
                                    top right corner and selecting Your Account (Lightning Experience), or
                                    <a href="http://login.salesforce.com/lightning/n/standard-OnlineSalesHome?utm__source=WWW&amp;d=pb"
                                        target="_self" className="underline text-brand-light">
                                        Log into Your Account</a>. You can also find Your Account in the App Launcher.
                                </p>
                            </div>
                            {/* <!-- Question-2  --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold tracking-wide  group-hover:text-brand-light md:text-xl">
                                        How do I get access to Your Account?
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
                                <div className="answer-description tracking-wide  hidden text-base pb-6 md:pb-8">
                                   <p>
                                        Your Account is available for Sales Cloud and Service Cloud customers. For a user to be able
                                        to access account management,
                                        the “Manage Billing” permission has to be enabled in their profile or
                                        <a href="https://help.salesforce.com/s/articleView?id=000351754&amp;type=1" target="_self"
                                            className="underline text-brand-light">
                                            in a permission set.</a> This permission is enabled by default for system
                                        administrators. These permissions can be granted to any user by system administrators.
                                    </p>
                                    <br/><br/>
                                    <p>
                                        Use Identity licenses to provide access to the Your Account app for users who don’t
                                        need full access to Salesforce. You can assign up to 100 free Identity licenses.
                                        <a href="https://help.salesforce.com/s/articleView?id=release-notes.rn_your_account_app_free_users.htm&amp;type=5&amp;release=236&amp;language=en_us&amp;d=pb"
                                            target="_self" className="underline text-brand-light">Learn how</a>
                                        to set up an Identity license for Your Account and assign the Your Account App Admin
                                        permission set.
                                    </p>
                                    <br/><br/>
                                    <p>
                                        <a href="https://help.salesforce.com/articleView?id=Checkout-access-for-Nonprofit-Accounts&amp;type=1&amp;language=en_US&amp;d=pb"
                                            target="_self" className="underline text-brand-light">Learn more</a>
                                        about access for nonprofits.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- Question-3  --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold tracking-wide  group-hover:text-brand-light md:text-xl">
                                        Is Your Account available in Essentials and Salesforce classNameic?
                                    </span>
                                    <button
                                        className="toggle-btn flex justify-center items-center rounded-full bg-brand w-[25px] h-[25px] shrink-0  group-hover:bg-brand-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="#032d60"
                                            className="icon-plus w-[13px] h-[13px] fill-brand-dark group-hover:fill-brand ">
                                            <path
                                                d="M13 12.5h8.25c.4 0 .75-.35.75-.75v-1.5c0-.4-.35-.75-.75-.75H13c-.3 0-.5-.2-.5-.5V.75c0-.4-.35-.75-.75-.75h-1.5c-.4 0-.75.35-.75.75V9c0 .3-.2.5-.5.5H.75c-.4 0-.75.35-.75.75v1.5c0 .4.35.75.75.75H9c.3 0 .5.2.5.5v8.25c0 .4.35.75.75.75h1.5c.4 0 .75-.35.75-.75V13c0-.3.2-.5.5-.5Z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 3" fill="#032d60"
                                            className="icon-minus w-[14px] h-[2px]  fill-brand-dark group-hover:fill-brand shrink-0 hidden">
                                            <path
                                                d="M24 2.25c0 .4-.35.75-.75.75H.75C.35 3 0 2.65 0 2.25V.75C0 .35.35 0 .75 0h22.5c.4 0 .75.35.75.75v1.5Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="answer-description tracking-wide md:tracking-normal hidden text-base pb-6 md:pb-8">
                                    <p className="mb-[14px]">Salesforce Essentials Edition customers have the opportunity to use a customized Lightning
                                        subscription management tool.</p>
                                    <p className="mb-[14px]">Essentials customers can:</p>
                                    <ul className="list-disc pl-[40px] mb-8">
                                        <li className="mb-[14px]">Add additional Essentials licenses</li>
                                        <li className="mb-[14px]">Add frequently used accompanying products like Data Storage, File Storage, Salesforce
                                            Inbox, and Lightning Dialer</li>
                                        <li className="mb-[14px]">Update credit card or billing information</li>
                                        <li className="mb-[14px]">Request an upgrade to Professional or Enterprise Editions, and an account executive will
                                            get in touch</li>
                                        <li className="mb-[14px]"><a href="https://www.salesforce.com/form/contact/contactme/?d=pb"
                                             className="underline text-brand-light">Contact Us</a> to open a support case and get help</li>
                                    </ul>
                                    <p>Your Account is available in Salesforce classNameic.</p>
                                </div>
                            </div>
                            {/* <!-- Question-4 --> */}
                            <div className="faq-item border-b-[0.5px] border-gray-200 ">
                                <div className="flex justify-between items-center w-[88vw] group md:w-auto pt-[22px] pb-5
                                    md:pt-[28px] md:pb-6">
                                    <span
                                        className="text-[17px] text-brand-dark font-bold transition-colors group-hover:text-brand-light md:text-xl">
                                        Is Salesforce Checkout still available to me?
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
                                <p className="answer-description hidden text-base pb-6 md:pb-8 md:tracking-[0.015em]">
                                    No, Your Account has replaced Salesforce Checkout. Use Your Account to manage your
                                    Salesforce account quickly and easily from within your Salesforce org.
                                </p>
                            </div>
                            {/* <!-- Question-5 --> */}
                            <div className="faq-item ">
                                <div className="flex justify-between group items-center w-[88vw] md:w-auto pt-[22px] pb-5
                                        md:pt-[28px] md:pb-6">
                                    <span className="text-[17px] text-brand-dark xs402:tracking-[-0.04em]  font-bold transition-colors w-[280px] group-hover:text-brand-light
                                        md:w-[566px] md:text-xl lg:w-[650px] lg:tracking-normal xl1440:w-[700px]">
                                        How can I learn more about this offering?
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
                                    You can <a href="https://help.salesforce.com/s/articleView?id=000396380&amp;type=1"
                                        className="underline text-brand-light">access a comprehensive list</a>
                                    of frequently asked questions for a general overview, accessing and purchasing
                                    information, eligibility requirements, and more.
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
import  { useState } from "react";

const tabs = [
    {
        id: "our-initiatives",
        title: "Our Initiatives",
        content: (
            <p classNameName="mt-4 md:mt-0 mb-2 text-[18px] text-center tracking-wide md:w-[470px] xl1440:w-[728px]">
                We work across our business to advance trusted, equitable, and sustainable AI and Agentforce solutions.
            </p>
        )
    },
    {
        id: "learning-resources",
        title: "Learning Resources",
        content: (
            <p classNameName="mt-4 md:mt-0 mb-2 text-[18px] text-center tracking-wide md:w-[470px] xl1440:w-[728px]">
                Explore educational resources and virtual events to help build your AI for impact strategy.
            </p>
        )
    },
    {
        id: "cp-stories",
        title: "Customer and Partner Stories",
        content: (
            <p classNameName="mt-4 mb-2 text-[18px] text-center tracking-wide md:w-[470px] md:mt-2 xl1440:w-[728px]">
                See how our customers and grantees are using AI and Agentforce to create a better world.
            </p>
        )
    }
];

export default function AgentsForImpact() {
    const [activeTab, setActiveTab] = useState("our-initiatives");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <section id="agents-for-impact">
            <div classNameName="py-12 md:py-16">
                <div classNameName="flex flex-col mx-6 md:mx-8 md:gap-4 lg:mx-12 xl1440:mx-20">
                    <header>
                        <h2 classNameName="text-[32px] xl:text-[40px] text-center -mt-1 text-brand-dark font-bold">
                            Agents for Impact
                        </h2>
                    </header>

                    <div>
                        <ul classNameName="flex justify-between md:justify-center gap-1 border-b-[0.8px] mt-2 md:gap-4 lg:gap-6 border-[#C9C9C9] lg:-ml-0">
                            {tabs.map((tab, index) => (
                                <li
                                    key={tab.id}
                                    classNameName={`w-full md:w-auto flex items-center justify-center ${index > 0 ? "hidden md:block" : ""}`}
                                >
                                    <button
                                        classNameName={`tab-btn p-3 pb-2 md:px-6 md:pt-4 md:pb-3 hover:border-b-4 hover:border-brand-light ${activeTab === tab.id
                                            ? "border-b-4 border-brand-light ring-2 ring-brand-light rounded-md"
                                            : ""
                                            }`}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        <span
                                            classNameName={`text-sm w-full md:font-bold md:text-[17px] ${activeTab === tab.id ? "text-brand-light font-semibold" : ""
                                                }`}
                                        >
                                            {tab.title}
                                        </span>
                                    </button>
                                </li>
                            ))}

                            {/* Mobile Dropdown */}
                            <li classNameName="relative flex w-full items-center justify-center md:hidden">
                                <button
                                    onClick={toggleDropdown}
                                    classNameName="p-2 flex items-center justify-center w-full"
                                >
                                    More
                                    <img
                                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' fill='none'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M3 0c1.65 0 3 1.35 3 3S4.65 6 3 6 0 4.65 0 3s1.35-3 3-3Zm9 0c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm9 0c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Z' clip-rule='evenodd'/%3E%3C/svg%3E"
                                        alt=""
                                        classNameName="mt-1 ml-1 w-4"
                                    />
                                </button>
                                {dropdownOpen && (
                                    <ul classNameName="absolute top-full mt-2 py-[11px] bg-white border shadow-xl -right-2 rounded-md w-40 z-10">
                                        {tabs.slice(1).map((tab) => (
                                            <li key={tab.id}>
                                                <button
                                                    onClick={() => {
                                                        setActiveTab(tab.id);
                                                        setDropdownOpen(false);
                                                    }}
                                                    classNameName="block w-full text-left p-3 text-sm hover:bg-gray-100"
                                                >
                                                    {tab.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* Tab Content */}
                    <div className="">
                        {/* <!-- our-initiatives  --> */}
                        <div id="our-initiatives" className="tab-content">
                            <div className="py-12 md:py-16 ">
                                <div className="flex flex-col gap-6 justify-center items-center xl1440:gap-10">
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <p
                                                className="mt-4 md:mt-0 mb-2 text-[18px] text-center tracking-wide md:w-[470px] xl1440:w-[728px]">
                                                We work across our business to advance trusted, equitable, and
                                                sustainable AI and Agentforce solutions.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- Cards  --> */}
                                    <div className="">
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-10 md:gap-6 lg:gap-8 xl1440:gap-10  xl1440:mt-6 xl1440:max-w-[1280px]">
                                            {/* <!-- Card 1 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                                                <div className="flex justify-center items-center">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/OurInitiatives_TrustedAI.png?w=719"
                                                        className="size-fit rounded-t-2xl " />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-16 xl:gap-[80px]">
                                                    <div className="m-8 mt-[51px] lg:m-6 xl1440:m-8">
                                                        <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">
                                                            Trusted AI</h3>
                                                        <p
                                                            className="text-[#181717] text-base mt-4 xl:tracking-wide lg:text-sm xl1440:text-base">
                                                            We deliver tools and guidelines to our employees, customers, and
                                                            partners for developing and using AI responsibly.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="mx-8 mb-10 lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                                        <a href="#" className="font-medium underline ">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 2 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                                                <div className="flex justify-center items-center">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_BlueprintForSustainableAI.jpg?w=719"
                                                        className="size-fit rounded-t-2xl " />
                                                </div>
                                                <div
                                                    className="text-brand-dark lg:flex lg:flex-col lg:gap-[103px] xl1440:gap-[105px]">
                                                    <div className="m-8 mt-[51px] lg:m-6 xl1440:m-8">
                                                        <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">
                                                            Salesforce Blueprint for Sustainable AI </h3>
                                                        <p
                                                            className="text-[#181717] text-base mt-4 xl:tracking-wide lg:text-sm xl1440:text-base">
                                                            We are committed to prioritizing sustainability in AI
                                                            development.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="mx-8 mb-10 lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                                        <a href="#" className="font-medium underline ">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 3 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/OurInitiatives_SalesforceLaunchesAccelerator.png?w=719"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col  xl1440:gap-[5px]">
                                                    <div className="m-8 mt-[51px] lg:m-6 xl1440:m-8">
                                                        <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">The
                                                            Salesforce Accelerator – Agents for Impact</h3>
                                                        <p
                                                            className="text-[#181717] text-base mt-4 xl:tracking-wide lg:text-sm xl1440:text-base">
                                                            We provide technology, funding, and expertise to help nonprofits
                                                            build and customize AI agents to improve operational efficiency
                                                            and scale community impact.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="mx-8 mb-10 lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                                        <a href="#" className="font-medium underline ">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 4 --> */}
                                            <div className="flex flex-col rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/OurInitiatives_SalesforcePavesSustainableAI.png?resize=150,150 150w,https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/OurInitiatives_SalesforcePavesSustainableAI.png?resize=300,169 300w"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div
                                                    className="text-brand-dark md:flex md:flex-col md:gap-[50px] lg:gap-[90px] xl1440:gap-[85px]">
                                                    <div className="m-8 lg:m-6 xl1440:m-8">
                                                        <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">
                                                            Sustainable AI Policy Principles</h3>
                                                        <p
                                                            className="text-[#181717] text-base mt-4 xl:tracking-wide lg:text-sm xl1440:text-base">
                                                            Our principles aim to guide advocacy with regulators and
                                                            lawmakers for more sustainable AI.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="mx-8 mb-10 lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                                        <a href="#" className="font-medium underline ">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- learning-resources  --> */}
                        <div id="learning-resources" className="tab-content hidden">
                            <div className="py-12 md:py-16 ">
                                <div className="flex flex-col gap-6 justify-center items-center xl1440:gap-10">
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <p
                                                className="mt-4 md:mt-0 mb-2 text-[18px] text-center tracking-wide md:w-[470px] xl1440:w-[728px]">
                                                Explore educational resources and virtual events to help build your AI for
                                                impact strategy.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- Cards  --> */}
                                    <div className="">
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-10 md:gap-6 lg:gap-8 xl1440:gap-10  xl1440:mt-6 xl1440:max-w-[1280px]">
                                            {/* <!-- Card 1 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                                                <div className="flex justify-center items-center">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_ClimateandAISummit.png?w=719"
                                                        className="size-fit rounded-t-2xl " />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[23px] xl1440:gap-8">
                                                    <div
                                                        className="m-8 mt-[51px] md:mt-10 md:m-6 lg:m-8 xl1440:m-10 xl1440:mb-8">
                                                        <h3
                                                            className="text-xl font-bold mt-4 md:text-base lg:text-xl xl1440:text-2xl">
                                                            Climate & AI Summit</h3>
                                                        <p
                                                            className="text-[#181717] text-base mt-4 tracking-wide md:text-sm lg:text-base">
                                                            See innovative climate AI solutions in action and hear how we
                                                            can build and scale sustainable AI models.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline">Watch now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 2 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                                                <div className="flex justify-center items-center">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_EducationandAISummit.png?w=719"
                                                        className="size-fit rounded-t-2xl " />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[23px] xl1440:gap-7">
                                                    <div className="m-8 mt-[51px] md:mt-10 xl1440:m-10 xl1440:mb-8">
                                                        <h3 className="text-xl font-bold mt-4 md:text-base xl1440:text-2xl">
                                                            Education & AI Summit</h3>
                                                        <p
                                                            className="text-[#181717] text-base mt-4 tracking-wide md:text-sm lg:text-base">
                                                            Hear education leaders and students discuss key issues at the
                                                            intersection of AI and K-12 education.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline ">Watch now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 3 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_PowerOfAIClimateAction.png?w=719"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[23px] xl1440:gap-4">
                                                    <div className="m-8 mt-[51px] md:mt-10 xl1440:m-10 xl1440:mb-8">
                                                        <h3 className="text-xl font-bold mt-4 md:text-base xl1440:text-2xl">The
                                                            Power of AI for Climate Action</h3>
                                                        <p className="text-[#181717] text-base mt-4 md:text-sm lg:text-base">
                                                            Find out what experts are saying about AI as a solution for
                                                            addressing climate change.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline ">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 4 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_AIinEducationisHere.png?w=719"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[0px] xl1440:gap-7">
                                                    <div className="m-8 mt-[51px] md:mt-10 xl1440:m-10 xl1440:mb-8">
                                                        <h3 className="text-xl font-bold mt-4 md:text-base xl1440:text-2xl">AI
                                                            in Education is Here: How to Make it Equitable</h3>
                                                        <p className="text-[#181717] text-base mt-4 md:text-sm lg:text-base">
                                                            Learn key insights from education leaders on how we can build an
                                                            equitable AI future.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline ">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 5 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_Blueprint-5.png?w=719"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[50px] xl1440:gap-7">
                                                    <div className="m-8 mt-[51px] md:mt-10 xl1440:m-10 xl1440:mb-8">
                                                        <h3 className="text-xl font-bold mt-4 md:text-base xl1440:text-2xl">
                                                            Build a Sustainable AI Strategy</h3>
                                                        <p className="text-[#181717] text-base mt-4 md:text-sm lg:text-base">
                                                            Explore best practices for incorporating sustainability into
                                                            your AI strategy.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline ">Take the trail</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 6 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_ResponsibleCreation-4.png?w=719"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[50px] xl1440:gap-7">
                                                    <div className="m-8 mt-[51px] md:mt-10 xl1440:m-10 xl1440:mb-8">
                                                        <h3 className="text-xl font-bold mt-4 md:text-base xl1440:text-2xl">
                                                            Responsible Creation of Artificial Intelligence</h3>
                                                        <p className="text-[#181717] text-base mt-4 md:text-sm lg:text-base">
                                                            Learn how to remove bias to create ethical AI systems at your
                                                            company.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline ">Take the trai</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- cp-stories  --> */}
                        <div id="cp-stories" className="tab-content hidden">
                            <div className="py-12 md:py-16 ">
                                <div className="flex flex-col gap-6 justify-center items-center xl1440:gap-10">
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <p
                                                className="mt-4  mb-2 text-[18px] text-center tracking-wide md:w-[470px] md:mt-2 xl1440:w-[728px]">
                                                See how our customers and grantees are using AI and Agentforce to create a
                                                better world.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- Cards  --> */}
                                    <div className="">
                                        <div
                                            className="grid grid-cols-1 md:mt-10 md:grid-cols-3  gap-4  md:gap-6 lg:gap-8 xl1440:gap-10  xl1440:mt-6 xl1440:max-w-[1280px]">
                                            {/* <!-- Card 1 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                                                <div className="flex justify-center items-center">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/Unlocking-College-Graduation-with-Agentforce.jpg?w=400"
                                                        className="size-fit rounded-t-2xl " />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col  xl1440:gap-0">
                                                    <div
                                                        className="m-8 mt-[51px]  md:mt-10 md:m-6 lg:m-8 xl1440:m-10 xl1440:mb-8">
                                                        <h3
                                                            className="text-xl font-bold mt-4 md:text-base lg:text-xl xl1440:text-2xl">
                                                            Unlocking College Graduation with Agentforce</h3>
                                                        <p
                                                            className="text-[#181717] text-base tracking-wide mt-4 md:text-sm lg:text-base">
                                                            College Possible is bringing humans and agents together to break
                                                            down barriers to higher education for thousands of students.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#"
                                                            className="flex justify-center md:justify-start text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all">
                                                            Watch now
                                                            <div className="group w-fit cursor-pointer">
                                                                <svg width="16" height="16" viewBox="0 0 18 18"
                                                                    xmlns="http://www.w3.org/2000/svg" fill="#032D60"
                                                                    className="mt-1 ml-1 lg:mt-[5px] xl1440:mt-1">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 2 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10 ">
                                                <div className="flex justify-center items-center">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/Responding-to-Disasters-with-Agentforce.jpg?w=400"
                                                        className="size-fit rounded-t-2xl " />
                                                </div>
                                                <div
                                                    className="text-brand-dark md:flex md:flex-col  md:gap-[26px] xl1440:gap-7">
                                                    <div className="m-8 mt-[51px] md:m-6 lg:m-8 xl1440:m-10 xl1440:mb-8">
                                                        <h3
                                                            className="text-xl font-bold mt-4 md:text-base lg:text-xl xl1440:text-2xl">
                                                            Responding to Disasters with Agentforce</h3>
                                                        <p className="text-[#181717] text-base mt-4 md:text-sm lg:text-base">
                                                            Good360 is leveraging agents to match donated goods with
                                                            communities in need in the wake of disasters.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#"
                                                            className="flex justify-center md:justify-start text-base font-semibold text-brand-dark underline hover:no-underline hover:text-brand-light transition-all">
                                                            Watch now
                                                            <div className="group w-fit cursor-pointer">
                                                                <svg width="16" height="16" viewBox="0 0 18 18"
                                                                    xmlns="http://www.w3.org/2000/svg" fill="#032D60"
                                                                    className="mt-1 ml-1 lg:mt-[5px] xl1440:mt-1">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M10.0977 2.16345H14.5237L6.8804 9.80671C6.69002 9.99709 6.69002 10.3058 6.8804 10.4961L7.34002 10.9558C7.5304 11.1461 7.83906 11.1461 8.02945 10.9558L15.6717 3.31348V7.73848C15.6717 8.00772 15.89 8.22598 16.1592 8.22598H16.8092C17.0785 8.22598 17.2967 8.00772 17.2967 7.73848V1.47595C17.2967 0.958186 16.877 0.538452 16.3592 0.538452H10.0977C9.82847 0.538452 9.61021 0.756713 9.61021 1.02595V1.67595C9.61021 1.94519 9.82847 2.16345 10.0977 2.16345ZM2.97559 4.03905C1.62939 4.03905 0.538086 5.13036 0.538086 6.47655V14.8516C0.538086 16.1977 1.62939 17.2891 2.97559 17.2891H11.3506C12.6968 17.2891 13.7881 16.1977 13.7881 14.8516L13.7881 8.88513C13.7881 8.59574 13.4383 8.45066 13.2335 8.65509L12.4493 9.43768C12.2661 9.62059 12.1631 9.86888 12.1631 10.1278V14.8516C12.1631 15.3003 11.7993 15.6641 11.3506 15.6641H2.97559C2.52686 15.6641 2.16309 15.3003 2.16309 14.8516V6.47655C2.16309 6.02782 2.52685 5.66405 2.97559 5.66405H7.79909C8.07127 5.66405 8.33106 5.55029 8.51564 5.35026L9.2223 4.58446C9.41442 4.37626 9.26675 4.03905 8.98345 4.03905H2.97559Z">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 3 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/Stories_BigAIdeasForGood_aa7110.png?w=719"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div
                                                    className="text-brand-dark md:flex md:flex-col md:gap-[83px] xl1440:gap-[60px]">
                                                    <div className="m-8 mt-[51px] md:m-6 lg:m-8 xl1440:m-10 xl1440:mb-8">
                                                        <h3
                                                            className="text-xl font-bold mt-4 md:text-base lg:text-xl xl1440:text-2xl">
                                                            Big “AIdeas” for Good </h3>
                                                        <p className="text-[#181717] text-base mt-4 md:text-sm lg:text-base">
                                                            Hear from six nonprofits using AI to improve equity in education
                                                            and advance economic opportunity.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline ">Watch now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 4 --> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/Stories_JustEnergyTransition_ed5856.png?w=719"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col xl1440:gap-0">
                                                    <div
                                                        className="m-8 mt-[51px]  md:mt-10 md:m-6 lg:m-8 xl1440:m-10 xl1440:mb-8">
                                                        <h3
                                                            className="text-xl font-bold mt-4 md:text-base lg:text-xl xl1440:text-2xl">
                                                            Unlocking a Just Energy Transition with AI</h3>
                                                        <p
                                                            className="text-[#181717] text-base tracking-wide mt-4 md:text-sm lg:text-base">
                                                            Hear how Groundswell and Salesforce are supporting a just,
                                                            equitable transition to clean energy.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline ">Watch now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Card 5--> */}
                                            <div className="flex flex-col  rounded-2xl shadow-2xl bg-white relative z-10">
                                                <div className="flex justify-center items-center ">
                                                    <img src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/Stories_PreparingYoungPeople.png?w=719"
                                                        className="size-fit rounded-t-2xl" />
                                                </div>
                                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-[23px] xl1440:gap-0">
                                                    <div
                                                        className="m-8 mt-[51px]  md:mt-10 md:m-6 lg:m-8 xl1440:m-10 xl1440:mb-8">
                                                        <h3
                                                            className="text-xl font-bold mt-4 md:text-base lg:text-xl xl1440:text-2xl">
                                                            Preparing Young People for an AI Future</h3>
                                                        <p
                                                            className="text-[#181717] text-base tracking-wide mt-4 md:text-sm lg:text-base">
                                                            Hear how The Careers and Enterprise Company is preparing young
                                                            people for AI skills and jobs.
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                                        <a href="#" className="font-medium underline ">Watch now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
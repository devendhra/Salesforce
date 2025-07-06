import React, { useState } from "react";

const cardData = [
    {
        title: "Trusted AI",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/OurInitiatives_TrustedAI.png?w=719",
        description: "We deliver tools and guidelines to our employees, customers, and partners for developing and using AI responsibly.",
        link: "#"
    },
    {
        title: "Salesforce Blueprint for Sustainable AI",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_BlueprintForSustainableAI.jpg?w=719",
        description: "We are committed to prioritizing sustainability in AI development.",
        link: "#"
    },
    {
        title: "The Salesforce Accelerator – Agents for Impact",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/OurInitiatives_SalesforceLaunchesAccelerator.png?w=719",
        description: "We provide technology, funding, and expertise to help nonprofits build and customize AI agents to improve operational efficiency and scale community impact.",
        link: "#"
    },
    {
        title: "Sustainable AI Policy Principles",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/OurInitiatives_SalesforcePavesSustainableAI.png",
        description: "Our principles aim to guide advocacy with regulators and lawmakers for more sustainable AI.",
        link: "#"
    }
];

const learningCards = [
    {
        title: "Climate & AI Summit",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_ClimateandAISummit.png?w=719",
        description: "See innovative climate AI solutions in action and hear how we can build and scale sustainable AI models.",
        link: "#",
        linkLabel: "Watch now"
    },
    {
        title: "Education & AI Summit",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_EducationandAISummit.png?w=719",
        description: "Hear education leaders and students discuss key issues at the intersection of AI and K-12 education.",
        link: "#",
        linkLabel: "Watch now"
    },
    {
        title: "The Power of AI for Climate Action",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_PowerOfAIClimateAction.png?w=719",
        description: "Find out what experts are saying about AI as a solution for addressing climate change.",
        link: "#",
        linkLabel: "Learn more"
    },
    {
        title: "AI in Education is Here: How to Make it Equitable",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_AIinEducationisHere.png?w=719",
        description: "Learn key insights from education leaders on how we can build an equitable AI future.",
        link: "#",
        linkLabel: "Learn more"
    },
    {
        title: "Build a Sustainable AI Strategy",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_Blueprint-5.png?w=719",
        description: "Explore best practices for incorporating sustainability into your AI strategy.",
        link: "#",
        linkLabel: "Take the trail"
    },
    {
        title: "Responsible Creation of Artificial Intelligence",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/LearningResources_ResponsibleCreation-4.png?w=719",
        description: "Learn how to remove bias to create ethical AI systems at your company.",
        link: "#",
        linkLabel: "Take the trai"
    }
];

const cpStories = [
    {
        title: "Unlocking College Graduation with Agentforce",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/Unlocking-College-Graduation-with-Agentforce.jpg?w=400",
        description: "College Possible is bringing humans and agents together to break down barriers to higher education for thousands of students.",
        link: "#",
        linkLabel: "Watch now"
    },
    {
        title: "Responding to Disasters with Agentforce",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/12/Responding-to-Disasters-with-Agentforce.jpg?w=400",
        description: "Good360 is leveraging agents to match donated goods with communities in need in the wake of disasters.",
        link: "#",
        linkLabel: "Watch now"
    },
    {
        title: "Big “AIdeas” for Good",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/Stories_BigAIdeasForGood_aa7110.png?w=719",
        description: "Hear from six nonprofits using AI to improve equity in education and advance economic opportunity.",
        link: "#",
        linkLabel: "Watch now"
    },
    {
        title: "Unlocking a Just Energy Transition with AI",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/Stories_JustEnergyTransition_ed5856.png?w=719",
        description: "Hear how Groundswell and Salesforce are supporting a just, equitable transition to clean energy.",
        link: "#",
        linkLabel: "Watch now"
    },
    {
        title: "Preparing Young People for an AI Future",
        image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/08/Stories_PreparingYoungPeople.png?w=719",
        description: "Hear how The Careers and Enterprise Company is preparing young people for AI skills and jobs.",
        link: "#",
        linkLabel: "Watch now"
    }
];
const tabs = [
    {
        id: "our-initiatives",
        title: "Our Initiatives",
        content: (
            <div className="py-12 md:py-16">
                <div className="flex flex-col gap-6 justify-center items-center xl1440:gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <p className="mt-4 md:mt-0 mb-2 text-[18px] text-center tracking-wide md:w-[470px] xl1440:w-[728px]">
                            We work across our business to advance trusted, equitable, and sustainable AI and Agentforce solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-10 md:gap-6 lg:gap-8 xl1440:gap-10 xl1440:mt-6 xl1440:max-w-[1280px]">
                        {cardData.map((card, index) => (
                            <div key={index} className="flex flex-col rounded-2xl shadow-2xl bg-white relative z-10">
                                <div className="flex justify-center items-center">
                                    <img src={card.image} alt="Card visual" className="size-fit rounded-t-2xl" />
                                </div>
                                <div className="text-brand-dark lg:flex lg:flex-col lg:gap-16 xl:gap-[80px]">
                                    <div className="m-8 mt-[51px] lg:m-6 xl1440:m-8">
                                        <h3 className="text-xl font-bold mt-4 lg:text-base xl1440:text-xl">{card.title}</h3>
                                        <p className="text-[#181717] text-base mt-4 xl:tracking-wide lg:text-sm xl1440:text-base">{card.description}</p>
                                    </div>
                                    <div className="mx-8 mb-10 lg:mx-0 lg:mb-0 lg:px-6 lg:pb-8 xl1440:px-8 xl1440:pb-10">
                                        <a href={card.link} className="font-medium underline">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "learning-resources",
        title: "Learning Resources",
        content: (
            <div className="py-12 md:py-16">
                <div className="flex flex-col gap-6 justify-center items-center xl1440:gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <p className="mt-4 md:mt-0 mb-2 text-[18px] text-center tracking-wide md:w-[470px] xl1440:w-[728px]">
                            Explore educational resources and virtual events to help build your AI for impact strategy.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-10 md:gap-6 lg:gap-8 xl1440:gap-10 xl1440:mt-6 xl1440:max-w-[1280px]">
                        {learningCards.map((card, index) => (
                            <div key={index} className="flex flex-col rounded-2xl shadow-2xl bg-white relative z-10">
                                <div className="flex justify-center items-center">
                                    <img src={card.image} alt="Card visual" className="size-fit rounded-t-2xl" />
                                </div>
                                <div className="text-brand-dark lg:flex lg:flex-col xl1440:gap-4">
                                    <div className="m-8 mt-[51px] md:mt-10 xl1440:m-10 xl1440:mb-8">
                                        <h3 className="text-xl font-bold mt-4 md:text-base xl1440:text-2xl">{card.title}</h3>
                                        <p className="text-[#181717] text-base mt-4 tracking-wide md:text-sm lg:text-base">{card.description}</p>
                                    </div>
                                    <div className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                        <a href={card.link} className="font-medium underline">{card.linkLabel}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "cp-stories",
        title: "Customer & Partner Stories",
        content: (
            <div className="py-12 md:py-16">
                <div className="flex flex-col gap-6 justify-center items-center xl1440:gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <p className="mt-4 mb-2 text-[18px] text-center tracking-wide md:w-[470px] md:mt-2 xl1440:w-[728px]">
                            See how our customers and grantees are using AI and Agentforce to create a better world.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:mt-10 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl1440:gap-10 xl1440:mt-6 xl1440:max-w-[1280px]">
                        {cpStories.map((card, index) => (
                            <div key={index} className="flex flex-col rounded-2xl shadow-2xl bg-white relative z-10">
                                <div className="flex justify-center items-center">
                                    <img src={card.image} alt="Card visual" className="size-fit rounded-t-2xl" />
                                </div>
                                <div className="text-brand-dark lg:flex lg:flex-col xl1440:gap-0">
                                    <div className="m-8 mt-[51px] md:mt-10 md:m-6 lg:m-8 xl1440:m-10 xl1440:mb-8">
                                        <h3 className="text-xl font-bold mt-4 md:text-base lg:text-xl xl1440:text-2xl">{card.title}</h3>
                                        <p className="text-[#181717] text-base tracking-wide mt-4 md:text-sm lg:text-base">{card.description}</p>
                                    </div>
                                    <div className="px-8 pb-10 md:px-6 md:pb-8 lg:px-8 lg:pb-10 xl:px-10 xl:pb-12">
                                        <a href={card.link} className="font-medium underline flex items-center justify-center md:justify-start text-brand-dark hover:no-underline hover:text-brand-light transition-all">
                                            {card.linkLabel}
                                            {card.icon && <span className="ml-2">{card.icon}</span>}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
];


export default function AgentsForImpact() {
    const [activeTab, setActiveTab] = useState("our-initiatives");

    return (
        <section className="w-full text-black">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col items-center gap-8 justify-center mb-6 border-b-[0.8px] border-[#C9C9C9]">
                    <header>
                        <h2 className="text-[32px] xl:text-[40px] text-center -mt-1 text-brand-dark font-bold">
                            Agents for Impact
                        </h2>
                    </header>
                    <div className="flex p-3 pb-0 
                     space-x-8 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-btn px-4 py-2 text-sm md:text-[17px]  focus:outline-none font-bold transition-all border-b-4 hover:font-semibold  hover:text-brand-light hover:border-b-4 hover:border-brand-light ${activeTab === tab.id
                                        ? "border-b-brand-light ring-2 ring-brand-light rounded-md text-brand-light font-semibold"
                                        : "border-transparent"
                                    }`}
                                data-tab={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span>{tab.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </section>
    );
}

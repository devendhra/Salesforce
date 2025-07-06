import React, { useState } from "react";

const takeActionItems = [
  {
    title: "Manage all ESG data in one place with Net Zero Cloud.",
    description: "ESG readiness starts with CRM + AI + Data + Trust.",
    link: "https://www.salesforce.com/products/net-zero-cloud/overview/",
    image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/features-take-action_d855a6.jpg?w=1024",
    linkLabel: "Learn more"
  },
  {
    title: "Join the Trillion Trees community.",
    description: "Support the growth, restoration, and conservation of one trillion trees around the world by 2030 with 1t.org.",
    link: "https://www.salesforce.com/products/net-zero-cloud/overview/",
    image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/features-restoring-1trillion_1d0dbc.webp?w=1024",
    linkLabel: "Learn more"
  },
  {
    title: "Join the Pledge 1% movement.",
    description: "Leverage your equity, time, and products to give back to communities.",
    link: "https://www.salesforce.com/products/net-zero-cloud/overview/",
    image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/features-pledge-1percent.webp?w=1024",
    linkLabel: "Learn more"
  },
  {
    title: "Support the Sustainable Development Goals.",
    description: "Join the United Nations in advancing the SDGs — the global to-do list for people and the planet.",
    link: "https://www.salesforce.com/products/net-zero-cloud/overview/",
    image: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/features-sustainable-transformation_664065.webp?w=1024",
    linkLabel: "Learn more on Trailhead"
  }
];

export default function TakeActionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndexes, setOpenIndexes] = useState([false, false, false, false]);

  const toggleMobileAnswer = (index) => {
    setOpenIndexes((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <section id="take-action">
      <div className="py-12 md:py-16">
        {/* Mobile Layout */}
        <div className="mx-6 md:mx-20 lg:hidden">
          <header className="mb-6">
            <h2 className="text-[32px] text-brand-dark font-bold">Take action.</h2>
            <p className="mt-4 text-lg tracking-[0.020em]">
              We believe in the power of innovation and collective action to drive impact at scale. Join us.
            </p>
          </header>
          <div>
            {takeActionItems.map((item, index) => (
              <div key={index} className="faq-item border-b-[0.5px] border-gray-200">
                <div className="flex justify-between items-center pt-[22px] pb-5 md:pt-[28px] md:pb-6">
                  <span className="text-[17px] text-brand-dark font-bold md:text-xl w-[75vw]">
                    {item.title}
                  </span>
                  <button
                    onClick={() => toggleMobileAnswer(index)}
                    className="toggle-btn flex justify-center items-center rounded-full bg-brand w-[25px] h-[25px]"
                  >
                    {openIndexes[index] ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 3" fill="#032d60" className="w-[14px] h-[2px]">
                        <path d="M24 2.25c0 .4-.35.75-.75.75H.75C.35 3 0 2.65 0 2.25V.75C0 .35.35 0 .75 0h22.5c.4 0 .75.35.75.75v1.5Z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="#032d60" className="w-[13px] h-[13px]">
                        <path d="M13 12.5h8.25c.4 0 .75-.35.75-.75v-1.5c0-.4-.35-.75-.75-.75H13c-.3 0-.5-.2-.5-.5V.75c0-.4-.35-.75-.75-.75h-1.5c-.4 0-.75.35-.75.75V9c0 .3-.2.5-.5.5H.75c-.4 0-.75.35-.75.75v1.5c0 .4.35.75.75.75H9c.3 0 .5.2.5.5v8.25c0 .4.35.75.75.75h1.5c.4 0 .75-.35.75-.75V13c0-.3.2-.5.5-.5Z" />
                      </svg>
                    )}
                  </button>
                </div>
                {openIndexes[index] && (
                  <div className="text-base pb-6 md:pb-8">
                    <p className="mb-[14px]">{item.description}</p>
                    <a href={item.link} target="_self" className="text-brand-light underline hover:no-underline">
                      {item.linkLabel}
                    </a>
                    <div className="flex md:justify-center">
                      <img src={item.image} alt="" className="rounded-2xl mb-8 md:w-[340px] md:h-[226px]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex mx-12 gap-8 xl:gap-[150px] xl:max-w-[1280px] xl:justify-center xl:mx-auto">
          <div className="flex-1 flex xl:flex-none">
            <img
              src={takeActionItems[activeIndex].image}
              alt="Main visual"
              className="rounded-2xl w-[448px] h-[298px] xl:w-[620px] xl:h-[413px]"
            />
          </div>
          <div className="flex-1 -mt-2 xl:flex-none xl1440:w-[510px]">
            <header className="mb-12">
              <h2 className="text-[32px] text-brand-dark font-bold xl:text-[40px]">Take action.</h2>
              <p className="mt-4 text-lg tracking-[0.020em]">
                We believe in the power of innovation and collective action to drive impact at scale. Join us.
              </p>
            </header>
            <div className="border-l-2 border-gray-200">
              {takeActionItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`pl-6 ${index !== 0 ? "py-[36px]" : "pb-[36px]"} tab-section cursor-pointer ${
                    activeIndex === index ? "pl-5 pb-2 pt-0 border-l-4 border-brand-light" : "border-l-0"
                  }`}
                >
                  <h3 className="w-full">
                    <button
                      className={`tab-btn1 text-xl tracking-wide text-left w-full font-bold whitespace-normal ${
                        activeIndex === index ? "text-brand-light" : "text-brand-dark"
                      }`}
                    >
                      {item.title}
                    </button>
                  </h3>
                  {activeIndex === index && (
                    <div className="text-base pt-2">
                      <p className="mb-[14px]">{item.description}</p>
                      <a
                        href={item.link}
                        target="_self"
                        className="text-brand-light underline hover:no-underline"
                      >
                        {item.linkLabel}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "people", label: "People" },
  { id: "planet", label: "Planet" },
  { id: "communities", label: "Communities" },
  { id: "technology", label: "Technology" },
  { id: "governance", label: "Governance" },
];

function ImpactComp() {
  const [activeTab, setActiveTab] = useState("people");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const renderTabContent = (id) => {
    const contentMap = {
      people: [
        {
          title: "People",
          text: "We strive to create a workplace that reflects the communities we serve...",
          links: [
            {
              text: "Learn more about Equality",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-people-equality.webp?resize=768,432",
            },
            {
              text: "Learn more about Employee Experience",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-people-employee.webp?resize=768,432",
            },
            {
              text: "Learn more about Accessibility",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-people-accessibility.jpg?w=1024",
            },
          ],
        },
      ],
      planet: [
        {
          title: "Planet",
          text: "We take bold action to address the climate crisis...",
          links: [
            {
              text: "Learn more about Sustainability",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-planet-sustainability.jpg?w=1024",
            },
            {
              text: "Learn more about Nature Initiatives",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-planet-nature.webp?w=1024",
            },
            {
              text: "Explore Sustainability Resources",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-planet-equality.webp?w=1024",
            },
          ],
        },
      ],
      communities: [
        {
          title: "Communities",
          text: "We give back to our communities, support our ecosystem...",
          links: [
            {
              text: "Learn more about Philanthropy",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-communities-equality.webp?w=1024",
            },
            {
              text: "Learn more about the Trailblazer Ecosystems",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-communities-accessibility.webp?w=1024",
            },
            {
              text: "Learn more about Partner Programs",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-communities-trailblazer.webp?w=1024",
            },
          ],
        },
      ],
      technology: [
        {
          title: "Technology",
          text: "Trust, privacy, security, ethics, and inclusion are at the center...",
          links: [
            {
              text: "Learn more about Ethical and Inclusive Products",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-technology-inclusive.webp?w=1024",
            },
            {
              text: "Learn more about Net Zero Cloud",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-technology-trailblazer.jpg?w=1024",
            },
            {
              text: "Learn more about Trailhead",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-governance-trailhead.webp?w=1024",
            },
          ],
        },
      ],
      governance: [
        {
          title: "Governance",
          text: "We create long-term value for all stakeholders through robust governance...",
          links: [
            {
              text: "Learn more about Public Policy",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-governance-public.jpg?w=1024",
            },
            {
              text: "Learn more about Human Rights",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-governance-trailhead.webp?w=1024",
            },
            {
              text: "Explore ESG Reports and Policies",
              img: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/04/horizontal-governance-impact.jpg?w=1024",
            },
          ],
        },
      ],
    };

    const content = contentMap[id];
    if (!content) return null;

    return content.map((section, i) => (
      <div key={i} className="pt-12 md:py-16 flex flex-col items-center gap-10">
        <h2 className="text-3xl xl:text-4xl font-bold text-brand-dark">{section.title}</h2>
        <p className="text-center text-lg max-w-2xl">{section.text}</p>
        <div className="flex flex-col md:flex-row gap-6 xl:gap-14">
          {section.links.map((item, j) => (
            <article
              key={j}
              className="flex flex-col items-center text-center max-w-sm"
            >
              <img
                src={item.img}
                alt={item.text}
                className="rounded-2xl mb-4"
              />
              <Link
                to=""
                className="text-brand-dark underline font-semibold text-base"
              >
                {item.text}
              </Link>
            </article>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-16">
      <div className="mx-auto px-6 md:px-8 lg:px-12 max-w-[1440px]">
        <h2 className="text-[34px] lg:text-[40px] text-center font-bold text-brand-dark">
          Integrating impact across our business.
        </h2>

        {/* Tab Buttons */}
        <ul className="flex flex-wrap justify-between md:justify-center gap-2 md:gap-4 border-b border-[#C9C9C9] mt-6">
          {tabs.slice(0, 2).map((tab) => (
            <li key={tab.id}>
              <button
                className={`tab-btn p-3 md:px-6 md:pt-4 md:pb-3 ${
                  activeTab === tab.id
                    ? "border-b-4 border-brand-light text-brand-light font-semibold"
                    : "hover:border-b-4 hover:border-brand-light"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="text-sm md:text-[17px] font-bold">
                  {tab.label}
                </span>
              </button>
            </li>
          ))}

          {/* Mobile Dropdown */}
          <li className="relative md:hidden" ref={dropdownRef}>
            <button
              className="p-2 flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              More <span className="ml-1">⋯</span>
            </button>
            {showDropdown && (
              <ul className="absolute bg-white border rounded shadow-md mt-2 right-0 z-10 w-40">
                {tabs.slice(2).map((tab) => (
                  <li key={tab.id}>
                    <button
                      className="w-full text-left p-3 hover:bg-gray-100"
                      onClick={() => {
                        setActiveTab(tab.id);
                        setShowDropdown(false);
                      }}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Desktop tabs */}
          {tabs.slice(2).map((tab) => (
            <li className="hidden md:block" key={tab.id}>
              <button
                className={`tab-btn p-3 md:px-6 md:pt-4 md:pb-3 ${
                  activeTab === tab.id
                    ? "border-b-4 border-brand-light text-brand-light font-semibold"
                    : "hover:border-b-4 hover:border-brand-light"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="text-sm md:text-[17px] font-bold">
                  {tab.label}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="mt-10">{renderTabContent(activeTab)}</div>
      </div>
    </section>
  );
}

export default ImpactComp;

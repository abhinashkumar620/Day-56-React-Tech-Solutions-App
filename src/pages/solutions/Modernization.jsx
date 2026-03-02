import React from "react";
import {
  FaCloudUploadAlt,
  FaDigitalTachograph,
  FaMicrochip,
  FaCodeBranch,
  FaMobileAlt,
  FaNetworkWired,
} from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";

const Modernization = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HERO */}
      <section className="relative py-20 sm:py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-violet-50"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Modernize. Optimize. Accelerate.
          </h1>

          <p className="mt-6 text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reinvent legacy systems, modernize infrastructure and transform
            business operations with next-generation cloud modernization solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Application Modernization",
              "Infrastructure Upgrade",
              "Cloud Native Architecture",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-violet-100 border border-violet-300 
                rounded-full text-violet-700 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-violet-700 mb-16">
          Modernization Services We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCloudUploadAlt />,
              title: "Cloud Migration & Re-hosting",
              desc: "Lift-and-shift migration of infrastructure & apps for faster performance and reduced operational overhead.",
            },
            {
              icon: <FaDigitalTachograph />,
              title: "Legacy System Revamp",
              desc: "Transform outdated legacy applications into modern, secure and scalable architectures.",
            },
            {
              icon: <FaMicrochip />,
              title: "Microservices Architecture",
              desc: "Break monolithic systems into modular, distributed microservices for agility & scalability.",
            },
            {
              icon: <FaCodeBranch />,
              title: "CI/CD & DevOps Modernization",
              desc: "Adopt automated pipelines, GitOps, IAC and cloud-native delivery flows with zero downtime.",
            },
            {
              icon: <FaMobileAlt />,
              title: "UI/UX Modernization",
              desc: "Rebuild outdated interfaces into responsive, modern, fast and mobile-first digital experiences.",
            },
            {
              icon: <FaNetworkWired />,
              title: "Database Modernization",
              desc: "Move from legacy SQL/NoSQL systems to Cloud DBs like Aurora, DynamoDB, Cosmos & AlloyDB.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200
              hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-violet-600 text-4xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-violet-700 mb-14">
            Why Modernization Is Essential
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              "Reduce maintenance costs & eliminate technical debt",
              "Improve application performance and scalability",
              "Strengthen security with modern cloud-native controls",
              "Accelerate innovation with automation & DevOps",
              "Increase productivity and reduce system downtime",
              "Enable multi-cloud readiness and future-proofing",
              "Migrate to microservices & container-based workflows",
              "Boost digital experiences with modern UI/UX stacks",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <BiCheckCircle className="text-violet-600 text-2xl mt-1" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-[90%] mx-auto px-3 sm:px-5 lg:px-7 py-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-violet-600 to-violet-700 
  rounded-2xl sm:rounded-3xl shadow-2xl text-white 
  px-6 sm:px-10 md:px-16 py-12 sm:py-16 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Modernize Your Applications with Confidence
          </h2>

          <p className="mt-4 sm:mt-6 text-violet-100 text-sm sm:text-base md:text-lg 
    max-w-2xl mx-auto leading-relaxed">
            Our experts help you modernize with zero disruption and maximum impact.
          </p>

          <button className="mt-8 sm:mt-10 bg-white text-violet-700 
    w-full sm:w-auto px-8 py-3 sm:py-4 rounded-xl 
    font-semibold text-base sm:text-lg 
    hover:scale-105 transition-all duration-300 shadow-md">
            Talk to Modernization Experts
          </button>

        </div>
      </section>




    </div>
  );
};

export default Modernization;
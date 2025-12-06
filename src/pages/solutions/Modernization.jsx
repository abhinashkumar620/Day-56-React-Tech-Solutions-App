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
    <div className="min-h-screen bg-slate-800 text-white font-sans">

      {/* HERO */}
      <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-800/20 to-slate-900/40 blur-3xl"></div>

        <h1 className="relative text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Modernize. Optimize. Accelerate.
        </h1>
        <p className="relative mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Reinvent legacy systems, modernize infrastructure and transform
          business operations with next-gen cloud modernization solutions.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <span className="px-3 py-1 sm:px-4 sm:py-2 bg-violet-700/20 border border-violet-500 rounded-full text-violet-300 text-xs sm:text-sm">
            Application Modernization
          </span>
          <span className="px-3 py-1 sm:px-4 sm:py-2 bg-violet-700/20 border border-violet-500 rounded-full text-violet-300 text-xs sm:text-sm">
            Infrastructure Upgrade
          </span>
          <span className="px-3 py-1 sm:px-4 sm:py-2 bg-violet-700/20 border border-violet-500 rounded-full text-violet-300 text-xs sm:text-sm">
            Cloud Native Architecture
          </span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-violet-400 mb-12 sm:mb-16">
          Modernization Services We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
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
              className="bg-slate-900/70 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-700
              hover:border-violet-500/70 hover:shadow-violet-500/20 hover:-translate-y-1
              transition-all duration-300"
            >
              <div className="text-violet-400 text-4xl sm:text-5xl mb-4 sm:mb-6">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 w-11/12 sm:w-10/12 mx-auto rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-violet-400 mb-10 sm:mb-14">
          Why Modernization Is Essential
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <BiCheckCircle className="text-violet-500 text-2xl sm:text-3xl mt-1" />
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-24 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Modernize Your Applications with Confidence
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-4 text-xs sm:text-sm md:text-lg">
          Our experts help you modernize with zero disruption and maximum impact.
        </p>

        <button className="mt-6 sm:mt-8 bg-violet-600 rounded-br-3xl hover:bg-violet-700 text-white py-2 sm:py-3 px-6 sm:px-10 
        rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-violet-500/40 transition-all duration-300">
          Talk to Modernization Experts
        </button>
      </section>

    </div>
  );
};

export default Modernization;

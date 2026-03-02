import React from 'react';
import { FaCloud, FaShieldAlt, FaTools, FaServer, FaCheckCircle, FaCogs } from "react-icons/fa";

const resources = [
  {
    category: "Optimization",
    title: "Cloud Cost Optimization Guide",
    description:
      "Interactive infographic with proven FinOps strategies, rightsizing techniques, and architectural patterns to reduce cloud infrastructure costs by 50-90%.",
    icon: <FaTools className="text-3xl sm:text-4xl text-violet-600" />,
  },
  {
    category: "Security",
    title: "Cybersecurity Best Practices 2025",
    description:
      "Interactive guide covering Zero Trust Architecture, AI-powered defense, XDR implementation, and post-quantum cryptography preparation.",
    icon: <FaShieldAlt className="text-3xl sm:text-4xl text-violet-600" />,
  },
  {
    category: "Migration",
    title: "Cloud Migration Checklist",
    description:
      "Interactive 75-point technical checklist covering assessment, compliance, networking, data migration, and optimization.",
    icon: <FaCloud className="text-3xl sm:text-4xl text-violet-600" />,
  },
  {
    category: "Architecture",
    title: "Multi-Cloud Strategy Guide",
    description:
      "Technical framework for implementing multi-cloud architecture including networking, DR strategy, and avoiding vendor lock-in.",
    icon: <FaServer className="text-3xl sm:text-4xl text-violet-600" />,
  },
  {
    category: "Compliance",
    title: "Cloud Compliance Framework",
    description:
      "SOC 2, ISO 27001, GDPR, HIPAA & PCI DSS compliance roadmap with audit checklist and implementation guide.",
    icon: <FaCheckCircle className="text-3xl sm:text-4xl text-violet-600" />,
  },
  {
    category: "DevOps",
    title: "DevOps Best Practices",
    description:
      "CI/CD pipelines, Infrastructure as Code, automated testing, DevSecOps integration, and monitoring strategies.",
    icon: <FaCogs className="text-3xl sm:text-4xl text-violet-600" />,
  },
];

const Resource = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-6 py-16 flex flex-col gap-20">

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Resource Center
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Explore our collection of guides, whitepapers, and case studies to
          help you navigate cloud computing and cybersecurity.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl 
            p-6 flex flex-col gap-4 shadow-sm 
            hover:shadow-xl hover:-translate-y-2 
            transition-all duration-300"
          >
            <div className="bg-violet-100 p-4 rounded-xl w-fit">
              {res.icon}
            </div>

            <span className="text-xs sm:text-sm text-violet-600 font-medium">
              {res.category}
            </span>

            <h3 className="text-lg sm:text-xl font-semibold">
              {res.title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {res.description}
            </p>

            <button className="mt-auto bg-violet-600 hover:bg-violet-700 
            text-white py-2 px-5 rounded-lg font-semibold 
            transition-all duration-300 w-full sm:w-auto">
              View Guide
            </button>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Have a specific question?
        </h2>
        <p className="text-gray-600">
          Our team of experts is here to help.
        </p>
        <button className="bg-violet-600 hover:bg-violet-700 
        text-white py-3 px-8 rounded-xl font-semibold 
        transition-all duration-300">
          Contact Us
        </button>
      </div>

      {/* Featured Download Section */}
      <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-200 
      rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col 
      lg:flex-row justify-between items-center gap-8">

        <div className="flex-1 space-y-3 text-center lg:text-left">
          <span className="text-sm font-semibold text-violet-600">
            FREE DOWNLOAD
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold">
            Free Cloud Migration Checklist
          </h3>

          <p className="text-gray-600 text-sm sm:text-base">
            Download our comprehensive cloud migration checklist to ensure
            a smooth transition. Includes 50+ essential checkpoints.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your business email"
            className="p-3 rounded-xl border border-gray-300 
            bg-white text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-violet-600 
            focus:border-violet-600 w-full sm:w-72"
          />
          <button className="bg-violet-600 hover:bg-violet-700 
          text-white py-3 px-6 rounded-xl font-semibold 
          transition-all duration-300">
            Get Free Checklist
          </button>
        </div>

      </div>

    </div>
  );
};

export default Resource;
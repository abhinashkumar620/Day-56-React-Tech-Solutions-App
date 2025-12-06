import React from 'react';
import { FaCloud, FaShieldAlt, FaTools, FaServer, FaCheckCircle, FaCogs } from "react-icons/fa";

const resources = [
  {
    category: "Optimization",
    title: "Cloud Cost Optimization Guide",
    description: "Interactive infographic with proven FinOps strategies, rightsizing techniques, and architectural patterns to reduce cloud infrastructure costs by 50-90%.",
    icon: <FaTools className="text-3xl sm:text-4xl text-white" />,
  },
  {
    category: "Security",
    title: "Cybersecurity Best Practices 2025",
    description: "Interactive guide covering Zero Trust Architecture, AI-powered defense, XDR implementation, and post-quantum cryptography preparation.",
    icon: <FaShieldAlt className="text-3xl sm:text-4xl text-white" />,
  },
  {
    category: "Migration",
    title: "Cloud Migration Checklist",
    description: "Interactive 75-point technical checklist covering pre-migration assessment, security configurations, compliance requirements, network architecture, data migration strategies, and post-migration optimization.",
    icon: <FaCloud className="text-3xl sm:text-4xl text-white" />,
  },
  {
    category: "Architecture",
    title: "Multi-Cloud Strategy Guide",
    description: "Interactive technical framework for implementing multi-cloud architecture including vendor selection criteria, inter-cloud networking, data synchronization, disaster recovery, and avoiding vendor lock-in.",
    icon: <FaServer className="text-3xl sm:text-4xl text-white" />,
  },
  {
    category: "Compliance",
    title: "Cloud Compliance Framework",
    description: "Detailed compliance requirements for SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS in cloud environments. Includes audit checklists and implementation roadmaps.",
    icon: <FaCheckCircle className="text-3xl sm:text-4xl text-white" />,
  },
  {
    category: "DevOps",
    title: "DevOps Best Practices",
    description: "Comprehensive guide to modern DevOps implementation including CI/CD pipelines, Infrastructure as Code, automated testing, security integration, and monitoring strategies.",
    icon: <FaCogs className="text-3xl sm:text-4xl text-white" />,
  },
];

const Resource = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white font-sans px-4 sm:px-6 py-12 flex flex-col gap-12">

      {/* Hero Section */}
      <div className="max-w-3xl sm:max-w-4xl mx-auto text-center flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Resource Center</h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
          Explore our collection of guides, whitepapers, and case studies to help you navigate the world of cloud computing and cybersecurity.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {resources.map((res, idx) => (
          <div key={idx} className="bg-slate-900 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300">
            <div className="bg-indigo-600 p-3 sm:p-4 rounded-full flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16">
              {res.icon}
            </div>
            <span className="text-xs sm:text-sm text-gray-400">{res.category}</span>
            <h3 className="text-lg sm:text-xl font-semibold">{res.title}</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">{res.description}</p>
            <button className="mt-auto bg-violet-600 hover:bg-violet-800 py-2 px-4 rounded-md font-semibold text-white text-sm sm:text-base">
              View Guide
            </button>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl sm:max-w-4xl mx-auto text-center flex flex-col gap-3 sm:gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Have a specific question?</h2>
        <p className="text-gray-300 text-sm sm:text-base">Our team of experts is here to help.</p>
        <button className="bg-violet-600 hover:bg-violet-800 py-2 px-6 sm:py-3 sm:px-8 rounded-md font-semibold text-sm sm:text-base mt-2">
          Contact Us
        </button>
      </div>

      {/* Featured Download Section */}
      <div className="max-w-4xl sm:max-w-5xl mx-auto bg-slate-900 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="flex-1 flex flex-col gap-2 sm:gap-3">
          <h2 className="text-lg sm:text-xl font-semibold">FREE </h2>
          <h3 className="text-xl sm:text-2xl font-bold">Free Cloud Migration Checklist</h3>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base">
            Download our comprehensive cloud migration checklist to ensure a smooth transition to the cloud. Includes 50+ essential checkpoints.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-auto">
          <input 
            type="email" 
            placeholder="Enter your business email" 
            className="p-2 sm:p-3 rounded-md text-black w-full sm:w-64 bg-transparent border-2 border-gray-400 focus:outline-none focus:border-violet-600"
          />
          <button className="bg-violet-600 hover:bg-violet-800 py-2 sm:py-3 px-4 sm:px-6 rounded-md font-semibold mt-2 text-sm sm:text-base">
            Get Free Checklist
          </button>
        </div>
      </div>

    </div>
  );
};

export default Resource;

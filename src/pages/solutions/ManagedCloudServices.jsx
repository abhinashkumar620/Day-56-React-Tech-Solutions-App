import React from "react";
import {
  FaCloud,
  FaLock,
  FaCogs,
  FaServer,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BiCheck } from "react-icons/bi";

const ManagedCloudServices = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HERO SECTION */}
      <section className="text-center py-20 sm:py-24 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Managed Cloud Services
        </h1>

        <p className="mt-6 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Empowering businesses with enterprise-grade Managed Cloud Services built 
          for performance, security and 24×7 reliability.
          <span className="text-violet-600 font-semibold block mt-2 text-sm sm:text-base">
            Trusted Multi-Cloud Partner (AWS • Azure • Google Cloud)
          </span>
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-violet-600 mb-14">
          Our Managed Cloud Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCloud />,
              title: "Cloud Operations (24/7)",
              desc: "Monitoring, patching, alerts & automated cloud performance management.",
            },
            {
              icon: <FaServer />,
              title: "Infrastructure Management",
              desc: "Deploy, scale & manage secure cloud-native and hybrid infrastructures.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Security & Compliance",
              desc: "IAM control, firewall audits, encryption & compliance-ready frameworks.",
            },
            {
              icon: <FaCogs />,
              title: "DevOps Automation",
              desc: "CI/CD pipelines, IaC, container orchestration & workflow automation.",
            },
            {
              icon: <FaTools />,
              title: "Cloud Optimization",
              desc: "Reduce cloud spend with FinOps, autoscaling & real-time cost reporting.",
            },
            {
              icon: <MdSupportAgent />,
              title: "Dedicated Cloud Support",
              desc: "Certified engineers available 24/7 for SLA-driven incident resolution.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl 
              border border-gray-200 
              shadow-md hover:shadow-xl 
              hover:border-violet-500 
              transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-violet-600 text-4xl mb-5">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-violet-600 mb-12">
            Why Businesses Trust Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Certified AWS, Azure & Google Cloud architects",
              "99.9% uptime with enterprise-grade SLAs",
              "Proactive monitoring & intelligent alerting",
              "FinOps-based cost optimization strategies",
              "End-to-end cloud security & compliance",
              "Zero-downtime operations & maintenance",
              "Hybrid & Multi-Cloud deployment expertise",
              "24/7 dedicated cloud support team",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="h-6 w-6 bg-violet-600 flex items-center justify-center rounded-full">
                  <BiCheck className="text-white text-base" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Ready to Transform Your Cloud Journey?
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg">
          Let certified experts manage your cloud while your team focuses on innovation.
        </p>

        <button
          className="mt-8 bg-violet-600 hover:bg-violet-700 text-white 
          py-3 px-8 rounded-lg font-semibold 
          transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
        >
          Talk to Cloud Experts
        </button>
      </section>

    </div>
  );
};

export default ManagedCloudServices;
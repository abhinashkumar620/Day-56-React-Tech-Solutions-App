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
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-800 text-white font-sans">

      {/* HERO SECTION */}
      <section className="text-center py-20 sm:py-24 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Managed Cloud Services
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Empowering businesses with enterprise-grade Managed Cloud Services built 
          for performance, security and 24×7 reliability.  
          <span className="text-violet-400 font-semibold block mt-2 text-sm sm:text-base">
            Trusted Multi-Cloud Partner (AWS • Azure • Google Cloud)
          </span>
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-violet-400 mb-10 sm:mb-14 drop-shadow-md">
          Our Managed Cloud Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
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
              className="bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl 
              shadow-xl border border-slate-700 hover:border-violet-500/60 
              hover:shadow-violet-500/30 transition-all duration-300 
              hover:-translate-y-1"
            >
              <div className="text-violet-400 text-4xl sm:text-5xl mb-4 sm:mb-5">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 mt-8 shadow-inner w-11/12 sm:w-10/12 mx-auto rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-violet-400 mb-8 sm:mb-12">
          Why Businesses Trust Us
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
              <div className="h-6 w-6 sm:h-7 sm:w-7 bg-violet-600 flex items-center justify-center rounded-full shadow-lg">
                <BiCheck className="text-white text-base sm:text-xl" />
              </div>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Ready to Transform Your Cloud Journey?
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm md:text-lg">
          Let certified experts manage your cloud while your team focuses on innovation.
        </p>

        <button
          className="mt-6 sm:mt-8 bg-violet-600 rounded-br-3xl hover:bg-violet-700 text-white 
          py-2 sm:py-3 px-6 sm:px-10 rounded-lg text-base sm:text-lg font-semibold 
          transition-all duration-300 shadow-lg hover:shadow-violet-500/40"
        >
          Talk to Cloud Experts
        </button>
      </section>
    </div>
  );
};

export default ManagedCloudServices;

import React from "react";
import { FaCode, FaCloud, FaMobileAlt, FaDatabase, FaTools, FaShieldAlt } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";

const TechStudio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-800 text-white font-sans">

      {/* HERO SECTION */}
      <section className="relative py-16 px-4 sm:py-24 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
            Tech Studio
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-300 max-w-xl leading-relaxed">
            Innovating the future of technology through software development, cloud solutions,
            and digital transformation.
            <span className="text-violet-400 font-semibold block mt-2 text-sm sm:text-base">
              Your Partner for Scalable, Secure, and Smart Solutions
            </span>
          </p>
        </div>

        {/* Right-Side Portal Card */}
        <div className="w-full md:w-[45%] relative flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="bg-violet-600 rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full max-w-sm text-white">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Tech Studio: Your Try & Buy Cloud Portal
            </h3>
            <p className="text-sm sm:text-base font-medium">
              Book a POC for ₹99
            </p>
            <button className="mt-4 w-full sm:w-auto inline-block bg-white text-violet-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-violet-400 mb-10 sm:mb-14 drop-shadow-md">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {[
            { icon: <FaCode />, title: "Custom Software Development", desc: "Building modern web & mobile applications tailored to your business." },
            { icon: <FaCloud />, title: "Cloud Solutions", desc: "Deploy, manage, and optimize multi-cloud and hybrid infrastructures." },
            { icon: <FaMobileAlt />, title: "Mobile App Development", desc: "Intuitive and responsive apps for iOS and Android platforms." },
            { icon: <FaDatabase />, title: "Data & Analytics", desc: "Turn raw data into actionable insights for smarter decisions." },
            { icon: <FaTools />, title: "DevOps & Automation", desc: "Streamline software delivery and operations with modern practices." },
            { icon: <FaShieldAlt />, title: "Cybersecurity Solutions", desc: "Protect your applications and infrastructure with enterprise-grade security." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl 
              shadow-xl border border-slate-700 hover:border-violet-500/60 
              hover:shadow-violet-500/30 transition-all duration-300 
              hover:-translate-y-2"
            >
              <div className="text-violet-400 text-4xl sm:text-5xl mb-4 sm:mb-5">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-900 py-10 sm:py-16 px-4 sm:px-6 mt-8 shadow-inner w-11/12 mx-auto rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-violet-400 mb-8 sm:mb-12">
          Why Choose Tech Studio
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            "Expert developers & cloud architects",
            "High-performance and scalable solutions",
            "Proactive monitoring & reliable support",
            "Cost-effective software & cloud services",
            "End-to-end security & compliance",
            "Agile project management & delivery",
            "Innovative digital transformation strategies",
            "24/7 expert assistance for critical issues",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 sm:gap-4 items-start">
              <div className="h-6 w-6 sm:h-7 sm:w-7 bg-violet-600 flex items-center justify-center rounded-full shadow-lg">
                <BiCheck className="text-white text-base sm:text-xl" />
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Ready to Innovate with Tech Studio?
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm md:text-lg">
          Let our team of experts transform your ideas into robust, scalable, and secure solutions.
        </p>

        <button
          className="mt-6 sm:mt-8 bg-violet-600 hover:bg-violet-700 text-white 
          py-2 sm:py-3 px-6 sm:px-10 rounded-lg text-sm sm:text-lg font-semibold 
          transition-all duration-300 shadow-lg hover:shadow-violet-500/40"
        >
          Talk to Our Experts
        </button>
      </section>
    </div>
  );
};

export default TechStudio;

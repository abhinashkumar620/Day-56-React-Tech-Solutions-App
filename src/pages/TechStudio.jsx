import React from "react";
import { FaCode, FaCloud, FaMobileAlt, FaDatabase, FaTools, FaShieldAlt } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";

const TechStudio = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HERO SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto 
      flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Tech Studio
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Innovating the future of technology through software development, cloud solutions,
            and digital transformation.
            <span className="block mt-3 text-violet-600 font-semibold">
              Your Partner for Scalable, Secure, and Smart Solutions
            </span>
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full md:w-[45%]">
          <div className="bg-violet-600 text-white p-6 sm:p-8 rounded-3xl shadow-xl text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Tech Studio: Your Try & Buy Cloud Portal
            </h3>
            <p className="mt-2 text-sm sm:text-base">
              Book a POC for ₹99
            </p>

            <button className="mt-5 w-full sm:w-auto bg-white text-violet-700 
            px-6 py-3 rounded-xl font-semibold 
            hover:scale-105 transition-all duration-300 shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-violet-700 mb-14">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="bg-white p-8 rounded-2xl border border-gray-200 
              shadow-sm hover:shadow-xl hover:-translate-y-2 
              transition-all duration-300"
            >
              <div className="text-violet-600 text-4xl mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-violet-700 mb-12">
            Why Choose Tech Studio
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
              <div key={index} className="flex gap-4 items-start">
                <div className="h-7 w-7 bg-violet-600 flex items-center justify-center rounded-full">
                  <BiCheck className="text-white text-lg" />
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
     <section className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
  <div className="bg-gradient-to-r from-violet-600 to-violet-700 
  text-white rounded-2xl sm:rounded-3xl 
  shadow-2xl px-6 sm:px-12 lg:px-16 
  py-12 sm:py-16 text-center">

    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
    font-bold leading-tight">
      Ready to Innovate with Tech Studio?
    </h2>

    <p className="mt-5 sm:mt-6 text-violet-100 
    text-sm sm:text-base md:text-lg 
    max-w-2xl mx-auto leading-relaxed">
      Let our team of experts transform your ideas into robust,
      scalable, and secure solutions.
    </p>

    <button className="mt-8 sm:mt-10 
    w-full sm:w-auto 
    bg-white text-violet-700 
    px-8 py-3 sm:py-4 
    rounded-xl font-semibold 
    text-base sm:text-lg
    hover:scale-105 transition-all duration-300 shadow-md">
      Start Your Journey
    </button>

  </div>
</section>

    </div>
  );
};

export default TechStudio;
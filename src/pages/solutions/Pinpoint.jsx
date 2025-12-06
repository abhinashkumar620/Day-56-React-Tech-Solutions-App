import React from "react";
import { FaBullseye, FaChartLine, FaEnvelopeOpenText, FaUserShield } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";

const Pinpoint = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white font-sans">

      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-violet-800/20 blur-3xl animate-pulse"></div>
        <h1 className="relative text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Pinpoint Solutions
        </h1>
        <p className="relative mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Accurate insights, real-time analytics, and secure communication to drive business efficiency.
          <span className="block mt-2 sm:mt-3 text-violet-400 font-semibold">
            Data-driven strategies for measurable impact.
          </span>
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-violet-400 mb-12 sm:mb-16 drop-shadow-md">
          Pinpoint Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {[
            {
              icon: <FaBullseye />,
              title: "Targeted Analytics",
              desc: "Identify key opportunities and optimize your campaigns using actionable insights and predictive analytics.",
            },
            {
              icon: <FaChartLine />,
              title: "Performance Tracking",
              desc: "Real-time performance dashboards help you measure KPIs, trends, and ROI efficiently.",
            },
            {
              icon: <FaEnvelopeOpenText />,
              title: "Smart Messaging",
              desc: "Send targeted, personalized notifications and messages to your audience with automation.",
            },
            {
              icon: <FaUserShield />,
              title: "Secure Communication",
              desc: "Ensure safe and compliant data transmission across all platforms and devices.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/70 p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-700 
              hover:border-violet-500/60 hover:shadow-violet-500/20 hover:-translate-y-1 
              transition-all duration-300 transform-gpu cursor-pointer"
            >
              <div className="text-violet-400 text-4xl sm:text-5xl mb-4 sm:mb-6 animate-bounce">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 w-11/12 sm:w-10/12 mx-auto rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-violet-400 mb-10 sm:mb-14 drop-shadow-md">
          Why Pinpoint?
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            "Gain actionable insights in real-time",
            "Boost campaign efficiency and ROI",
            "Ensure secure, compliant data management",
            "Optimize customer engagement and retention",
            "Integrate seamlessly with your workflows",
            "Track progress and KPIs dynamically",
            "Leverage AI-powered predictions for growth",
            "Simplify operations with intelligent automation",
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4 animate-fadeIn">
              <BiCheckCircle className="text-violet-500 text-2xl sm:text-3xl mt-1" />
              <p className="text-gray-300 text-sm sm:text-base">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-16 sm:py-24 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Take Control with Pinpoint
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-4 text-xs sm:text-sm md:text-lg">
          Unlock precision, analytics, and secure communication for your business.
        </p>

        <button className="mt-6 sm:mt-8 bg-violet-600 rounded-br-3xl hover:bg-violet-700 text-white py-2 sm:py-3 px-6 sm:px-10 
        rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-violet-500/40 transition-all duration-300 animate-bounce">
          Get Started with Pinpoint
        </button>
      </section>
    </div>
  );
};

export default Pinpoint;

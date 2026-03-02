import React from "react";
import { FaBullseye, FaChartLine, FaEnvelopeOpenText, FaUserShield } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";

const Pinpoint = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-violet-50"></div>

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Pinpoint Solutions
          </h1>

          <p className="mt-6 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Accurate insights, real-time analytics, and secure communication to drive business efficiency.
            <span className="block mt-3 text-violet-600 font-semibold">
              Data-driven strategies for measurable impact.
            </span>
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-violet-700 mb-16">
          Pinpoint Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm
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

      {/* BENEFITS SECTION */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-violet-700 mb-14">
            Why Pinpoint?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
              <div key={index} className="flex items-start gap-4">
                <BiCheckCircle className="text-violet-600 text-2xl mt-1" />
                <p className="text-gray-700 text-sm sm:text-base">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-[90%] mx-auto px-3 sm:px-5 lg:px-7 py-10 sm:py-16">
  <div className="bg-violet-600 text-white 
  p-8 sm:p-12 md:p-14 
  rounded-2xl sm:rounded-3xl 
  shadow-xl text-center">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
      Take Control with Pinpoint
    </h2>

    <p className="mt-4 sm:mt-6 text-violet-100 text-sm sm:text-base md:text-lg 
    max-w-2xl mx-auto leading-relaxed">
      Unlock precision, analytics, and secure communication for your business.
    </p>

    <button className="mt-8 sm:mt-10 
    w-full sm:w-auto 
    bg-white text-violet-700 
    px-8 py-3 sm:py-4 
    rounded-xl font-semibold 
    hover:scale-105 transition-all duration-300 shadow-md">
      Get Started Today
    </button>

  </div>
</section>

    </div>
  );
};

export default Pinpoint;
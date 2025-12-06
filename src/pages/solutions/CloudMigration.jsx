import React from "react";
import {
  FaCloudUploadAlt,
  FaSyncAlt,
  FaShieldAlt,
  FaServer,
  FaTools,
  FaLock,
} from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

import HeroImage from "../../assets/cloud-computing-inner-img.jpg";
import aws from "../../../src/assets/aws1.png";
import azure from "../../../src/assets/Azure.png";
import gcp from "../../../src/assets/google-cloud.svg";

const CloudMigration = () => {
  return (
    <div className="bg-slate-800 text-gray-300 font-sans">

      {/* HERO SECTION — Full Background Image */}
      <section className="relative w-full flex items-center">

        {/* Background Image for md+ only */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-20 py-16 md:py-32">
          {/* LEFT — TEXT */}
          <div className="text-center md:text-left max-w-xl space-y-4 md:space-y-6 text-gray-100">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-violet-500 drop-shadow-md leading-snug md:leading-tight">
              Cloud Migration Services
            </h1>
            <p className="text-sm sm:text-base md:text-xl leading-relaxed md:leading-relaxed">
              Move your workloads to the cloud with confidence. At
              <span className="font-semibold text-white"> Cloud Solutions</span>,
              we deliver secure, seamless, and scalable cloud migration services
              across AWS, Azure, and Google Cloud—ensuring business continuity
              and cost efficiency.
            </p>
            <p className="text-xs sm:text-sm md:text-lg text-gray-300 leading-relaxed md:leading-relaxed">
              Our comprehensive migration approach begins with deep assessment,
              helping us create a customized strategy aligned with your business
              goals and technical requirements.
            </p>
            <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg rounded-br-2xl font-semibold transition duration-300 hover:shadow-2xl hover:shadow-violet-600/40 transform hover:scale-105 text-sm sm:text-base md:text-lg">
              <MdOutlineMessage size={20} className="sm:!w-5 sm:!h-5 md:!w-6 md:!h-6" />
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="w-11/12 md:w-10/12 mx-auto text-center mt-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-400">
          Our Cloud Migration Offerings
        </h2>
        <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Our cloud migration services streamline the transition to AWS, Azure,
          and Google Cloud, ensuring minimal disruption and maximum efficiency.
        </p>

        {/* Cloud Providers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 bg-slate-700 py-8 px-4 sm:px-10 rounded-xl shadow-xl">
          <div className="flex justify-center">
            <img src={aws} alt="AWS" className="w-24 sm:w-20 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src={azure} alt="Azure" className="w-24 sm:w-28 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src={gcp} alt="Google Cloud" className="w-24 sm:w-28 object-contain" />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-400 mb-12 text-center">
          Our Cloud Migration Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {[{
              icon: <FaCloudUploadAlt className="text-violet-400 text-4xl mb-4" />,
              title: "Cloud Adoption & Strategy",
              desc: "Build a clear migration roadmap aligned with your business goals.",
            },
            {
              icon: <FaSyncAlt className="text-violet-400 text-4xl mb-4" />,
              title: "Application Migration",
              desc: "Rehost, replatform, or refactor apps for cloud scalability.",
            },
            {
              icon: <FaServer className="text-violet-400 text-4xl mb-4" />,
              title: "Server & Database Migration",
              desc: "Migrate databases and servers to cloud-native environments with zero downtime.",
            },
            {
              icon: <FaShieldAlt className="text-violet-400 text-4xl mb-4" />,
              title: "Security & Compliance",
              desc: "Ensure IAM, encryption, audits, and regulatory compliance.",
            },
            {
              icon: <FaTools className="text-violet-400 text-4xl mb-4" />,
              title: "Infrastructure Modernization",
              desc: "Adopt DevOps, containers, microservices & automation.",
            },
            {
              icon: <FaLock className="text-violet-400 text-4xl mb-4" />,
              title: "Post-Migration Support",
              desc: "Gain continuous optimization, monitoring, and cost-management.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/30 border border-transparent hover:border-violet-500 transition-all duration-500 transform hover:-translate-y-2"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-violet-400 mb-4">{service.title}</h3>
              <p className="leading-relaxed text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      
      </section>
    </div>
  );
};

export default CloudMigration;

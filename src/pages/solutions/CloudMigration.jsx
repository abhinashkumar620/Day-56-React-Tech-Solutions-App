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
    <div className="bg-white text-gray-800 font-sans">

    {/* HERO SECTION */}
<section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
  <div className="w-11/12 md:w-10/12 mx-auto flex flex-col items-center text-center space-y-8">

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
      Enterprise-Grade
      <span className="text-violet-600"> Cloud Migration Services</span>
    </h1>

    {/* Description */}
    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
      Move your workloads to the cloud with confidence. At
      <span className="font-semibold text-violet-600"> Cloud Solutions</span>,
      we deliver secure, seamless, and scalable migration across AWS, Azure, and Google Cloud —
      ensuring business continuity and cost efficiency.
    </p>

  </div>
</section>


{/* OFFERINGS SECTION */}
<section className="w-full py-20 bg-white">
  <div className="w-11/12 md:w-10/12 mx-auto text-center space-y-6">

    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      Our Cloud Migration Offerings
    </h2>

    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
      We streamline your transition to the cloud with minimal disruption and maximum efficiency.
    </p>

    {/* Cloud Provider Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">

      {/* AWS */}
      <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <img src={aws} alt="AWS" className="w-20 mx-auto mb-4 object-contain" />
        <h3 className="font-semibold text-lg text-gray-800">AWS Migration</h3>
      </div>

      {/* Azure */}
      <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <img src={azure} alt="Azure" className="w-20 mx-auto mb-4 object-contain" />
        <h3 className="font-semibold text-lg text-gray-800">Azure Migration</h3>
      </div>

      {/* GCP */}
      <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <img src={gcp} alt="Google Cloud" className="w-20 mx-auto mb-4 object-contain" />
        <h3 className="font-semibold text-lg text-gray-800">Google Cloud Migration</h3>
      </div>

    </div>

  </div>
</section>
      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-violet-600 mb-12 text-center">
          Our Cloud Migration Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              icon: <FaCloudUploadAlt className="text-violet-600 text-4xl mb-4" />,
              title: "Cloud Adoption & Strategy",
              desc: "Build a clear migration roadmap aligned with your business goals.",
            },
            {
              icon: <FaSyncAlt className="text-violet-600 text-4xl mb-4" />,
              title: "Application Migration",
              desc: "Rehost, replatform, or refactor apps for cloud scalability.",
            },
            {
              icon: <FaServer className="text-violet-600 text-4xl mb-4" />,
              title: "Server & Database Migration",
              desc: "Migrate databases and servers to cloud-native environments with zero downtime.",
            },
            {
              icon: <FaShieldAlt className="text-violet-600 text-4xl mb-4" />,
              title: "Security & Compliance",
              desc: "Ensure IAM, encryption, audits, and regulatory compliance.",
            },
            {
              icon: <FaTools className="text-violet-600 text-4xl mb-4" />,
              title: "Infrastructure Modernization",
              desc: "Adopt DevOps, containers, microservices & automation.",
            },
            {
              icon: <FaLock className="text-violet-600 text-4xl mb-4" />,
              title: "Post-Migration Support",
              desc: "Gain continuous optimization, monitoring, and cost-management.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/20 border border-gray-200 hover:border-violet-500 transition-all duration-500 transform hover:-translate-y-2"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-violet-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};
export default CloudMigration;

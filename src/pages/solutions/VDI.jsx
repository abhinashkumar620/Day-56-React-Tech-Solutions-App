import React from "react";
import {
  FaDesktop,
  FaShieldAlt,
  FaUsersCog,
  FaNetworkWired,
  FaLock,
  FaServer,
  FaTools,
  FaCloud,
} from "react-icons/fa";

const VDI = () => {
  const features = [
    {
      icon: <FaDesktop />,
      title: "Virtual Desktop Deployment",
      desc: "Deliver high-performance virtual desktops accessible from any device.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Advanced Security",
      desc: "Zero-trust access, MFA, encryption, and secure endpoint management.",
    },
    {
      icon: <FaUsersCog />,
      title: "User & Role Management",
      desc: "Centralized management of user profiles, groups, and permissions.",
    },
    {
      icon: <FaNetworkWired />,
      title: "High-Speed Connectivity",
      desc: "Optimized network performance ensuring smooth user experience.",
    },
    {
      icon: <FaServer />,
      title: "Backend Infrastructure Setup",
      desc: "Robust servers and storage architecture for high availability.",
    },
    {
      icon: <FaLock />,
      title: "Data Protection",
      desc: "Centralized data storage prevents local machine data loss.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud or On-Prem Deployment",
      desc: "Choose cloud VDI (Azure, AWS), on-prem, or hybrid deployment.",
    },
    {
      icon: <FaTools />,
      title: "Monitoring & Support",
      desc: "24/7 monitoring, updates, performance tuning, and issue resolution.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen py-20 px-4 sm:px-6 font-sans">

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-600 leading-tight">
          Virtual Desktop Infrastructure (VDI)
        </h2>

        <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Deliver secure, scalable, and highly available virtual desktops to your workforce.
          Our VDI solutions empower businesses with centralized control, strong security,
          and seamless remote access — ideal for modern enterprises and hybrid teams.
        </p>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 sm:p-8 rounded-2xl 
            border border-gray-200 
            shadow-md hover:shadow-xl 
            hover:border-violet-500
            transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="text-violet-600 text-4xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-violet-600 mb-12">
          Why Choose Our VDI Solutions?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            "Centralized IT management reduces operational workload.",
            "Strong cybersecurity framework protects sensitive data.",
            "Seamless remote access boosts business productivity.",
            "Scalable infrastructure grows with your organization.",
            "Lower hardware cost using thin clients and shared resources.",
            "Reliable performance with guaranteed uptime.",
          ].map((point, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl 
              border border-gray-200 
              hover:border-violet-500
              transition-all duration-300"
            >
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default VDI;
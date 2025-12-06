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
  return (
    <div className="bg-slate-800 text-gray-200 min-h-screen py-20 px-6 font-sans">

      {/* HERO Section */}
      <div className="w-11/12 md:w-10/12 mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-400">
          Virtual Desktop Infrastructure (VDI)
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Deliver secure, scalable, and highly available virtual desktops to your workforce.
          Our VDI solutions empower businesses with centralized control, strong security,
          and seamless remote access—ideal for modern enterprises and hybrid teams.
        </p>
      </div>

      {/* FEATURES Section */}
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {[
          {
            icon: <FaDesktop className="text-violet-400 text-4xl mb-4" />,
            title: "Virtual Desktop Deployment",
            desc: "Deliver high-performance virtual desktops accessible from any device.",
          },
          {
            icon: <FaShieldAlt className="text-violet-400 text-4xl mb-4" />,
            title: "Advanced Security",
            desc: "Zero-trust access, MFA, encryption, and secure endpoint management.",
          },
          {
            icon: <FaUsersCog className="text-violet-400 text-4xl mb-4" />,
            title: "User & Role Management",
            desc: "Centralized management of user profiles, groups, and permissions.",
          },
          {
            icon: <FaNetworkWired className="text-violet-400 text-4xl mb-4" />,
            title: "High-Speed Connectivity",
            desc: "Optimized network performance ensuring smooth user experience.",
          },
          {
            icon: <FaServer className="text-violet-400 text-4xl mb-4" />,
            title: "Backend Infrastructure Setup",
            desc: "Robust servers and storage architecture for high availability.",
          },
          {
            icon: <FaLock className="text-violet-400 text-4xl mb-4" />,
            title: "Data Protection",
            desc: "Centralized data storage prevents local machine data loss.",
          },
          {
            icon: <FaCloud className="text-violet-400 text-4xl mb-4" />,
            title: "Cloud or On-Prem Deployment",
            desc: "Choose cloud VDI (Azure, AWS), on-prem, or hybrid deployment.",
          },
          {
            icon: <FaTools className="text-violet-400 text-4xl mb-4" />,
            title: "Monitoring & Support",
            desc: "24/7 monitoring, updates, performance tuning, and issue resolution.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-md 
              hover:shadow-xl hover:shadow-violet-500/30 
              border border-transparent hover:border-violet-500
              transition-all duration-500 transform hover:-translate-y-2"
          >
            {item.icon}
            <h3 className="text-xl font-bold text-violet-400 mb-3">{item.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* WHY CHOOSE US Section */}
      <div className="w-11/12 md:w-10/12 mx-auto mt-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-violet-400 mb-6">
          Why Choose Our VDI Solutions?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
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
              className="bg-slate-900 p-6 rounded-2xl border border-slate-700"
            >
              <p className="text-gray-300 text-sm sm:text-base">{point}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default VDI;

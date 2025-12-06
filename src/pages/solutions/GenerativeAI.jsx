import React from "react";
import {
  FaRobot,
  FaBrain,
  FaComments,
  FaCogs,
  FaMagic,
  FaCloud,
  FaNetworkWired,
  FaShieldAlt,
  FaMicrochip,
} from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";

const GenerativeAI = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-gray-200 py-16 px-4 sm:px-6 font-sans">

      {/* HERO SECTION */}
      <div className="w-full md:w-10/12 lg:w-9/12 mx-auto text-center mb-16 sm:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Enterprise <span className="text-violet-500">Generative AI Solutions</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Transform your business with advanced Generative AI. Build intelligent chatbots, automation systems, and LLM-powered experiences that scale across AWS, Azure, and Google Cloud platforms.
        </p>

        <div className="mt-6 flex justify-center">
          <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md rounded-br-2xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105">
            GET STARTED
          </button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="w-full md:w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {[
          { icon: <FaRobot />, title: "AI Chatbots & Assistants", desc: "Multi-language, 24/7 chatbots powered by enterprise-grade LLMs." },
          { icon: <FaBrain />, title: "Custom LLM Development", desc: "Train or fine-tune models tailored to your industry and workflows." },
          { icon: <FaMagic />, title: "Generative Content Creation", desc: "AI-driven content for documents, emails, analytics, and reports." },
          { icon: <FaCogs />, title: "AI Automation Workflows", desc: "Automate operations using intelligent AI-driven pipeline automation." },
          { icon: <FaComments />, title: "Conversational AI", desc: "Natural, human-like conversations with real-time context intelligence." },
          { icon: <FaNetworkWired />, title: "Enterprise Integration", desc: "Integrate AI with CRM, ERP, ticketing systems, cloud apps, and APIs." },
          { icon: <FaShieldAlt />, title: "AI Governance & Security", desc: "Zero-trust AI, compliance-ready, and enterprise guardrail systems." },
          { icon: <FaMicrochip />, title: "Edge & On-Prem AI", desc: "Run LLMs on-premise or edge with low-latency and secure control." },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-slate-900 p-6 sm:p-7 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/30 border border-transparent hover:border-violet-500 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="text-violet-400 text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-violet-400 mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* CLOUD PARTNERS */}
      <div className="w-full md:w-10/12 lg:w-9/12 mx-auto mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-violet-400 mb-4 sm:mb-6">Built on Trusted Cloud Platforms</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          As a cloud-certified partner, we deliver AI solutions optimized for AWS, Microsoft Azure, and Google Cloud — ensuring speed, security, and scalability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          {[
            { name: "Amazon Web Services (AWS)", desc: "Bedrock • SageMaker • Lex • Lambda AI" },
            { name: "Microsoft Azure", desc: "Azure OpenAI • Cognitive Services • ML Studio" },
            { name: "Google Cloud (GCP)", desc: "Vertex AI • Gemini • AI Platform" },
          ].map((cloud, i) => (
            <div key={i} className="bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-violet-500 transition-all">
              <FaCloud className="text-violet-400 text-4xl mx-auto mb-2 sm:mb-3" />
              <h4 className="text-lg sm:text-base font-semibold text-violet-300">{cloud.name}</h4>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">{cloud.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FUTURE SECTION */}
      <div className="w-full md:w-10/12 lg:w-9/12 mx-auto mt-16 sm:mt-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-violet-400 mb-3">Ready for 2026 – The Future of AI</h3>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Our AI solutions are engineered for the next era of innovation – autonomous workflows, real-time reasoning, compliant AI systems, and advanced multimodal intelligence combining text, vision, speech, and automation.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="w-full md:w-10/12 lg:w-9/12 mx-auto mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-3xl font-bold text-center text-violet-400 mb-6 sm:mb-8">Why Businesses Choose Our AI Platform</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            "Reduce manual workload by 70% with automated workflows.",
            "Deploy enterprise chatbots within days, not months.",
            "AI trained on your secure private datasets.",
            "Multi-cloud support: AWS, Azure, GCP.",
            "Enterprise-grade encryption & access control.",
            "Future-proof AI pipeline built for emerging LLMs.",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 p-3 sm:p-4 bg-slate-900 border border-slate-700 rounded-xl">
              <BiCheckCircle className="text-violet-400 text-xl sm:text-2xl" />
              <p className="text-gray-300 text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full md:w-10/12 lg:w-9/12 mx-auto mt-12 sm:mt-16 bg-slate-900 p-6 sm:p-8 rounded-xl text-center border border-slate-700">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-violet-400">Ready to Build Your AI-Powered Future?</h3>
        <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">Start your Generative AI journey today. Let’s build something extraordinary.</p>
        <button className="mt-4 sm:mt-5 bg-violet-600 hover:bg-violet-700 px-5 sm:px-6 py-2 sm:py-3 rounded-md rounded-br-2xl font-semibold transition-all duration-300 hover:scale-105">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default GenerativeAI;

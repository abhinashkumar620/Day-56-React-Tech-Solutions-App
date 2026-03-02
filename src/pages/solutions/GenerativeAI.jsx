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
  const features = [
    { icon: <FaRobot />, title: "AI Chatbots & Assistants", desc: "Multi-language, 24/7 chatbots powered by enterprise-grade LLMs." },
    { icon: <FaBrain />, title: "Custom LLM Development", desc: "Train or fine-tune models tailored to your industry and workflows." },
    { icon: <FaMagic />, title: "Generative Content Creation", desc: "AI-driven content for documents, emails, analytics, and reports." },
    { icon: <FaCogs />, title: "AI Automation Workflows", desc: "Automate operations using intelligent AI-driven pipeline automation." },
    { icon: <FaComments />, title: "Conversational AI", desc: "Natural, human-like conversations with real-time context intelligence." },
    { icon: <FaNetworkWired />, title: "Enterprise Integration", desc: "Integrate AI with CRM, ERP, ticketing systems, cloud apps, and APIs." },
    { icon: <FaShieldAlt />, title: "AI Governance & Security", desc: "Zero-trust AI, compliance-ready, and enterprise guardrail systems." },
    { icon: <FaMicrochip />, title: "Edge & On-Prem AI", desc: "Run LLMs on-premise or edge with low-latency and secure control." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 py-20 px-4 sm:px-6 font-sans">

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Enterprise <span className="text-violet-600">Generative AI Solutions</span>
        </h1>

        <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Transform your business with advanced Generative AI. Build intelligent chatbots,
          automation systems, and LLM-powered experiences that scale across AWS, Azure, and Google Cloud platforms.
        </p>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 
            shadow-md hover:shadow-xl hover:border-violet-500
            transition-all duration-500 hover:-translate-y-2"
          >
            <div className="text-violet-600 text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CLOUD PARTNERS */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-2xl sm:text-3xl text-center font-bold text-violet-600 mb-6">
          Built on Trusted Cloud Platforms
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-12">
          As a cloud-certified partner, we deliver AI solutions optimized for AWS,
          Microsoft Azure, and Google Cloud — ensuring speed, security, and scalability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { name: "Amazon Web Services (AWS)", desc: "Bedrock • SageMaker • Lex • Lambda AI" },
            { name: "Microsoft Azure", desc: "Azure OpenAI • Cognitive Services • ML Studio" },
            { name: "Google Cloud (GCP)", desc: "Vertex AI • Gemini • AI Platform" },
          ].map((cloud, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 
              hover:border-violet-500 hover:shadow-lg transition-all"
            >
              <FaCloud className="text-violet-600 text-4xl mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-900">
                {cloud.name}
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                {cloud.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FUTURE SECTION */}
      <div className="max-w-5xl mx-auto mt-24 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-violet-600 mb-4">
          Ready for 2026 – The Future of AI
        </h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          Our AI solutions are engineered for the next era of innovation —
          autonomous workflows, real-time reasoning, compliant AI systems,
          and advanced multimodal intelligence combining text, vision, speech, and automation.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-violet-600 mb-10">
          Why Businesses Choose Our AI Platform
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Reduce manual workload by 70% with automated workflows.",
            "Deploy enterprise chatbots within days, not months.",
            "AI trained on your secure private datasets.",
            "Multi-cloud support: AWS, Azure, GCP.",
            "Enterprise-grade encryption & access control.",
            "Future-proof AI pipeline built for emerging LLMs.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-gray-50 
              border border-gray-200 rounded-xl hover:border-violet-500 transition-all"
            >
              <BiCheckCircle className="text-violet-600 text-2xl mt-1" />
              <p className="text-gray-700 text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
     {/* CTA SECTION */}
<div className="w-[80%] mx-auto mt-24 bg-violet-600 rounded-md text-white py-12 px-4 sm:px-6 lg:px-16 shadow-lg">
  
  <div className="max-w-7xl mx-auto text-center">
    
    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
      Ready to Build Your AI-Powered Future?
    </h3>

    <p className="mt-3 text-sm sm:text-base text-violet-100 max-w-2xl mx-auto">
      Start your Generative AI journey today. Let’s build something extraordinary.
    </p>

    <button className="mt-6 bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
      Contact Us
    </button>

  </div>
</div>

    </div>
  );
};

export default GenerativeAI;
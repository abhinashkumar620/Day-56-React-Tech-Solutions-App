import React from 'react'
import support from './images/ai ml4.png'
import { FaChartLine, FaRobot, FaEye, FaUserCheck, FaCogs, FaBrain } from 'react-icons/fa'

const AIMl = () => {
  return (
    <div className="bg-slate-800 text-gray-300 min-h-screen font-sans flex flex-col">
      
      {/* Hero Section */}
      <section className="w-10/12  mt-20 mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 gap-12 md:gap-20">
        
        {/* Hero Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-500 mb-6 drop-shadow-md leading-tight">
            AI and ML Service Provider
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
            At <span className="font-semibold text-white">Cloud Solutions</span>, we harness AWS-powered AI & ML technologies 
            to transform data into powerful business insights. Automate workflows, accelerate innovation, 
            and make smarter decisions with our scalable solutions.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 sm:px-8 py-3 rounded-lg rounded-br-2xl font-semibold transition duration-300 hover:shadow-lg hover:shadow-violet-500/40 transform hover:scale-105">
            Request a Demo
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end w-full md:w-[45%]">
          <img
            src={support}
            alt="AI & ML Illustration"
            className="w-[250px] sm:w-[340px] md:w-[420px] lg:w-[480px] rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-700 hover:rotate-1 hover:shadow-violet-500/40 animate-float"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-400 mb-12 text-center">
          Our AI & ML Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          
          <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/30 border border-transparent hover:border-violet-500 transition-all duration-500 transform hover:-translate-y-2">
            <FaChartLine className="text-violet-400 text-3xl sm:text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-violet-400 mb-4">Predictive Analytics</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Turn historical data into future-ready strategies. Forecast trends, anticipate demand, and reduce operational risks.
            </p>
          </div>

          <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/30 border border-transparent hover:border-violet-500 transition-all duration-500 transform hover:-translate-y-2">
            <FaRobot className="text-violet-400 text-3xl sm:text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-violet-400 mb-4">Natural Language Processing (NLP)</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Automate text and speech analysis. Build chatbots, sentiment analysis tools, and document intelligence systems.
            </p>
          </div>

          <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/30 border border-transparent hover:border-violet-500 transition-all duration-500 transform hover:-translate-y-2">
            <FaEye className="text-violet-400 text-3xl sm:text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-violet-400 mb-4">Computer Vision</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Extract insights from images and videos. Solutions include object detection, quality inspection, and image recognition.
            </p>
          </div>

          <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/30 border border-transparent hover:border-violet-500 transition-all duration-500 transform hover:-translate-y-2">
            <FaUserCheck className="text-violet-400 text-3xl sm:text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-violet-400 mb-4">Recommendation Engines</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Deliver personalized experiences to users. Boost engagement, sales, and retention with AI-powered recommendations.
            </p>
          </div>

          <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/30 border border-transparent hover:border-violet-500 transition-all duration-500 transform hover:-translate-y-2">
            <FaCogs className="text-violet-400 text-3xl sm:text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-violet-400 mb-4">AI-Powered Automation</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Automate repetitive tasks and optimize workflows. Reduce human error and improve operational efficiency with AI.
            </p>
          </div>

          <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:shadow-violet-500/30 border border-transparent hover:border-violet-500 transition-all duration-500 transform hover:-translate-y-2">
            <FaBrain className="text-violet-400 text-3xl sm:text-4xl mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-violet-400 mb-4">Custom ML Models</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Tailored AI solutions built to solve your unique business challenges, ensuring scalability and high performance.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default AIMl

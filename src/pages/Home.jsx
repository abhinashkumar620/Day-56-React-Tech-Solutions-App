import React from 'react';
import { CgArrowsExpandUpRight } from "react-icons/cg";
import homeimg from '../assets/gfg5.gif';
import google from '../assets/download (2).png'
import aws from '../assets/aws1.png'
import azure from '../assets/Azure.png'
import fortinet from '../assets/fortinet.png'
import cisco from '../assets/cisco.png'
import { FaCloud } from "react-icons/fa";
import support from '../assets/fgg2.gif'
import { BiCheck } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";
import { IoInfiniteSharp } from "react-icons/io5";
import { CgDatabase } from "react-icons/cg";
import { RiSecurePaymentLine } from "react-icons/ri";
import { HiInboxArrowDown } from "react-icons/hi2";



const Home = () => {
  return (
    <div className='min-h-screen bg-slate-50  bg-slate-00 text-black font-tektur flex flex-col px-4 gap-14 py-10'>

      {/* Hero Section */}
      <div className='w-full mt-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 '>

        {/* Text Section */}
        <div className='w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left relative '>

          {/* Animated Background Circle */}
          <div className='absolute -top-10 -left-10'>
            <div className='h-40 w-40 bg-sky-600 rounded-full opacity-30 animate-ping' style={{ animationDuration: '3s' }}></div>
          </div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Enterprise
            <span className='text-violet-600'> Cloud Solutions for Modern Business</span>
          </h2>

          <p className='text-base sm:text-lg md:text-xl text-black'>
            Cloud Solutions delivers enterprise-grade cloud consulting with AWS, Azure & GCP certified architects. Trusted by 100+ organizations to reduce cloud costs by up to 50% while ensuring 99.9% uptime with our proven methodology.
          </p>

          <div className='flex justify-center md:justify-start'>
            <button className='flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold bg-violet-600 hover:bg-violet-800 py-2 sm:py-3 px-4 sm:px-6 rounded-md text-white border-2 border-violet-400 transition-all duration-300'>
              GET STARTED
              <CgArrowsExpandUpRight className='text-xl sm:text-2xl' />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 flex justify-center relative'>

          {/* Animated Bottom Circle */}
          <div className='absolute -bottom-10'>
            <div
              className='h-40 w-40 bg-sky-700 rounded-full opacity-30 animate-ping'
              style={{ animationDuration: '2.5s' }}
            ></div>
          </div>

          <img
            src={homeimg}
            alt="Animated Visual"
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl animate-float relative z-10'
          />
        </div>
        
        <div className='absolute -bootam-10 -left-10'>
          <div className='h-40 w-40 bg-sky-600 rounded-full opacity-30 animate-ping' style={{ animationDuration: '3s' }}></div>
        </div>
      </div>



      {/* Cloud Provider Logos Section */}
      <div className="w-full flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 px-4 sm:px-10 lg:px-20 mt-10 rounded-md shadow-2xl bg-slate-700  py-6">
        {/* AWS */}
        <div className="flex items-center justify-center w-14 sm:w-20 md:w-20">
          <img src={aws} alt="AWS" className="w-full h-auto object-contain" />
        </div>
        {/* Cisco */}
        <div className="flex items-center justify-center w-20 sm:w-20 md:w-30">
          <img src={cisco} alt="Cisco" className="w-full h-auto object-contain" />
        </div>
        {/* Google Cloud */}
        <div className="flex items-center gap-3 lg:gap-4 w-full sm:w-auto text-white">
          <img src={google} alt="Google Cloud" className="h-8 lg:h-10 object-contain" />
          <h4 className="text-base lg:text-lg font-semibold">Google Cloud</h4>
        </div>
        {/* Fortinet */}
        <div className="flex items-center justify-center w-24 sm:w-28 md:w-32">
          <img src={fortinet} alt="Fortinet" className="w-full h-auto object-contain" />
        </div>

        {/* Azure */}
        <div className="flex items-center justify-center w-24 sm:w-28 md:w-32">
          <img src={azure} alt="Azure" className="w-full h-auto object-contain" />
        </div>

      </div>

      {/* abou part Section */}
      <div className='w-11/12 mx-auto mt-10 flex flex-col lg:flex-row justify-between items-center'>
        {/* Text + Buttons Section */}
        <div className='w-full lg:w-[50%] flex flex-col-reverse lg:flex-col'>
          {/* Buttons (shown below on mobile, above on desktop) */}
          <div className='flex gap-2 sm:gap-4 md:gap-6 justify-center lg:justify-start flex-wrap mt-6 lg:mt-0'>
            <button className='hover:bg-violet-600  uppercase duration-300 hover:scale-105 transition-transform py-1.5 px-3 sm:px-4 border-2 border-violet-600 rounded-md  hover:text-white text-xs sm:text-sm'>
              Analytics
            </button>
            <button className='hover:bg-violet-600 uppercase duration-300 hover:scale-105 transition-transform py-1.5 px-3 sm:px-4 border-2 border-violet-600 rounded-md  hover:text-white text-xs sm:text-sm'>
              Support & Maintenance
            </button>
            <button className='hover:bg-violet-600 uppercase duration-300 hover:scale-105 transition-transform py-1.5 px-3 sm:px-4 border-2 border-violet-600 rounded-md  hover:text-white text-xs sm:text-sm'>
              Reporting
            </button>
          </div>

          {/* Heading + Text */}
          <div className='flex gap-4 flex-col mt-8 sm:mt-10'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl uppercase text-center lg:text-left'>
              24/7 support & control maintenance
            </h2>
            <p className='text-sm sm:text-base text-center lg:text-left text-black/60'>
              Discover how our expertise in cloud services and cybersecurity can help you achieve your goals. Contact our team for a free consultation and take the first step towards innovation.
            </p>
          </div>
        </div>


        {/* Image Section */}
        <div className='w-full lg:w-[35%] mt-10 lg:mt-20'>
          <img src={support} alt="Support" className='w-full object-cover rounded-md' />
        </div>
      </div>
      {/* Cloud Solutions part */}
      <div className="w-11/12 mx-auto mt-16 ">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">Enterprise Cloud & AWS Solutions</h2>
          <p className="text-sm sm:text-lg mt-2 text-gray-800">
            Scalable infrastructure. Reliable performance. Expert cloud strategy.
          </p>
        </div>

        {/* Content Section */}
        <div className="w-full bg-slate-700 mt-8 p-6 sm:p-10 rounded-lg flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-semibold leading-tight">
              Enabling Cloud For Everyone and Everywhere
            </h2>

            <div className="flex justify-center md:justify-start gap-3 mt-6 flex-nowrap">
              <button className="hover:bg-violet-600 border-2 border-violet-500 uppercase duration-300 hover:scale-105 transition-transform py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap">
                What I Do
              </button>
              <button className="hover:bg-violet-600 border-2 border-violet-500 uppercase duration-300 hover:scale-105 transition-transform py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap">
                My Expertise
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 text-gray-200">
            <p className="text-sm sm:text-lg leading-relaxed text-center md:text-left">
              <span className="text-violet-400 font-semibold">Cloud Solutions</span> is a trusted provider of{" "}
              <span className="text-violet-400 font-semibold">AWS & Cloud Consulting Services</span>.
              I help businesses transform their digital journey with scalable, secure, and cost-efficient cloud architectures that enhance performance and innovation.
              Whether you need to migrate to the cloud, modernize existing systems, or optimize your AWS infrastructure,
              I provide tailored cloud solutions designed to meet your specific business needs.
            </p>
          </div>
        </div>
      </div>
      {/* Cloud Solutions all methodologies */}
      <div className='w-11/12 mx-auto mt-16 justify-center gap-6'>
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-between items-center">

          {/* Card 1 */}
          <div className="w-full max-w-[350px] h-[400px] bg-slate-700 rounded-xl shadow-xl flex flex-col items-center p-6 gap-4 transition-transform duration-300 hover:scale-105 overflow-y-auto hide-scrollbar">
            <div className="bg-blue-500 p-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:scale-110">
              <FaCloud className="text-4xl text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-center text-white">Cloud Migration & Strategy</h2>
            <p className="text-sm text-white/60 text-center">
              Enterprise cloud migration with zero downtime. AWS, Azure & GCP certified architects deliver 40-60% cost reduction.
            </p>
            <div className="bg-blue-500  w-full p-4 flex items-center gap-3 justify-center rounded-xl transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold">50%</p>
              <p className="font-medium">Cost Reduction</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                AWS, Azure & GCP Certified
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Zero-downtime migration
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                40-60% cost optimization
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Multi-cloud strategy
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[350px] h-[400px] bg-slate-700 rounded-xl shadow-xl flex flex-col items-center p-6 gap-4 transition-transform duration-300 hover:scale-105 overflow-y-auto hide-scrollbar">
            <div className="bg-yellow-600 p-4 rounded-full cursor-pointer transition-all duration-300 hover:rotate-180 hover:scale-110">
              <IoInfiniteSharp className="text-4xl text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-center text-white">DevOps Transformation</h2>
            <p className="text-sm text-white/60 text-center">
              CI/CD pipelines and Infrastructure as Code implementation. Reduce deployment time by 80% with automated testing.
            </p>
            <div className="bg-yellow-600 w-full p-4 flex items-center gap-3 justify-center rounded-xl transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold">80%</p>
              <p className="font-medium">Faster Deploymen</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                CI/CD pipelines
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Infrastructure as Code
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Automated testing
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                80% faster deployments
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[350px] h-[400px] bg-slate-700 rounded-xl shadow-xl flex flex-col items-center p-6 gap-4 transition-transform duration-300 hover:scale-105 overflow-y-auto hide-scrollbar">
            <div className="bg-violet-600 p-4 rounded-full cursor-pointer transition-all duration-300  hover:scale-110">
              <AiFillSignal className="text-4xl text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-center text-white">AI & Data Analytics</h2>
            <p className="text-sm text-white/60 text-center">
              Machine learning and big data solutions on cloud platforms. Transform business intelligence with real-time analytics.
            </p>
            <div className="bg-violet-600 w-full p-4 flex items-center gap-3 justify-center rounded-xl transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold">3x</p>
              <p className="font-medium">Faster Insights</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Machine learning
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Real-time analytics
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Predictive models
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                3x faster insights
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full max-w-[350px] h-[400px] bg-slate-700 rounded-xl shadow-xl flex flex-col items-center p-6 gap-4 transition-transform duration-300 hover:scale-105 overflow-y-auto hide-scrollbar">
            <div className="bg-green-600 p-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-green-600 hover:scale-110">
              <CgDatabase className="text-4xl text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-center text-white">24/7 Cloud Operatio</h2>
            <p className="text-sm text-white/60 text-center">
              Proactive monitoring by certified cloud engineers. Guaranteed 99.9% uptime with automated scaling.
            </p>
            <div className="bg-green-600 w-full p-4 flex items-center gap-3 justify-center rounded-xl transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold">99.9%</p>
              <p className="font-medium">Uptime SLA</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Proactive monitoring
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Automated scaling
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Cost optimization
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Expert support
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="w-full max-w-[350px] h-[400px] bg-slate-700 rounded-xl shadow-xl flex flex-col items-center p-6 gap-4 transition-transform duration-300 hover:scale-105 overflow-y-auto hide-scrollbar">
            <div className="bg-red-600 p-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-red-600 hover:scale-110">
              <RiSecurePaymentLine className="text-4xl text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-center text-white">Enterprise Security</h2>
            <p className="text-sm text-white/60 text-center">
              Zero-trust security architecture with 24/7 SOC monitoring. Compliance-ready solutions for GDPR and SOX.
            </p>
            <div className="bg-red-600 w-full p-4 flex items-center gap-3 justify-center rounded-xl transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold">99.9%</p>
              <p className="font-medium">Threat Prevention</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                24/7 SOC monitoring
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Zero-trust architecture
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                GDPR & SOX compliance
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Advanced threat detection
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="w-full max-w-[350px] h-[400px] bg-slate-700 rounded-xl shadow-xl flex flex-col items-center p-6 gap-4 transition-transform duration-300 hover:scale-105 overflow-y-auto hide-scrollbar">
            <div className="bg-gray-600 p-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-600 hover:scale-110">
              <HiInboxArrowDown className="text-4xl text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-center text-white">Disaster Recovery</h2>
            <p className="text-sm text-white/60 text-center">
              Enterprise-grade backup and business continuity planning. RTO  4 hours and RPO  15 minutes.
            </p>
            <div className="bg-gray-600 w-full p-4 flex items-center gap-3 justify-center rounded-xl transition-all duration-300 hover:scale-105">
              <p className="text-2xl font-bold">4 h</p>
              <p className="font-medium">Recovery Time</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Multi-region redundancy
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                RTO  4 hours
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                RPO  15 minutes
              </p>
              <p className="flex items-center gap-2 p-2 rounded-md transition-all hover:bg-slate-600 text-white text-sm">
                <span className="h-5 w-5 bg-sky-500 rounded-full flex justify-center items-center">
                  <BiCheck className="text-white text-sm" />
                </span>
                Business continuity
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* Free Consultation section  */}
      <div className="w-full mx-auto bg-slate-700 mt-10 p-6 sm:p-10 rounded-lg flex flex-col justify-between items-center gap-8">

        {/* 🟣 Inner Container */}
        <div className="w-full md:w-11/12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">

          {/* 🔵 Left Section */}
          <div className="text-center md:text-left md:w-1/2 space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
              Ready to <br className="sm:hidden" />
              Transform Your Business?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-sm mx-auto md:mx-0">
              Start your digital voyage by taking the first step right now!
            </p>
          </div>

          {/* 🟢 Right Section */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 md:w-72 p-2 sm:p-2.5 bg-transparent border-2 border-violet-500 text-white rounded-md 
        focus:outline-none focus:ring-2 focus:ring-violet-600 placeholder-slate-400 transition-all duration-300 text-sm sm:text-base"
            />

            <button
              className="uppercase duration-300 hover:scale-105 transition-transform py-2 px-5 border-2 border-violet-600 rounded-md  text-xs sm:text-sm md:text-base text-white 
        hover:bg-violet-600 shadow-[0_4px_6px_0_rgba(124,58,237,0.4)]"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>

    </div>

  );
};

export default Home;

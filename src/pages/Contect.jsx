import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen  bg-white px-4 sm:px-6 py-16">
      
      <div className="max-w-5xl  mx-auto bg-white border border-violet-600  
      rounded-3xl shadow-xl p-6 sm:p-12">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Get in Touch
        </h2>

        <p className="text-gray-600 text-sm sm:text-base text-center 
        mt-4 max-w-2xl mx-auto">
          Fill out the form below to book a consultation or a POC for your organization.  
          We’ll get back to you promptly.
        </p>

        {/* Form */}
        <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl border border-gray-300 
            bg-white text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-violet-600 
            focus:border-violet-600 transition-all duration-200"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl border border-gray-300 
            bg-white text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-violet-600 
            focus:border-violet-600 transition-all duration-200"
          />

          {/* Company */}
          <input
            type="text"
            placeholder="Company Name"
            required
            className="w-full p-4 rounded-xl border border-gray-300 
            bg-white text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-violet-600 
            focus:border-violet-600 transition-all duration-200"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-4 rounded-xl border border-gray-300 
            bg-white text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-violet-600 
            focus:border-violet-600 transition-all duration-200"
          />

          {/* Location */}
          <input
            type="text"
            placeholder="Location / Address"
            required
            className="w-full p-4 rounded-xl border border-gray-300 
            bg-white text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-violet-600 
            focus:border-violet-600 transition-all duration-200"
          />

          {/* Service Dropdown */}
          <select
            required
            className="w-full p-4 rounded-xl border border-gray-300 
            bg-white text-gray-900
            focus:outline-none focus:ring-2 focus:ring-violet-600 
            focus:border-violet-600 transition-all duration-200"
          >
            <option value="">Select a Service</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="aws-services">AWS Services</option>
            <option value="azure-services">Azure Services</option>
            <option value="gcp-services">GCP Services</option>
            <option value="devops-solutions">DevOps Solutions</option>
            <option value="consulting">Cloud Consulting</option>
          </select>

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full md:col-span-2 p-4 rounded-xl border border-gray-300 
            bg-white text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-violet-600 
            focus:border-violet-600 transition-all duration-200"
          ></textarea>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-violet-600 text-white font-semibold 
              py-3 px-10 rounded-xl 
              hover:bg-violet-700 
              hover:scale-105 
              transition-all duration-300 
              shadow-md w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
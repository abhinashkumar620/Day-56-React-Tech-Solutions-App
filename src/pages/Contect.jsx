import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4 sm:px-6 py-12">
      <div className="w-full max-w-4xl sm:max-w-5xl bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-sm sm:text-base text-center mb-6 sm:mb-8">
          Fill out the form below to book a consultation or a POC for your organization.  
          We’ll get back to you promptly.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm sm:text-base"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm sm:text-base"
          />

          {/* Company */}
          <input
            type="text"
            placeholder="Company Name"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm sm:text-base"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm sm:text-base"
          />

          {/* Location / Address */}
          <input
            type="text"
            placeholder="Location / Address"
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm sm:text-base"
          />

          {/* Service Dropdown */}
          <select
            required
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm sm:text-base"
          >
            <option value="">Select a Service</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="aws-services">AWS Services</option>
            <option value="azure-services">Azure Services</option>
            <option value="gcp-services">GCP Services</option>
            <option value="devops-solutions">DevOps Solutions</option>
            <option value="consulting">Cloud Consulting</option>
          </select>

          {/* Full width message */}
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full md:col-span-2 p-3 sm:p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 text-sm sm:text-base"
          ></textarea>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-violet-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-10 rounded-lg hover:bg-violet-700 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
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

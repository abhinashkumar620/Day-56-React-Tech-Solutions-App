import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white border-t-2  border-violet-600  w-full py-10 px-5">
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* 🟣 Company Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                    <img src={logo} alt="Company Logo" className="w-36 sm:w-40" />
                    <p className="text-slate-800 text-sm leading-relaxed">
                        Cloud Solutions , are a dedicated team of cloud experts, here to add
                        value to your business through quality services and cloud delivery.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start items-center gap-3 mt-3">
                        <RiFacebookCircleFill className="text-3xl sm:text-4xl border border-slate-800 hover:border-violet-500 rounded-full p-1 transition-colors duration-300 cursor-pointer hover:text-blue-600  text-blue-600 hover:scale-105 " />
                        <IoLogoInstagram className="text-3xl sm:text-4xl border border-slate-800 hover:border-violet-500 rounded-full p-1 transition-colors duration-300 cursor-pointer hover:text-pink-400  text-pink-400 hover:scale-105 " />
                        <IoLogoYoutube className="text-3xl sm:text-4xl border border-slate-800 hover:border-violet-500 rounded-full p-1 transition-colors duration-300 cursor-pointer hover:text-rose-500 text-rose-500 hover:scale-105 " />
                        <FaLinkedin className="text-3xl sm:text-4xl border border-slate-800 hover:border-violet-500 rounded-full p-1 transition-colors duration-300 cursor-pointer hover:text-blue-400 text-blue-400 hover:scale-105 " />
                    </div>
                </div>

                {/* 🟢 Quick Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                    <h2 className="text-lg font-semibold text-violet-600 mb-2">
                        Quick Links
                    </h2>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Cloud Migration & Strategy
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        DevOps Transformation
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        AI & Data Analytics
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        24/7 Cloud Operations
                    </Link>
                </div>

                {/* 🟡 Solutions */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                    <h2 className="text-lg font-semibold text-violet-600 mb-2">
                        Solutions
                    </h2>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        AI / ML
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Cloud Migration
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Generative AI
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Managed Services
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Modernization
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Pinpoint
                    </Link>
                </div>

                {/* 🔵 Industries */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
                    <h2 className="text-lg font-semibold text-violet-600 mb-2">
                        Industries
                    </h2>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Education / EdTech
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Healthcare
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Manufacturing
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Media
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        E-commerce
                    </Link>
                    <Link className="hover:text-violet-600 text-slate-800 text-sm">
                        Gaming
                    </Link>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-slate-700 mt-10 pt-5 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()}Cloud Solutions. All rights
                reserved.
            </div>
        </footer>
    );
};

export default Footer;

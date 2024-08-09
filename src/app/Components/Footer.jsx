"use client"
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import footerlogo from "../assets/footerlogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-start w-full">
        <div className="bg-blue-900 p-1 w-full md:w-1/4 md:pl-32 flex justify-center md:justify-start">
          <Image width={200} height={210} src={footerlogo} alt="Footer Logo" />
        </div>
        <div className="bg-teal-400 py-4 w-full md:w-3/4 md:px-20 md:pr-32 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-white text-center md:text-left mb-2 md:mb-0">
            Turn your search into success
          </h1>
          <button className="bg-white text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 mt-2 md:mt-0">
            WORK WITH US
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Company Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Company</h2>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> May Field Garden Sec- 47
              Gurgaon- 122018
            </p>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> Phone: 0124-4386838
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2" /> info@mindsoftindia.com
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <div className="flex flex-wrap">
              <ul className="flex-1 list-disc list-inside mb-4 md:mb-0">
                {["Home", "Blog", "Industries", "About", "Contact Us"].map(
                  (link) => (
                    <li key={link} className="mb-2 hover:text-gray-400">
                      {link}
                    </li>
                  )
                )}
              </ul>
              <ul className="flex-1 list-disc list-inside">
                {[
                  "Executive Search",
                  "Training",
                  "Permanent Staffing",
                  "Contract Staffing",
                  "RPO",
                ].map((link) => (
                  <li key={link} className="mb-2 hover:text-gray-400">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subscribe Newsletter Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Subscribe Newsletter</h2>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full p-2 rounded-l-md bg-gray-800 text-white outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-r-md">
                <FaPaperPlane />
              </button>
            </div>
            <p className="text-gray-400 mt-4">
              Sign up for our latest news & articles. We won’t give you spam
              mails.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

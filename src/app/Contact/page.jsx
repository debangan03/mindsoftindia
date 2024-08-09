"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function Page() {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-800/50 h-44 w-full flex justify-center items-center">
        <h3 className="text-center text-white font-bold text-3xl tracking-wide">
          Contact Us
        </h3>
      </div>
      <div className="bg-zinc-50 drop-shadow-lg rounded-lg w-full max-w-7xl mx-auto -mt-10 min-h-44 p-6">
        <div className="w-full flex flex-col md:flex-row justify-center items-start">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 p-6 pr-14">
            <h4 className="text-3xl font-bold text-gray-800 mb-2">
              Excellence Record
            </h4>
            <p className="text-gray-700 text-lg">
              Since 2006, we have been serving multiple clients across
              industries in their recruitment and staffing. You can count on us!
            </p>
            <div className="mt-10">
              <h4 className="text-3xl font-bold text-gray-800 mb-2">
                Our Presence
              </h4>
              <ul className="list-inside text-gray-700 text-lg space-y-6">
                <li>
                  <strong>GURGAON OFFICE</strong>
                  <br />
                  <span className="flex items-center space-x-2">
                    <FaLocationDot className="text-gray-600" />
                    <span>May Field Garden Sec- 47 Gurgaon– 122018</span>
                  </span>
                </li>
                <li>
                  <strong>BANGALORE OFFICE</strong>
                  <br />
                  <span className="flex items-center space-x-2">
                    <FaLocationDot className="text-gray-600" />
                    <span>
                      #30, Ground Floor 27th Main, 7th Cross HSR Layout,
                      Sector-1 Bengaluru, 5601032
                    </span>
                  </span>
                </li>
                <li>
                  <strong>UK OFFICE</strong>
                  <br />
                  <span className="flex items-center space-x-2">
                    <FaLocationDot className="text-gray-600" />
                    <span>
                      Mindsoft India Hr Solutions Pvt Ltd 53, Chrise Gardens,
                      Romford, Essex, RM6 4SA
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 bg-slate-200 p-6 rounded-lg">
            <h4 className="text-3xl font-bold text-gray-800 mb-2">
              Get a Quote
            </h4>
            <p>
              Successfully providing recruitment and staffing services since
              2006.
            </p>
            <form className="space-y-4 mt-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter the subject"
                />
              </div>
              <div className="text-center w-full">
                <button
                  type="submit"
                  className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-950 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="my-6  lg:mx-28 rounded-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224624.12705748068!2d76.764447!3d28.396558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c76de0a559%3A0x8d2c1acd603e32df!2sMindsoft%20India!5e0!3m2!1sen!2sus!4v1723227516959!5m2!1sen!2sus"
          className="w-full h-72 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </div>
    </div>
  );
}

export default Page;

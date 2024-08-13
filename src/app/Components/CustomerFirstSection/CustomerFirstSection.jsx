import React from "react";
import { PiDisc } from "react-icons/pi";

export default function CustomerFirstSection() {
  return (
    <div className="relative h-[600px] px-0 my-10 flex mix-blend-multiply items-center justify-center overflow-hidden">
      {/* Vimeo Background */}

        {/* Vimeo Background */}
        <iframe
          src="https://player.vimeo.com/video/491816433?muted=1&autoplay=1&loop=1&transparent=1&background=1&app_id=122963"
          width="100%"
          height="100%"
          frameBorder="0"
          className="absolute inset-object-cover " // Adjusted opacity
          allow="autoplay; fullscreen; picture-in-picture"
          title="Background Video"
        ></iframe>

        {/* Bluish Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>


      {/* Overlay */}
      

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 md:px-8">
        <h2 className="text-lg md:text-xl font-medium mb-2">WHY MINDSOFT</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
          We have a customer-first mindset to meet expectations
        </h1>
        <ul className="space-y-4 text-left max-w-lg mx-auto px-4 md:px-0">
          <li className="flex items-start md:items-center">
            <PiDisc className="text-blue-200 w-6 h-6 md:w-8 md:h-8 mr-4" />
            Gain a competitive advantage
          </li>
          <li className="flex items-start md:items-center">
            <PiDisc className="text-blue-200 w-6 h-6 md:w-8 md:h-8 mr-4" />
            Smooth recruitment process and staffing through non-traditional channels
          </li>
          <li className="flex items-start md:items-center">
            <PiDisc className="text-blue-200 w-6 h-6 md:w-8 md:h-8 mr-4" />
            High-impact partnerships to ensure long-term success
          </li>
          <li className="flex items-start md:items-center">
            <PiDisc className="text-blue-200 w-6 h-6 md:w-8 md:h-8 mr-4" />
            Expect more innovation in finding the right talent
          </li>
        </ul>
        <button className="mt-8 bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 md:px-8 rounded-full transition duration-300">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

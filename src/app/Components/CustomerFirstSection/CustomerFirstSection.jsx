import React from "react";
import { PiDisc } from "react-icons/pi";

export default function CustomerFirstSection() {
  return (
    <div className="relative h-[600px] my-10 flex items-center justify-center overflow-hidden">
      {/* Vimeo Background */}
      <iframe
        src="https://player.vimeo.com/video/491816433?muted=1&autoplay=1&loop=1&transparent=1&background=1&app_id=122963"
        width="100%"
        height="100%"
        frameBorder="0"
        className="w-full h-full object-cover"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Background Video"
      ></iframe>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 md:px-8">
        <h2 className="text-lg font-medium mb-2">WHY MINDSOFT</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          We have a customer-first mindset to meet expectations
        </h1>
        <ul className="space-y-4 text-left max-w-lg mx-auto">
          <li className="flex items-center">
            <PiDisc className="text-blue-200 w-10 h-10 mr-4" />
            Gain a competitive advantage
          </li>
          <li className="flex items-center">
            <PiDisc className="text-blue-200 w-10 h-10 mr-4" />
            Smooth recruitment process and staffing through non-traditional
            channels
          </li>
          <li className="flex items-center">
            <PiDisc className="text-blue-200 w-10 h-10 mr-4" />
            High-impact partnerships to ensure long-term success
          </li>
          <li className="flex items-center">
            <PiDisc className="text-blue-200 w-10 h-10 mr-4" />
            Expect more innovation in finding the right talent
          </li>
        </ul>
        <button className="mt-8 bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

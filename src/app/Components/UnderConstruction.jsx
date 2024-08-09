"use client"
import React, { useState, useEffect } from "react";
import { FaTools } from "react-icons/fa";

export default function UnderConstruction() {
  const timetolive = new Date("August 15, 2024 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      setTimeLeft(timetolive - new Date().getTime());
      const timer = setInterval(() => {
        setTimeLeft(timetolive - new Date().getTime());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timetolive, isMounted]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  if (!isMounted) {
    return null; // Avoid rendering during server-side rendering (SSR)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center space-y-6">
        <FaTools className="mx-auto text-6xl text-yellow-500 animate-bounce" />
        <h1 className="text-3xl font-bold text-slate-800">Under Maintenance</h1>
        <p className="text-gray-600">
          We're working hard to bring you a better experience. Please check back soon!
        </p>
        <p className="text-gray-500 text-sm">Thank you for your patience.</p>
        
        <div className="space-y-4">
          <p className="text-xl font-bold text-gray-700">Coming Live In:</p>
          <div className="flex justify-center space-x-3 text-blue-900">
            <div className="text-center">
              <p className="text-4xl font-semibold">{days}</p>
              <p className="text-sm">Days</p>
            </div>
            <span className="text-4xl font-semibold">:</span>
            <div className="text-center">
              <p className="text-4xl font-semibold">{hours}</p>
              <p className="text-sm">Hours</p>
            </div>
            <span className="text-4xl font-semibold">:</span>
            <div className="text-center">
              <p className="text-4xl font-semibold">{minutes}</p>
              <p className="text-sm">Minutes</p>
            </div>
            <span className="text-4xl font-semibold">:</span>
            <div className="text-center">
              <p className="text-4xl font-semibold">{secs}</p>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700">Contact Us:</p>
          <p className="text-gray-600">
            Email: <a href="mailto:info@mindsoft.com" className="text-blue-600">info@mindsoft.com</a>
          </p>
          <p className="text-gray-600">
            Phone: <a href="tel:+911244386838" className="text-blue-600">0124-4386838</a>
          </p>
        </div>
      </div>
    </div>
  );
}

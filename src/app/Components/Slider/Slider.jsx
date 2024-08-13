"use client";
import React, { useState, useEffect } from "react";
import "./Slider.css"; // Import custom styles
import { useRouter } from "next/navigation";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const slides = [
    {
      image: "/banner3.jpg",
      heading: "Your search ends here",
      paragraph:
        "As we intend to bridge the gap between search and talent, the successful path into a better future starts here.",
    },
    {
      image: "/banner1.jpeg",
      heading: "Empower Your Workforce",
      paragraph:
        "With our expertise, we help you find the right talent to boost your business growth.",
    },
    {
      image: "/banner2.jpg",
      heading: "Unlock Potential",
      paragraph:
        "Our recruitment services are designed to help you unlock the full potential of your team.",
    },
    {
      image: "/banner4.jpg",
      heading: "Success Starts Here",
      paragraph:
        "Partner with us to achieve success through strategic recruitment and staffing solutions.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[600px] w-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ${
            index === currentIndex
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute lg:pl-10 pl-2 inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-start">
            <div className="lg:w-[670px] w-full mt-10 backdrop-blur-sm h-full">
              <h1
                className={`lg:text-8xl text-6xl font-bold text-white transition-transform duration-1000 ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                {slide.heading}
              </h1>
              <p
                className={`text-xl text-white mt-4 transition-transform duration-1000 delay-200 ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                {slide.paragraph}
              </p>
              <div
                className={`mt-8 flex space-x-4 transition-transform duration-1000 delay-400 ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <button onClick={()=>router.push('/Contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                  WORK WITH US
                </button>
                <button onClick={()=>router.push('/About')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute right-10 bottom-14 flex flex-col space-y-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-blue-500" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

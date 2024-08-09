"use client";
import React, { useState } from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 justify-center items-center mt-10">
      <div className="relative">
        <Image 
          src={"/videobg.jpg"} 
          width={500} 
          height={500} 
          className="rounded" 
          alt="Background image for video" 
        />
        <button
          onClick={openModal}
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play video"
        >
          <div className="w-16 h-16 bg-white hover:bg-blue-500 bg-opacity-75 rounded-full flex items-center justify-center animate-pulse">
            <FaPlay />
          </div>
        </button>
      </div>
      <div className="lg:w-1/3 mt-10 lg:mt-0 p-4 space-y-10">
        <div>
          <h4 className="text-blue-500 text-base font-medium tracking-wide">ABOUT US</h4>
          <h3 className="text-3xl font-bold">
            Unleash Potential. Transform. Experience Results.
          </h3>
        </div>
        <p className="pr-10 font-medium text-lg tracking-wide">
          We are a dynamic search and select consultancy and have specialized in
          recruiting and training employees for businesses across multiple
          industries. We aim to monetize by putting the needs of our clients
          first.
        </p>
        <div className="bg-white border-l-[3px] border-blue-500 h-28 p-4 text-xl font-semibold drop-shadow-lg">
          Successfully providing recruitment and staffing services for more than
          a decade now
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white/50  rounded-lg overflow-hidden max-w-full mx-4 lg:max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 text-black  text-lg font-bold"
              aria-label="Close video"
            >
              <IoMdCloseCircle className="size-6 z-50" />
            </button>
            <div className="p-6 z-10">
              <YouTube
                videoId="mdERtIOmhGw"
                opts={{
                  ...opts,
                  width: "100%",
                  height: "100%",
                }}
                className="w-full h-full lg:w-[640px] lg:h-[390px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;

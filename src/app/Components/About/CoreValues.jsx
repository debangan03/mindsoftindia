"use client";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbStars } from "react-icons/tb";
import {LuAlarmClock} from 'react-icons/lu'
import { GiStopwatch } from "react-icons/gi";
import {GoLaw } from 'react-icons/go'
import { MdSupportAgent } from "react-icons/md";
import Link from "next/link";

function CoreValues() {
  return (
    <div className="flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-4 items-center mt-10 p-4 px-4 lg:px-32 bg-slate-300 w-screen h-auto lg:h-[500px]">
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 lg:space-y-10 mb-8 lg:mb-0">
        <div>
          <h4 className="text-blue-500 text-sm lg:text-base font-medium tracking-wide">
            CORE VALUES
          </h4>
          <h2 className="text-2xl lg:text-3xl font-bold">
            Services we serve to all over the world
          </h2>
        </div>
        <p className="pr-0 lg:pr-20 text-sm lg:text-base">
          “Great leaders choose people to grow exponentially as a team.” We are
          a true believer of the fact that staffing plays a vital role in the
          growth of your company. Collaboration and long-term partnerships are
          the cornerstones of your service strategy to realize human potential.
          It would be appropriate if you tag us as a people-oriented consulting
          firm. Our clientele includes Fortune 500 companies & top MNCs.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Link href={'/Contact'}  className="font-semibold bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-white hover:text-blue-500 transition-colors duration-500">
            Work with us
          </Link>
          <Link href={'/About'} className="font-semibold bg-white text-blue-500 py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-500">
            Learn more
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 grid  grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center items-center">
      
          <div
            className="h-40 w-48 space-y-4 rounded-md flex flex-col justify-center items-center bg-white drop-shadow-lg"
          >
            <FaPeopleGroup className="size-10 text-blue-500" />
            <p className="text-sm lg:text-lg font-bold uppercase px-10">Collaboration</p>
          </div>
          <div
            className="h-40 w-48 space-y-4 rounded-md flex flex-col justify-center items-center bg-white drop-shadow-lg"
          >
            <TbStars  className="size-10 text-blue-500" />
            <p className="text-sm lg:text-lg font-bold uppercase px-10">Honesty</p>
          </div>
          <div
            className="h-40 w-48 space-y-4 rounded-md flex flex-col justify-center items-center bg-white drop-shadow-lg"
          >
            <LuAlarmClock  className="size-10 text-blue-500" />
            <p className="text-sm lg:text-lg font-bold uppercase px-10">Punctuality</p>
          </div>
  
          <div
            className="h-40 w-48 space-y-4 rounded-md flex flex-col justify-center items-center bg-white drop-shadow-lg"
          >
            <GiStopwatch  className="size-10 text-blue-500" />
            <p className="text-sm lg:text-lg font-bold uppercase px-10">EFFICIENCY</p>
          </div>
          <div
            className="h-40 w-48 space-y-4 rounded-md flex flex-col justify-center items-center bg-white drop-shadow-lg"
          >
            <MdSupportAgent  className="size-10 text-blue-500" />
            <p className="text-sm lg:text-lg font-bold uppercase px-10">TRANSPARENCY</p>
          </div>
          <div
            className="h-40 w-48 space-y-4 rounded-md flex flex-col justify-center items-center bg-white drop-shadow-lg"
          >
            <GoLaw   className="size-10 text-blue-500 " />
            <p className="text-sm lg:text-lg font-bold uppercase px-10">PROFESSIONAL ETHICS</p>
          </div>
      </div>
    </div>
  );
}

export default CoreValues;

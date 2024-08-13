"use client";
import Image from "next/image";
import React from "react";
import abtimage from "../assets/abt_job.png";
import JobOpeningsSection from "./JobOpenings";
import ApplyJob from "./ApplyJob";

function page() {
  return (
    <div className="min-h-screen">
      <div className="bg-indigo-800/40 relative h-48 flex justify-center items-center w-screen">
        <img
          src="https://img.freepik.com/free-photo/hr-representatives-positively-greeting-female-job-candidate_1163-4702.jpg?w=996&t=st=1723488451~exp=1723489051~hmac=7b6809b8ef7d4338bfc41352458d86e076bf6ad9e48bd45ce69c0b3fba7470e4"
          alt="banner"
          className="absolute top-0 -z-30 left-0 right-0 w-screen h-48 object-cover object-center"
        />
        <h1 className="text-center text-white font-bold text-3xl tracking-wide">
          Explore Jobs
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 justify-center items-center mt-10">
        <div className="relative">
          <Image
            src={abtimage}
            width={700}
            height={700}
            className="rounded"
            alt="Background image for video"
          />
        </div>
        <div className="lg:w-1/3 mt-10 lg:mt-0 p-4 space-y-10">
          <div>
            <h4 className="text-blue-500 text-base font-medium tracking-wide">
              ABOUT US
            </h4>
            <h3 className="text-3xl font-bold">
              Unleash Potential. Transform. Experience Results.
            </h3>
          </div>
          <p className="pr-10 font-medium text-lg tracking-wide">
            We are a dynamic search and select consultancy and have specialized
            in recruiting and training employees for businesses across multiple
            industries. We aim to monetize by putting the needs of our clients
            first.
          </p>
          <div className="bg-white border-l-[3px] border-blue-500 h-28 p-4 text-xl font-semibold drop-shadow-lg">
            Successfully providing recruitment and staffing services for more
            than a decade now
          </div>
        </div>
      </div>
<JobOpeningsSection/>
<ApplyJob/>

    </div>
  );
}

export default page;

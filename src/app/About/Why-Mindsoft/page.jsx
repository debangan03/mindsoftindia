"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomerFirst = () => {
  return (
    <div className=" text-center ">
      {/* Mindset Section */}
      <div className="bg-blue-900/40 text-white h-40 relative">
        <Image
          src={"/bggraph.jpg"}
          width={1000}
          height={1000}
          unoptimized
          className="indet-0 absolute -z-30 max-h-40 w-screen object-cover object-center"
        />
        <h2 className="text-2xl font-bold py-10">
          We have customer-first mindset to meet expectations
        </h2>
      </div>

      {/* Purpose Section */}
      <div className="bg-white py-12 max-w-7xl mx-auto">
        <h3 className="text-blue-800 text-xl font-semibold">OUR PURPOSE</h3>
        <p className="text-lg text-gray-800 font-semibold mt-4 px-8">
          At Mindsoft we believe our purpose is to fit qualified candidates to
          potential jobs. We also assist candidates to secure the best possible
          opportunities in the market. For clients we aim to provide outstanding
          recruitment services and solutions to acquire the best talent in the
          market. We will find the best possible candidate for your company.
        </p>
        <p className="text-gray-500 mt-4 text-sm px-8">
          We believe there is no substitute for experience and dedication. Our
          clients want to achieve growth, competitive advantage and positive
          organizational change, and Mindsoft is here to ensure this. We provide
          broader, deeper and faster access to an exclusive community of
          candidates.
        </p>
        <p className="text-gray-600 mt-4 px-8 text-sm">
          We understand the importance of finding the right person for the right
          position. Therefore, we combine industry knowledge with an
          understanding of your company culture to deliver the very best
          qualified candidates who are the right fit for your organization. For
          candidates, our consultative approach means we are proactively
          advising on choices for your next role and will stay in contact
          post-placement.
        </p>
        <p className="text-gray-600 mt-4 text-sm px-8">
          Trust us with your next recruitment expertise to deliver intelligent
          resourcing through a combination of market insight, technical
          excellence and outstanding competitor knowledge.
        </p>
      </div>

      {/* Promise Section */}
      <div className="bg-white my-4 shadow-lg rounded-lg py-12 mx-auto w-full max-w-2xl px-6">
        <h3 className="text-blue-800 text-2xl font-bold mb-6 border-b-2 border-blue-600 pb-2">
          Our Promise
        </h3>
        <ul className="list-disc text-left text-gray-700 space-y-3 mb-10">
          <li>Deliver candidates of the utmost quality</li>
          <li>Adhere to and surpass all SLA and standards</li>
          <li>Supply a professional, yet personal service</li>
          <li>
            Take all measures to protect the information of our clients and
            candidates
          </li>
        </ul>
        <Link href={'/Contact'} className="mt-10 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">
          Contact Us
        </Link >
      </div>
    </div>
  );
};

export default CustomerFirst;

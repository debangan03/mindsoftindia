"use client";
import Image from "next/image";
import React from "react";

function page() {
  const sectors = [
    {
      title: "Information Technology",
      description: "Explore innovations and solutions in the IT sector.",
    },
    {
      title: "Telecom",
      description:
        "Discover the latest in telecommunications and network technology.",
    },
    {
      title: "BFSI",
      description:
        "Insights and advancements in Banking, Financial Services, and Insurance.",
    },
    {
      title: "Retail",
      description: "Trends and technologies shaping the retail industry.",
    },
    {
      title: "BPO/ITES",
      description:
        "Business Process Outsourcing and IT Enabled Services overview.",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="relative lg:pt-20 pt-10 h-[500px] bg-black/20">
        <Image
          src={"/banner1.jpeg"}
          width={1000}
          height={1000}
          className="w-screen absolute -z-30  object-cover object-center h-[500px] inset-0"
        />
        <h3 className="text-4xl p-10  font-bold text-white ">
          Turning your search into success
        </h3>

        <p className="text-lg px-10 font-semibold text-slate-100 max-w-2xl ">
          {" "}
          Our professionally managed recruitment consultancy helps organizations
          in finding the right talent across the globe in no time
        </p>
        <button className="bg-blue-600 text-white p-3 px-5 ml-10 mt-10 rounded-full font-semibold hover:scale-y-95 duration-500">
          Talk To An Expert
        </button>
      </div>
      <div className="bg-slate-200 text-center h-[300px] my-10">
        <p className="max-w-3xl mx-auto text-4xl font-bold text-blue-950 pt-10">
          We offer expert staffing and recruitment services across industries
        </p>
        <button className="bg-blue-600 mx-auto text-white p-3 mt-10 px-5  rounded-full font-semibold hover:scale-y-95 duration-500">
          Talk To An Expert
        </button>
      </div>
      <div className="p-6  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white hover:scale-95 duration-500 cursor-pointer rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-3">{sector.title}</h3>
              <p className="text-gray-600 text-center">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;

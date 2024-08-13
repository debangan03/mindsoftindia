"use client";
import Image from "next/image";
import React from "react";
import ServicesSection from "./Servicesoffered";

function page() {
  return (
    <div className="min-h-screen">
      <div className="relative lg:pt-20 pt-10 h-[400px]">
        <Image
          src={"/serbanner.jpg"}
          width={1000}
          height={1000}
          className="w-screen absolute -z-30 object-cover object-center h-[400px] inset-0"
        />
        <h3 className="text-4xl p-10 font-bold text-white ">
          Turning your search into success
        </h3>

        <p className="text-lg px-10 font-semibold text-slate-100 max-w-2xl ">
          {" "}
          Our professionally managed recruitment consultancy helps organizations
          in finding the right talent across the globe in no time.
        </p>
      </div>
      <ServicesSection />
    </div>
  );
}

export default page;

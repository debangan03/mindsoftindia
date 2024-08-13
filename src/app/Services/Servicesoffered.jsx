"use client";
import Link from "next/link";
import React from "react";
import {
  FaSearch,
  FaChalkboardTeacher,
  FaRegHandshake,
  FaBriefcase,
  FaRegListAlt,
} from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Services We Offer
      </h2>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {/* Executive Search */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <FaSearch className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Executive Search</h3>
            <p className="text-gray-600">
              Identify and recruit top executives to lead your organization with
              precision and insight.
            </p>
          </div>
        </div>

        {/* Training & Development */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <FaChalkboardTeacher className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Training & Development</h3>
            <p className="text-gray-600">
              Enhance the skills and capabilities of your team through targeted
              training programs and development opportunities.
            </p>
          </div>
        </div>

        {/* Permanent Staffing */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <FaRegHandshake className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Permanent Staffing</h3>
            <p className="text-gray-600">
              Find and place the right candidates for long-term roles to build a
              strong and stable workforce.
            </p>
          </div>
        </div>

        {/* Contract Staffing */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <FaBriefcase className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Contract Staffing</h3>
            <p className="text-gray-600">
              Fill temporary or project-based positions with skilled
              professionals on a contract basis.
            </p>
          </div>
        </div>

        {/* RPO */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
          <FaRegListAlt className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold mb-2">RPO (Recruitment Process Outsourcing)</h3>
            <p className="text-gray-600">
              Outsource all or part of your recruitment process to improve
              efficiency and effectiveness.
            </p>
          </div>
        </div>

        <Link
          className="col-span-1 md:col-span-2 lg:col-span-3 mx-auto text-center bg-blue-900 text-white text-lg p-3 rounded"
          href={"/Contact"}
        >
          Talk To an Expert
        </Link>
      </div>
    </section>
  );
}

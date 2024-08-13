"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("OUR PURPOSE");

  // Handler function for tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="bg-indigo-800/40 relative h-48 flex justify-center items-center w-screen">
        <img
          src="https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?w=996&t=st=1723492657~exp=1723493257~hmac=2ebc570ad677831f1f28e5847d86d033dd6e600c3890a7aa920bd93ee1a0853c"
          alt="banner"
          className="absolute top-0 -z-30 left-0 right-0 w-screen h-48 object-cover object-center"
        />
        <h1 className="text-center text-white font-bold text-3xl tracking-wide">
          About Us
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row space-x-0 pb-10 lg:space-x-4 justify-center items-center mt-10">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-12">
          {/* Left Section */}
          <div className="md:w-1/3">
            <Image
              src={"/rec.jpg"}
              alt="Recruitment Team"
              className="rounded-lg shadow-lg"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
            <p className="text-center text-xl max-w-xl font-semibold mt-6">
              Recruiting is the lifeblood of any organization, so let the
              experts handle it
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-blue-700 text-sm font-bold">ABOUT US</h2>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">
              Turning your Search into Success!
            </h1>
            <p className="text-gray-600 mt-4">
              Over the decade, Mindsoft has been known as a trusted partner for
              businesses across multiple industries to meet their HR and
              workforce management needs. We are specialized at Contractual
              Staffing, Temporary Staffing, Executive Search, Recruitment,
              Training and Development. Our clientele includes Fortune 500
              companies & top MNCs.
            </p>

            {/* Tab Section */}
            <div className="mt-8">
              <ul className="flex space-x-4 border-b-2 border-gray-200">
                <li
                  className={`pb-2 cursor-pointer font-semibold ${
                    activeTab === "OUR PURPOSE"
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleTabClick("OUR PURPOSE")}
                >
                  OUR PURPOSE
                </li>
                <li
                  className={`pb-2 cursor-pointer font-semibold ${
                    activeTab === "OUR MISSION"
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleTabClick("OUR MISSION")}
                >
                  OUR MISSION
                </li>
                <li
                  className={`pb-2 cursor-pointer font-semibold ${
                    activeTab === "OUR VALUE"
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleTabClick("OUR VALUE")}
                >
                  OUR VALUE
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                {activeTab === "OUR PURPOSE" && (
                  <>
                    At Mindsoft we believe our purpose is to fit qualified
                    candidates to potential jobs. We also assist candidates to
                    secure the best possible opportunities in the market. For
                    clients, we aim to provide outstanding recruitment services
                    and solutions to acquire the best talent in the market. We
                    will find the best possible candidate for your company.
                  </>
                )}
                {activeTab === "OUR MISSION" && (
                  <>
                    Our mission is to be a leading provider of recruitment
                    solutions by continually improving our methods and
                    technologies to meet the evolving needs of our clients and
                    candidates. We strive to build long-term relationships based
                    on trust and commitment.
                  </>
                )}
                {activeTab === "OUR VALUE" && (
                  <>
                    Our core values include integrity, transparency, and
                    excellence. We are dedicated to delivering value through
                    ethical practices and a client-centric approach. Our team
                    works diligently to exceed expectations and foster
                    professional growth and success.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link className="mx-auto bg-blue-800 text-white p-3 mb-4 rounded"  href={'/Contact'}>Talk To an Expert</Link>
    </div>
  );
}

export default Page;

"use client";
import React, { useState } from "react";
import Topbanner from "./Topbanner";
import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "../../assets/logo.png";
import call from "../../assets/call.png";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdownToggle = (section) => {
    setDropdown(dropdown === section ? "" : section);
  };

  return (
    <div>
      <Topbanner />
      <nav className=" flex justify-between items-center px-4 py-2 lg:px-32 sticky top-2 bg-white z-50">
        <Image src={logo} width={150} height={40} alt="Logo" />
        <div className="md:hidden">
          <CgMenuGridR size={30} onClick={handleMenuToggle} />
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-10 absolute md:static bg-white md:bg-transparent transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "top-16 left-0 w-full" : "-top-96"
          }`}
        >
          {/* Main Menu Items */}
         <Link href={'/'}> <li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300 py-3 md:py-0">
            Home
          </li></Link>

          {/* Services Dropdown */}
          <li
            className="relative flex items-center justify-center space-x-2 py-3 md:py-0"
          >
            <span className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
              Services
            </span>
            <IoIosArrowDown
              className={`cursor-pointer mt-1 transition-transform duration-200 ${
                dropdown === "Services" ? "rotate-180 text-blue-600" : ""
              }`}
              onClick={() => handleDropdownToggle("Services")}
            />
            {dropdown === "Services" && (
              <ul
                className="absolute hover:text-black top-full left-0 bg-white border border-gray-200 shadow-lg w-48 mt-2 z-10"
                onMouseLeave={() => {
                  handleDropdownToggle("");
                }}
              >
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Executive Search
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Training & Development
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Permanent Staffing
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Contract Staffing
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  RPO
                </li>
              </ul>
            )}
          </li>

          {/* Industries Dropdown */}
          <li
            className="relative flex items-center justify-center space-x-2 py-3 md:py-0"
          >
            <span className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
              Industries
            </span>
            <IoIosArrowDown
              className={`cursor-pointer mt-1 transition-transform duration-200 ${
                dropdown === "Industries" ? "rotate-180 text-blue-600" : ""
              }`}
              onClick={() => handleDropdownToggle("Industries")}
            />
            {dropdown === "Industries" && (
              <ul
                className="absolute hover:text-black top-full left-0 bg-white border border-gray-200 shadow-lg w-48 mt-2 z-10"
                onMouseLeave={() => {
                  handleDropdownToggle("");
                }}
              >
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Information Technology
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Telecom
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Retail
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  BPO/ITES
                </li>
              </ul>
            )}
          </li>

          {/* About Dropdown */}
          <li
            className="relative flex items-center justify-center space-x-2 py-3 md:py-0"
          >
            <span className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
              About
            </span>
            <IoIosArrowDown
              className={`cursor-pointer mt-1 transition-transform duration-200 ${
                dropdown === "about" ? "rotate-180 text-blue-600" : ""
              }`}
              onClick={() => handleDropdownToggle("about")}
            />
            {dropdown === "about" && (
              <ul
                className="absolute hover:text-black top-full left-0 bg-white border border-gray-200 shadow-lg w-48 mt-2 z-10"
                onMouseLeave={() => {
                  handleDropdownToggle("");
                }}
              >
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  About us
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Why Mindsoft
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Blog
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  e-Book
                </li>
              </ul>
            )}
          </li>

          {/* Other Menu Items */}
          <li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300 py-3 md:py-0">
            Jobs
          </li>
          <Link href={'/Contact'}><li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300 py-3 md:py-0">
            Contact
          </li></Link>
        </ul>

        {/* Call Section */}
        <div className="hidden md:flex justify-end space-x-4 items-center">
          <Image src={call} width={40} height={100} alt="Call" />
          <div>
            <p className="text-sm">Work With Us</p>
            <span className="font-bold text-lg">0124-4386838</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

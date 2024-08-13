"use client";
import React, { useState } from "react";
import Topbanner from "./Topbanner";
import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "../../assets/logo.png";
import call from "../../assets/call.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const router = useRouter();

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdownToggle = (section) => {
    setDropdown(dropdown === section ? "" : section);
  };

  return (
    <div>
      <Topbanner />

      {/* Small Screen Navigation */}
      <nav className="md:hidden flex justify-between items-center px-4 py-2 sticky top-2 bg-white z-50">
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <Image src={logo} width={150} height={40} alt="Logo" />
        </div>
        <CgMenuGridR size={30} onClick={handleMenuToggle} />
        {isMenuOpen && (
          <ul className="absolute left-0 top-16 w-full bg-white border-t border-gray-200 z-50">
            <Link href={"/"}>
              <li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300 py-3 px-4">
                Home
              </li>
            </Link>
            <li className="relative">
              <div
                className="flex items-center justify-between py-3 px-4 cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300"
                onClick={() => handleDropdownToggle("Services")}
              >
                Services
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    dropdown === "Services" ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </div>
              {dropdown === "Services" && (
                <ul className="bg-white border-t border-gray-200">
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">
                    Executive Search
                  </li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">
                    Training & Development
                  </li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">
                    Permanent Staffing
                  </li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">
                    Contract Staffing
                  </li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">RPO</li>
                </ul>
              )}
            </li>
            <li className="relative">
              <div
                className="flex items-center justify-between py-3 px-4 cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300"
                onClick={() => handleDropdownToggle("Industries")}
              >
                Industries
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    dropdown === "Industries" ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </div>
              {dropdown === "Industries" && (
                <ul className="bg-white border-t border-gray-200">
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">
                    Information Technology
                  </li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">Telecom</li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">Retail</li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">
                    BPO/ITES
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <div
                className="flex items-center justify-between py-3 px-4 cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300"
                onClick={() => handleDropdownToggle("about")}
              >
                About
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    dropdown === "about" ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </div>
              {dropdown === "about" && (
                <ul className="bg-white border-t border-gray-200">
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">About us</li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">
                    Why Mindsoft
                  </li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">Blog</li>
                  <li className="p-2 px-4 hover:bg-gray-100 text-sm">e-Book</li>
                </ul>
              )}
            </li>
            <Link href={"/Jobs"}>
              <li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300 py-3 px-4">
                Jobs
              </li>
            </Link>
            <Link href={"/Contact"}>
              <li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300 py-3 px-4">
                Contact
              </li>
            </Link>
          </ul>
        )}
      </nav>

      {/* Large Screen Navigation */}
      <nav className="hidden md:flex justify-between items-center px-32 py-2 sticky top-2 bg-white z-50">
        <div className="cursor-pointer" onClick={() => router.push('/')}>
          <Image src={logo} width={150} height={40} alt="Logo" />
        </div>
        <ul className="flex items-center space-x-10">
          <Link href={"/"}>
            <li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
              Home
            </li>
          </Link>
          <li className="relative flex items-center space-x-2">
            <span
              className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300"
              onClick={() => router.push("/Services")}
            >
              Services
            </span>
            <IoIosArrowDown
              className={`cursor-pointer transition-transform duration-200 ${
                dropdown === "Services" ? "rotate-180 text-blue-600" : ""
              }`}
              onClick={() => handleDropdownToggle("Services")}
            />
            {dropdown === "Services" && (
              <ul
                className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg w-48 mt-2 z-10"
                onMouseLeave={() => handleDropdownToggle("")}
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
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">RPO</li>
              </ul>
            )}
          </li>
          <li className="relative flex items-center space-x-2">
            <span className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
              Industries
            </span>
            <IoIosArrowDown
              className={`cursor-pointer transition-transform duration-200 ${
                dropdown === "Industries" ? "rotate-180 text-blue-600" : ""
              }`}
              onClick={() => handleDropdownToggle("Industries")}
            />
            {dropdown === "Industries" && (
              <ul
                className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg w-48 mt-2 z-10"
                onMouseLeave={() => handleDropdownToggle("")}
              >
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Information Technology
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">Telecom</li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">Retail</li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  BPO/ITES
                </li>
              </ul>
            )}
          </li>
          <li className="relative flex items-center space-x-2">
            <span
              className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300"
              onClick={() => router.push("/About")}
            >
              About
            </span>
            <IoIosArrowDown
              className={`cursor-pointer transition-transform duration-200 ${
                dropdown === "about" ? "rotate-180 text-blue-600" : ""
              }`}
              onClick={() => handleDropdownToggle("about")}
            />
            {dropdown === "about" && (
              <ul
                className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg w-48 mt-2 z-10"
                onMouseLeave={() => handleDropdownToggle("")}
              >
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  About us
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">
                  Why Mindsoft
                </li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">Blog</li>
                <li className="p-2 hover:bg-gray-100 font-regular text-sm">e-Book</li>
              </ul>
            )}
          </li>
          <Link href={"/Jobs"}>
            <li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
              Jobs
            </li>
          </Link>
          <Link href={"/Contact"}>
            <li className="cursor-pointer font-semibold hover:text-blue-600 transition-colors duration-300">
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex justify-end space-x-4 items-center">
          <Image src={call} width={40} height={100} alt="Call" />
          <div>
            <p className="text-sm">Work With Us</p>
            <a className="font-bold text-lg" href="tel:+911244386838">
              0124-4386838
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

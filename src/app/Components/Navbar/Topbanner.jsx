"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
function Topbanner() {
  return (
    <header>
    <div className="h-10 bg-[#162440] text-sm tracking-wide text-white p-2 lg:flex hidden justify-between items-center px-32">
      <a href="mailto:info@mindsoftindia.com" className="flex justify-center items-center space-x-2">
        <MdEmail className="size-5" />
        <span>info@mindsoftindia.com</span>
      </a>
      <div className="flex justify-center items-center space-x-2 icongrp">
        <a href="#"><FaLinkedin className="size-5 cursor-pointer" /></a>
        <a href="#"><FaFacebookF className="size-5 cursor-pointer" /></a>
        <a href="#"><FaTwitter className="size-5 cursor-pointer" /></a>
        <a href="#"><FaYoutube className="size-5 cursor-pointer" /></a>
      </div>
    </div>
  
    </header>
  );
}

export default Topbanner;

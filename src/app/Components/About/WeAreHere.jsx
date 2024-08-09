import React from "react";
import Image from "next/image";
import recruitmentImage from "../../assets/projectbg.png"; // Update this with the correct path to your image file
import Link from "next/link";

function WeAreHere() {
  return (
    <div className="mx-auto mt-10">
      <h4 className="text-blue-500 text-base text-center font-medium tracking-wide">
        We Are Here
      </h4>
      <h2 className="text-4xl text-center font-bold">RESOLVE YOUR RECRUITMENT WORRIES</h2>
      <div className="relative  justify-center flex flex-col  lg:flex-row items-center my-10 h-auto lg:h-[450px]">


        <div className="bg-blue-500 h-full ite -z-50 px-20 text-white p-10 lg:w-1/2 flex flex-col justify-center relative">
          <h1 className="absolute top-0 left-0 text-[150px] text-blue-300 font-bold opacity-10">
            01
          </h1>
          
          <h2 className="relative text-4xl font-bold z-10 mt-4">
            You can laugh at recruitment worries – if you let us handle it
          </h2>
          <p className="relative mt-6 text-sm z-10">
            Utilize our experience and dedication to be the only talent
            management company for continuous growth, in order to serve our
            clients. We will continue to expand our knowledge and expertise to
            ensure this.
          </p>
          <Link className="font-semibold uppercase mt-20" href={'/'}>Download HR HACKS Ebook {'>'}</Link>
        </div>

        <div className="lg:-ml-20 z-30 lg:w-[400px] lg:h-[500px]  ">
          <Image
            src={recruitmentImage}
            alt="Recruitment"
            className="object-cover rounded-lg lg:mt-[100px]"
            width={400} // Adjust the width as needed
            height={400} // Adjust the height as needed
          />
        </div>

        {/* Image Section */}
      </div>
    </div>
  );
}

export default WeAreHere;

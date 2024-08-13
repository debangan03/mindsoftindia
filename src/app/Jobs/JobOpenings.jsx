"use client"
import React from "react";

const jobOpenings = [
  {
    title: "Software Engineer",
    location: "San Francisco, CA",
    description: "Join our dynamic team to work on innovative projects and build cutting-edge solutions.",
    link: "#"
  },
  {
    title: "Product Manager",
    location: "New York, NY",
    description: "Lead product development and strategy, working closely with cross-functional teams.",
    link: "#"
  },
  {
    title: "UX Designer",
    location: "Remote",
    description: "Design intuitive and user-friendly interfaces, working on a variety of exciting products.",
    link: "#"
  },
  // Add more job openings as needed
];

export default function JobOpeningsSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-slate-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-950">Current Job Openings</h2>
      {jobOpenings.length<=0 &&<p className="text-center text-4xl">No Jobs Are Available</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center lg:grid-cols-3 gap-8">
        
        {jobOpenings.map((job, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <hr />
            <p className="text-gray-700 mb-2">{job.location}</p>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <hr />
            <p>Qualification : {job.qualification??'BE/B.tech'}</p>
            <p>Date : {job.createdAt??'14.08.2024'}</p>

            <a
              href={job.link}
              className=" bg-indigo-900 mt-2 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded-md text-center transition duration-300"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

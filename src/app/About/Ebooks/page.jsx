"use client";
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa'; // Importing download icon

function EbookRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const downloadfile=()=>{
    const link = document.createElement('a');
    link.href = '/Ebook/Mindsoft-ebook.pdf'; // Path to the eBook file
    link.download = 'ebook.pdf'; // Name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission and trigger file download
    setSubmitted(true);
    downloadfile()

    // // Create a download link and click it to start the download
    // const link = document.createElement('a');
    // link.href = '/Ebook/Mindsoft-ebook.pdf'; // Path to the eBook file
    // link.download = 'ebook.pdf'; // Name of the file to be downloaded
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500/40 to-white p-4">
      {!submitted ? (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:py-10 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Download Our Free eBooks
            </h1>
            <p className="text-gray-700 mb-4">
              Want To Step Up Your HARD WORK? You Need To Read This First! In this e-book, you’ll find some great secrets and ultimate truths to ace human resource management. This e-book contains facts and expert advice on how to understand people even better and learn to influence them positively for the long-term growth of your organization.
            </p>
            <h2 className="text-xl font-semibold mb-2">Learn about:</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Right ways of analyzing people</li>
              <li>What not to say to people while hiring them</li>
              <li>Hacks on soft skills that are beyond hard work</li>
            </ul>
            {/* <img
              src="/path-to-your-ebook-image.jpg" // Replace with your eBook image path
              alt="eBook Cover"
              className="w-full max-w-xs mx-auto mb-6" // Adjust size as needed
            /> */}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <p className='font-semibold'>Get the free e-book exclusively designed for Human Resource Managers or Recruiters or Hiring Managers</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300"
            >
              <FaDownload className="text-lg" /> Download eBook
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
          <p className="text-gray-700 mb-4">
            Your request has been received. Your file will be downloaded shortly. If it doesn't start automatically, <span  onClick={downloadfile} className="cursor-pointer text-blue-600 hover:underline">click here</span>.
          </p>
        </div>
      )}
    </div>
  );
}

export default EbookRequestPage;

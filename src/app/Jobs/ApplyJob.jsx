import React, { useState } from "react";

export default function ApplyJob() {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    email: "",
    phone: "",
    dob: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="py-16 px-4 md:px-8 relative">
      <h2 className="text-3xl font-bold mb-8 text-center">Apply for a Job</h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
              required
            />
          </div>

          {/* Position */}
          <div className="mb-4">
            <label htmlFor="position" className="block text-gray-700 text-sm font-medium mb-2">
              Position
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
              required
            >
              <option value="">Select a position</option>
              <option value="software_engineer">Software Engineer</option>
              <option value="product_manager">Product Manager</option>
              <option value="ux_designer">UX Designer</option>
              {/* Add more positions as needed */}
            </select>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 text-sm font-medium mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
              required
            />
          </div>

          {/* Resume Upload */}
          <div className="mb-4">
            <label htmlFor="resume" className="block text-gray-700 text-sm font-medium mb-2">
              Resume Upload
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-700"
              accept=".pdf, .doc, .docx"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md w-full transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

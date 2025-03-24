import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function DigitalSolutions() {
  return (
    <div className="container mx-auto my-32 px-6">
      {/* Header Section */}
      <h2 className="text-4xl font-bold text-center uppercase">
        <span className="text-[#0fcdff]">End-To-End Digital</span> Solutions for Every Need
      </h2>

      {/* Service Sections */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Web & App Development */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#0fcdff]">Web & App Development</h3>
          <p className="text-gray-700 mt-3 font-semibold">Content Overview</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Building intuitive and scalable websites
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Mobile applications and games development
            </li>
          </ul>
        </div>

        {/* Graphic Design */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#0fcdff]">Graphic Design</h3>
          <p className="text-gray-700 mt-3 font-semibold">Content Overview</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Creating eye-catching visuals, 3D animation
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Logos, banners, posters
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Branding material & social media graphics
            </li>
          </ul>
        </div>

        {/* Digital Marketing */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#0fcdff]">Digital Marketing</h3>
          <p className="text-gray-700 mt-3 font-semibold">Content Overview</p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Boost online presence & SEO ranking
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Engaging SEO-friendly content
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Driving traffic via paid campaigns
            </li>
          </ul>
          {/* Social Media Management */}
          <p className="text-gray-700 font-semibold mt-4">Social Media Management</p>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Helping businesses grow
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Engaging across all social platforms
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> Keeping brands competitive
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Description */}
      <p className="mt-12 text-gray-700 text-center text-lg">
        From modern websites & high-performance mobile apps to compelling social media graphics and strategic digital marketing, 
        Helix IT Solution ensures a seamless digital experience, keeping your brand ahead in today's market.
      </p>
    </div>
  );
}

export default DigitalSolutions;

import React from 'react';

function ServiceProvideCommit() {
  return (
    <div className="container mx-auto my-32 w-10/12 px-4 text-center">
      <h2 className="text-4xl font-bold text-center uppercase">
        <span className="text-blue-600">Avail</span> The Best
      </h2>
      <p className="text-gray-700 text-lg mt-2">
        What Do We Provide as the Best Website Designing Company in Jaipur?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-500">Custom Website Design</h3>
          <p className="text-gray-600 mt-2">We create stunning, user-friendly, and fully responsive websites tailored to your business needs.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-500">SEO & Digital Marketing</h3>
          <p className="text-gray-600 mt-2">Increase visibility and rank higher on search engines with our expert SEO strategies.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-500">E-Commerce Solutions</h3>
          <p className="text-gray-600 mt-2">Get a fully functional e-commerce store with secure payment gateways and a smooth user experience.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-500">Mobile App Development</h3>
          <p className="text-gray-600 mt-2">We develop high-quality, scalable, and feature-rich mobile applications for Android & iOS.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-500">Branding & Graphics</h3>
          <p className="text-gray-600 mt-2">Our expert designers help you create a strong brand identity with eye-catching visuals.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-500">Support & Maintenance</h3>
          <p className="text-gray-600 mt-2">We provide ongoing support and maintenance to keep your website running smoothly.</p>
        </div>
      </div>

      <button className="mt-6  text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition" style={{backgroundColor:"rgb(15 205 255)"}}>
        Get Started Now
      </button>
    </div>
  );
}

export default ServiceProvideCommit;

import React from 'react';

function LatestBlog() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#0fcdff] mb-6">E-commerce Solutions - Powering Your Online Success</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We provide end-to-end e-commerce solutions to help businesses thrive in the digital marketplace.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Platform Setup & Customization</h3>
            <p className="text-gray-700">Shopify, WooCommerce, Magento.</p>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Product Catalog Management & Payment Integration</h3>
            <p className="text-gray-700">Secure transactions and seamless shopping experiences.</p>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Marketing & SEO for E-commerce</h3>
            <p className="text-gray-700">Drive traffic and boost sales.</p>
          </div>
        </div>

        <div className="mt-16 bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-900">Why Choose Us?</h3>
          <ul className="mt-4 space-y-3 text-lg text-gray-700 text-left">
            <li className="flex items-center"><span className="mr-2 text-green-500">✔</span> Extensive platform expertise</li>
            <li className="flex items-center"><span className="mr-2 text-green-500">✔</span> End-to-end solutions</li>
            <li className="flex items-center"><span className="mr-2 text-green-500">✔</span> Results-driven strategies</li>
            <li className="flex items-center"><span className="mr-2 text-green-500">✔</span> Scalable solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LatestBlog;
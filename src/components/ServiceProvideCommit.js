import React from 'react';

function ServiceProvideCommit() {
  return (
    <div className="container mx-auto my-20 w-10/12 px-4 text-center">
      {/* Heading Section */}
      <h2 className="text-5xl font-extrabold uppercase text-gray-900">
        <span className="text-[#0fcdff]">Avail</span> The Best
      </h2>
      <p className="text-gray-700 text-lg mt-3">
        What Do We Provide as the Best Website Designing Company in Jaipur?
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {[
          {
            title: "App Development",
            description: "Bring Your Ideas to Life with Powerful Mobile Experiences. We specialize in crafting high-performance mobile applications for both iOS and Android platforms."
          },
          {
            title: "Native & Hybrid App Development",
            description: "High-performance apps tailored for your audience, whether native or hybrid."
          },
          {
            title: "Game Development (Ludo Games)",
            description: "Engaging, real-time multiplayer games designed for fun and interaction."
          },
          {
            title: "E-Commerce & LMS App Development",
            description: "Mobile solutions for online stores and educational platforms, providing seamless user experiences."
          },
          {
            title: "Our Process",
            description: (
              <div className="list-disc list-inside">
                <p>Discovery & Planning</p>
                <p>Design & Prototyping</p>
                <p>Development & Testing</p>
                <p>Deployment & Post-Launch Support</p>
              </div>
            )
          },
          {
            title: "Why Choose Us?",
            description: (
              <div className="list-disc list-inside">
                <p>Proven expertise</p>
                <p>Collaborative approach</p>
                <p>Quality & performance focus</p>
                <p>Cost-effective solutions</p>
              </div>
            )
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-[#0fcdff]">{item.title}</h3>
            <p className="text-gray-600 mt-3">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-10 px-8 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#0fcdff] to-[#0093E9] hover:from-[#0093E9] hover:to-[#0fcdff] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
        Get Started Now
      </button>
    </div>
  );
}

export default ServiceProvideCommit;

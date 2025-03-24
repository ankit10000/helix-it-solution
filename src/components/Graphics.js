import React from "react";

function Graphics() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#0fcdff] mb-6">
          Graphic Designing - Visuals That Speak Volumes
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We create stunning graphics that capture your brand's essence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {[
            { title: "Logo Design & Branding", desc: "Unique, memorable brand identity." },
            { title: "Marketing Collateral Design", desc: "Flyers, brochures, social media graphics." },
            { title: "Website Graphics & UI/UX Design", desc: "Engaging user interfaces." },
            { title: "Print & Packaging Design", desc: "Business cards, product packaging." }
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl"
            >
           <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
           <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-900">Why Choose Us?</h3>
          <ul className="mt-4 space-y-3 text-lg text-gray-700 text-left">
            {["Creative excellence", "Brand-centric approach", "Collaborative process", "Affordable solutions"].map(
              (point, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 text-xl">✔</span> {point}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Graphics;

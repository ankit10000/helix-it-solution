import React from "react";

function Portfolio() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center ">
        <h2 className="text-5xl font-bold text-[#0fcdff] mb-6">
          Digital Marketing - Drive Growth with Data-Backed Strategies
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We create data-driven marketing strategies that help businesses attract more customers and generate leads.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card */}
          {[
            { title: "SEO & PPC Advertising", desc: "Increase online visibility and traffic." },
            { title: "Social Media Marketing", desc: "Build brand awareness and engagement." },
            { title: "Content & Email Marketing", desc: "Thought leadership and lead nurturing." }
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-900">Why Choose Us?</h3>
          <ul className="mt-4 space-y-3 text-lg text-gray-700 text-left">
            {["Data-driven approach", "Experienced team", "Customized strategies", "Transparent reporting"].map((point, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-green-500 text-xl">✔</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

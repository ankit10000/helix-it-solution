import React from "react";

function About() {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-4xl text-center font-bold text-black uppercase">
          About <span className="text-blue-600">Us</span>
        </h2>
      <p className="text-gray-700 text-center mt-2">
        Learn more about our company, mission, and the values that drive us forward.
      </p>

      {/* Company Overview */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-2xl font-semibold text-blue-500">Who We Are</h3>
        <p className="text-gray-700 mt-2">
          We are a leading technology company specializing in website development, SEO, and digital marketing.
          Our goal is to help businesses establish a strong online presence and grow with innovative solutions.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-500">Our Mission</h3>
          <p className="text-gray-700 mt-2">
            Our mission is to deliver high-quality digital solutions that empower businesses to achieve their online goals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-500">Our Vision</h3>
          <p className="text-gray-700 mt-2">
            We aim to be a global leader in web development and digital marketing by consistently delivering top-tier solutions.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h3 className="text-3xl font-bold text-orange-400 text-center mt-10">Meet Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {[ 
          { name: "Alice Johnson", role: "CEO", img: "https://i.pravatar.cc/100?img=10" },
          { name: "Michael Lee", role: "Lead Developer", img: "https://i.pravatar.cc/100?img=11" },
          { name: "Sophia Brown", role: "Marketing Manager", img: "https://i.pravatar.cc/100?img=12" },
        ].map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

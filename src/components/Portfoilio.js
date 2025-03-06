import React from "react";

const projects = [
  {
    img: "https://i.pravatar.cc/50?img=1",
    title: "E-Commerce Website",
    description: "A full-fledged e-commerce platform with payment integration.",
  },
  {
    img: "https://i.pravatar.cc/50?img=1",
    title: "Mobile App",
    description: "A user-friendly mobile application for online services.",
  },
  {
    img: "https://i.pravatar.cc/50?img=1",
    title: "SEO Campaign",
    description: "Successful SEO strategies implemented for a leading brand.",
  },
];

function Portfolio() {
  return (
    <div className="container mx-auto my-32 px-4">
      <h2 className="text-4xl font-bold text-center uppercase">
        <span className="text-blue-600">Our</span> Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

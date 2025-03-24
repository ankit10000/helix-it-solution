import React from "react";

function About() {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-4xl text-center font-bold text-black uppercase">
        About <span className="text-[#0fcdff]">Us</span>
      </h2>
      <p className="text-gray-700 text-center mt-2">
        Learn more about our company, mission, and the values that drive us forward.
      </p>

      {/* Company Overview */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-2xl font-semibold text-[#0fcdff]">Born from a Commitment to Transparency and Results</h3>
        <p className="text-gray-700 mt-2">
          Founded in 2023 by Ankit Kumar Jangir and led by CEO & CTO Nitin Sharma, Helix IT Solution was born out of a frustration with the common practices in the digital marketing world: empty promises and inflated costs. We saw too many businesses being taken advantage of, and we knew there was a better way.
        </p>
        <p className="text-gray-700 mt-2">
          We set out to build an agency that prioritizes transparency, hard work, and honest results. Our mission is simple: to empower businesses across India with data-driven digital solutions that deliver a real return on investment.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#0fcdff]">Our Mission</h3>
          <p className="text-gray-700 mt-2">
            Our mission is to deliver high-quality digital solutions that empower businesses to achieve their online goals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#0fcdff]">Our Vision</h3>
          <p className="text-gray-700 mt-2">
            Our vision is to become a leading marketing agency serving clients worldwide, while remaining true to our roots of providing affordable, effective solutions for businesses of all sizes.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h3 className="text-2xl font-semibold text-[#0fcdff]">Our Core Values</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Transparency:</strong> We believe in open communication and clear reporting, so you always know where your investment is going.</li>
          <li><strong>Hard Work:</strong> We're dedicated to going the extra mile to achieve your goals. We don't cut corners, and we're always willing to put in the effort.</li>
          <li><strong>Practicality & Honesty:</strong> We provide realistic assessments and deliver solutions that are tailored to your specific needs and budget.</li>
        </ul>
      </div>

      {/* Team Section */}
      <h3 className="text-3xl font-bold text-orange-400 text-center mt-10">Meet Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {[ 
          { name: "Ankit Kumar Jangir", role: "Founder", img: "https://i.pravatar.cc/100?img=10", description: "As the founder of Helix IT Solution, Ankit is driven by a passion for helping businesses thrive in the digital age. He brings a wealth of experience in business development and marketing strategy." },
          { name: "Nitin Sharma", role: "CEO & CTO", img: "https://i.pravatar.cc/100?img=11", description: "Nitin is the technical visionary behind Helix IT Solution. With a strong background in software development and data analytics, he ensures that our solutions are innovative, scalable, and built to deliver exceptional performance." },
          { name: "[Third Team Member Name]", role: "[Title]", img: "https://i.pravatar.cc/100?img=12", description: "[Brief bio highlighting their expertise and role within the company.]" },
        ].map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-700 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
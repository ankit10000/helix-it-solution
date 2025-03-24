import React from 'react';
import CMS from '../Images/cms.avif';
import Ecommerce from '../Images/e-commerce.jpg';
import Custome from '../Images/custome.jpeg';
import Bussines from '../Images/Business-Focused.jpg';
import Transparent from '../Images/Transparent.jpeg';
import Website from '../Images/website.jpg';


const services = [
    {
        img: Custome,
        title: "Custom Website Design",
        description: "Unique, responsive, and visually appealing websites that reflect your brand identity."
    },
    {
        img: Ecommerce,
        title: "E-commerce Development",
        description: "Secure, user-friendly online stores with payment integration."
    },
    {
        img: CMS,
        title: "CMS Development",
        description: "WordPress and other CMS solutions for easy content management."
    },
    {
        img: Website,
        title: "Website Maintenance & Support",
        description: "Keeping your website secure, updated, and optimized."
    },
    {
        img: Bussines,
        title: "Business-Focused Approach",
        description: "A strategic approach to build websites that drive results for your business."
    },
    {
        img: Transparent,
        title: "Transparent Communication",
        description: "We maintain open, honest, and transparent communication throughout the process."
    }
];

function OurServices() {
    return (
        <div className="container mx-auto my-32 px-4">
            <h2 className="text-4xl font-bold text-center uppercase">
                <span className="text-[#0fcdff]">Our</span> Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 h-auto rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                        <img src={service.img} alt={service.title} className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-300" />
                        <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
                        <p className="text-gray-700 mt-2 text-sm md:text-base px-2 md:px-4">{service.description}</p>
                        <div className="flex-grow"></div>
                        <button className="mt-10 px-8 py-3 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#0fcdff] to-[#0093E9] hover:from-[#0093E9] hover:to-[#0fcdff] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105" style={{backgroundColor:"rgb(15 205 255)"}}>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurServices;

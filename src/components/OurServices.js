import React from 'react';

const services = [
    {
        img: "https://i.pravatar.cc/50?img=1",
        title: "Website Development",
        description: "Impress your visitors within a few seconds and turn them into customers with Bridgestone Technologies."
    },
    {
        img: "https://i.pravatar.cc/50?img=2",
        title: "App Development",
        description: "Get mobile responsive high-quality applications for both Android & iOS from the best app development services in Jaipur."
    },
    {
        img: "https://i.pravatar.cc/50?img=3",
        title: "Website Ranking - SEO",
        description: "Increase your website traffic, get more customers, and higher your online visibility with the best SEO company in Jaipur."
    },
    {
        img: "https://i.pravatar.cc/50?img=4",
        title: "Google Ads",
        description: "Establish your brand in the market, and increase your sales and profits with the leading digital marketing company."
    },
    {
        img: "https://i.pravatar.cc/50?img=5",
        title: "Meta Ads",
        description: "Get potential customers in real-time and manage traffic derived through SMO tactics with a top advertising agency in Jaipur."
    },
    {
        img: "https://i.pravatar.cc/50?img=6",
        title: "Google Business Profile",
        description: "Build a strong online presence and get found in local searches with the latest Google Business Profile."
    }
];

function OurServices() {
    return (
        <div className="container mx-auto my-10 px-4">
            <h2 className="text-4xl font-bold text-orange-400 text-center">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 h-auto rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                        <img src={service.img} alt={service.title} className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-300" />
                        <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
                        <p className="text-gray-700 mt-2 text-sm md:text-base px-2 md:px-4">{service.description}</p>
                        <div className="flex-grow"></div>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors'>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default OurServices;
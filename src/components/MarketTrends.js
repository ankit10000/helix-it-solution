import React from "react";
import ss1 from '../Images/ss1.png'
import ss2 from '../Images/ss2.png'

function MarketTrends() {
  return (
    <div className="container mx-auto my-32 px-4">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black uppercase">
          MARKET <span className="text-blue-600">TRENDS</span>
        </h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          In today's competitive digital landscape, businesses are increasingly relying on all-in-one solutions to streamline their growth. Helix IT Solution bridges the gap by providing tailored, cost-effective services to startups, small businesses, and enterprises alike.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* Left Side - Features */}
        <div className="space-y-6">
          {/* One-Stop Solution */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">ONE-STOP SOLUTION</h3>
            <p className="mt-2">
              Whether you're a startup, small business, or established enterprise, Helix provides an all-in-one digital solution.
            </p>
          </div>

          {/* Proven Success */}
          
          <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg">
            <img src={ss2} alt="Marketing Channels" className="rounded-md mb-4" />
            <p>
              The bar chart shows digital marketing channel popularity: <b>Social media leads at 35%</b>, followed by <b>SEO at 25%</b>.
            </p>
            <p className="text-sm mt-2 opacity-80">Popular Digital Marketing Channels (2024)</p>
          </div>
        </div>

        {/* Right Side - Data Insights */}
        <div className="space-y-6">
          {/* Digital Services Market Growth */}
          <div className="bg-indigo-900 text-white p-6 rounded-lg shadow-lg">
            <img src={ss1} alt="Market Growth Chart" className="rounded-md mb-4" />
            <p>
              Global digital services market is projected to grow from <b>$200B in 2020</b> to <b>$420B in 2024</b>.
            </p>
            <p className="text-sm mt-2 opacity-80">Global Digital Services Market Growth (2020-2024)</p>
          </div>

          {/* Popular Digital Marketing Channels */}
          
          <div className="bg-blue-300 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">PROVEN SUCCESS</h3>
            <p className="mt-2">
              We've built a reputation for delivering results and creating lasting relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketTrends;

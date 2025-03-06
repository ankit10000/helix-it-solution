import React from "react";

function Contact() {
  const handleSubmit = () => {
    alert("Message sent successfully!");
  };
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-4xl text-center font-bold text-black uppercase">
          Contact <span className="text-blue-600">Us</span>
        </h2>
      <p className="text-gray-700 text-center mt-2">We'd love to hear from you! Fill out the form below or reach us at our office.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Send a Message</h3>
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input required type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input required type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">Phone</label>
              <input required type="tel" placeholder="Enter your phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea required rows="4" placeholder="Enter your message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            <button onClick={handleSubmit} type="submit"style={{backgroundColor:"rgb(15 205 255)"}} className="w-full  text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
              Send Message
            </button>
        </div>

        {/* Contact Info & Google Map */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">Our Office</h3>
            <p className="text-gray-700">302, Third Floor, City Pearl, Opposite Hotel Gangaur(RTDC), VidhayakPuri, Jaipur-302001</p>
            <p className="text-gray-700">Email: solutionhelixit@gmail.com</p>
            <p className="text-gray-700">Phone: 7296911651, 9636394444</p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              title="Google Maps Location"
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3556.1785765825744!2d75.77790587544118!3d26.96124367661824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU3JzQwLjUiTiA3NcKwNDYnNDkuNyJF!5e0!3m2!1sen!2sin!4v1741278895460!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

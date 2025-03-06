import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-semibold " style={{color:"rgb(15 205 255)"}}>Helix It Solution</h2>
            <p className="mt-2 text-gray-400">
              Leading the way in web development, SEO, and digital marketing. Helping businesses grow online with cutting-edge solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold " style={{color:"rgb(15 205 255)"}}>Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/service" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold " style={{color:"rgb(15 205 255)"}}>Contact Us</h3>
            <p className="mt-2 text-gray-400"><strong >Address</strong>: 302, Third Floor, City Pearl, Opposite Hotel Gangaur(RTDC), VidhayakPuri, Jaipur-302001</p>
            <p className="text-gray-400"><strong >Email</strong>: solutionhelixit@gmail.com</p>
            <p className="text-gray-400"><strong >Phone</strong>:  7296911651</p>
            <p className="text-gray-400"> 9636394444</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold " style={{color:"rgb(15 205 255)"}}>Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition">
                <FaFacebookF size={20} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition">
                <FaTwitter size={20} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition">
                <FaLinkedinIn size={20} className="text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-orange-500 transition">
                <FaInstagram size={20} className="text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Helix It Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

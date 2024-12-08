"use client"

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // WhatsApp API integration
      const message = `New subscription: ${email}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "923060484798"; // WhatsApp number in international format
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappURL, "_blank");

      // Clear the email field
      setEmail("");
    }
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-[80px] md:px-10 md:flex md:justify-between text-gray-600">
        {/* Left Section: Logo and Description */}
        <div className="md:w-1/4 mb-10 md:mb-0 md:ml-[90px]">
          <div className="flex items-center mb-7">
            <img src="/logo.png" alt="Comforty Logo" className="h-[40px] w-[40px]" />
            <h1 className="text-2xl font-bold text-gray-800 ml-2">Comforty</h1>
          </div>
          <p className="text-sm">
          Let us live with hatred toward what is always desirable, and let the awkward situation be
          interrupted. Tomorrow, the situation will be better.
          </p>
          <div className="flex space-x-7 mt-7">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 text-gray-500 transition-all duration-300 hover:text-teal-500"
            >
              <FaFacebook className="w-[16px] h-[16px]" />
              <span className="absolute w-8 h-8 rounded-full border-2 border-transparent hover:border-teal-500 transition-all duration-300"></span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center ml-2 text-gray-500 transition-all duration-300 hover:text-teal-500"
            >
              <FaTwitter className="w-[16px] h-[16px]" />
              <span className="absolute w-8 h-8 rounded-full border-2 border-transparent hover:border-teal-500 transition-all duration-300"></span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center ml-2 text-gray-500 transition-all duration-300 hover:text-teal-500"
            >
              <FaInstagram className="w-[16px] h-[16px]" />
              <span className="absolute w-8 h-8 rounded-full border-2 border-transparent hover:border-teal-500 transition-all duration-300"></span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center ml-2 text-gray-500 transition-all duration-300 hover:text-teal-500"
            >
              <FaPinterest className="w-[16px] h-[16px]" />
              <span className="absolute w-8 h-8 rounded-full border-2 border-transparent hover:border-teal-500 transition-all duration-300"></span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center ml-2 text-gray-500 transition-all duration-300 hover:text-teal-500"
            >
              <FaYoutube className="w-[16px] h-[16px]" />
              <span className="absolute w-8 h-8 rounded-full border-2 border-transparent hover:border-teal-500 transition-all duration-300"></span>
            </a>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="md:flex md:space-x-40 md:mt-0">
          {/* Category */}
          <div className="mb-8 md:mb-0"> {/* Add margin bottom on mobile */}
            <h3 className="text-base font-semibold mb-6" style={{ color: '#9A9CAA' }}>CATEGORY</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/product" className="hover:text-teal-500 hover:underline">
                  Sofa
                </a>
              </li>
              <li>
                <a href="/product" className="hover:text-teal-500 hover:underline">
                  Armchair
                </a>
              </li>
              <li>
                <a href="/product" className="hover:text-teal-500 hover:underline">
                  Wing Chair
                </a>
              </li>
              <li>
                <a href="/product" className="hover:text-teal-500 hover:underline">
                  Desk Chair
                </a>
              </li>
              <li>
                <a href="/product" className="hover:text-teal-500 hover:underline">
                  Wooden Chair
                </a>
              </li>
              <li>
                <a href="/product" className="hover:text-teal-500 hover:underline">
                  Park Bench
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-semibold mb-6" style={{ color: '#9A9CAA' }}>SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-500 hover:underline">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="mt-8 md:mt-0 md:w-1/4 mr-20">
          <h3 className="text-base font-semibold mb-6" style={{ color: '#9A9CAA' }}>NEWSLETTER</h3>
          <div className="bg-white mb-4 rounded-md max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 ml-2 rounded-r-md text-sm transition-all duration-300 hover:bg-teal-600"
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className="text-sm">
          Pain itself is love, sitting in a place, the seat of the perfect of the world. The work was truly not yet finished.
          </p>
        </div>
      </div>


      <div className="border-t py-7 px-6 md:px-[140px] text-left text-sm text-gray-400 flex justify-between items-center">
        <p>
          @ 2021 - Blogy - Designed & Developed by{" "}
          <span className="text-gray-700">Taha Shabbir</span>
        </p>
        <img
          src="footerlogo.png"
          alt="Footer Logo"
          className="w-[227px] h-[27px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
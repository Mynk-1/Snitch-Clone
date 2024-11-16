import React, { useState } from "react";
import {
  ChevronDown,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react"; 

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    about: false,
    links: false,
    social: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Snitch Section */}
          <div className="space-y-4">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection("about")}
            >
              <h3 className="text-lg font-bold">About Snitch</h3>
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  isOpen.about ? "rotate-180" : "rotate-0"
                } md:hidden`}
              />
            </div>
            <div
              className={`text-gray-400 ${
                isOpen.about ? "block" : "hidden"
              } md:block`}
            >
              <p>
                Snitch is a modern men's fashion brand that offers bold and
                stylish outfits for every occasion.
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection("links")}
            >
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  isOpen.links ? "rotate-180" : "rotate-0"
                } md:hidden`}
              />
            </div>
            <ul
              className={`space-y-2 ${
                isOpen.links ? "block" : "hidden"
              } md:block`}
            >
              <li>
                <a href="/" className="hover:underline text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline text-gray-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="space-y-4">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection("social")}
            >
              <h3 className="text-lg font-bold">Follow Us</h3>
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  isOpen.social ? "rotate-180" : "rotate-0"
                } md:hidden`}
              />
            </div>
            <div
              className={`flex justify-start space-x-4 ${
                isOpen.social ? "block" : "hidden"
              } md:flex`}
            >
              <a href="https://facebook.com" className="hover:text-blue-500">
                <Facebook className="text-xl" />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-600">
                <Instagram className="text-xl" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <Twitter className="text-xl" />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-700">
                <Linkedin className="text-xl" />
              </a>
              <a href="https://youtube.com" className="hover:text-red-600">
                <Youtube className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500">
          &copy; 2024 Snitch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

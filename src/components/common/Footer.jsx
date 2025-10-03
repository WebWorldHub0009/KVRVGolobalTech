import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Translator from "./Translator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">

        {/* Logo & Brief */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent 
                 bg-gradient-to-r from-green-400 via-teal-300 to-green-400">
            KVRV Global Tech
          </h2>
          <p className="text-gray-300 text-sm">
            Smart Living, Secure Future — Automation, renewable energy, and lifestyle solutions under one roof.
          </p>

          <div className="flex">
            <div className="mr-auto">
              <Translator />
            </div>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-green-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-green-400 transition-colors">About Us</a></li>
            <li><a href="/solutions" className="hover:text-green-400 transition-colors">Solutions</a></li>
            <li><a href="/projects" className="hover:text-green-400 transition-colors">Projects</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition-colors">Contact Us</a></li>
          </ul>

        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-green-400">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaPhoneAlt />
              <a href="tel:8883010400" className="hover:underline">CRM: 88830 10400</a>
              <a
                href="https://wa.me/918883010400"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-green-500 hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaPhoneAlt />
              <a href="tel:7200449985" className="hover:underline">Sales: 72004 49985</a>
              <a
                href="https://wa.me/917200449985"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-green-500 hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaPhoneAlt />
              <a href="tel:9514306044" className="hover:underline">Office: 95143 06044</a>
              <a
                href="https://wa.me/919514306044"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-green-500 hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaEnvelope />
              <a href="mailto:friendsinfrabuildtech.blr@gmail.com" className="hover:underline">
                Karnataka: friendsinfrabuildtech.blr@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <FaEnvelope />
              <a href="mailto:Kvrvglobaltech.hsr@gmail.com" className="hover:underline">
                Tamil Nadu: Kvrvglobaltech.hsr@gmail.com
              </a>
            </li>
          </ul>
        </div>


        {/* Office Addresses */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-green-400">Our Offices</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-start gap-2 hover:text-green-400 transition-colors">
              <FaMapMarkerAlt />
              <div>
                <strong>Corporate - Karnataka:</strong><br />
                <a
                  href="https://www.google.com/maps?q=KVRV+Global+Tech,+No:1&2,+First+Floor,+Bhavan+Complex,+NH+47,+Attibelle,+Bangalore+-+562107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  KVRV Global Tech, No:1&2, First Floor, Bhavan Complex, NH 47, Attibelle, Bangalore - 562107
                </a>
              </div>
            </li>

            <li className="flex items-start gap-2 hover:text-green-400 transition-colors">
              <FaMapMarkerAlt />
              <div>
                <strong>Branch - Tamil Nadu:</strong><br />
                <a
                  href="https://www.google.com/maps?q=KVRV+GLOBAL+TECH,+Shop+No:+03,+Ground+Floor,+Sunnambu+Jeebi,+Hosur,+Krishnagiri+-+635109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  KVRV GLOBAL TECH, Shop No: 03, Ground Floor, Sunnambu Jeebi, Hosur, Krishnagiri - 635109
                </a>
              </div>
            </li>

            {/* ✅ Web Link ko bhi li ke andar rakha */}
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-purple-400" />
              <a
                href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition transform text-white px-4 py-2 rounded-lg shadow-md font-semibold"
              >
                🌐 Web Link
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-center py-6 mt-10 text-gray-400 text-sm justify-center items-center gap-2 md:gap-4 pt-6 text-center flex flex-col gap-1">
        <span>&copy; {new Date().getFullYear()} KVRV Global Tech. All Rights Reserved.</span>
        <a href="https://www.behance.net/" className="hover:text-green-400 transition-colors">Design Inspiration</a>
        <span>
          Developed & Designed by{" "}
          <a
            href="https://webworldhub.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 font-semibold transition-colors"
          >
            Web World Hub
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

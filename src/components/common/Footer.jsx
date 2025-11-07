import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Translator from "./Translator";
import VisitorCounter from "./VisitorCounter";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#001F3F] via-[#003C78] to-[#005B99] text-white pt-12 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">

        {/* Logo & Brief */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#00B4FF] via-[#0070C0] to-[#00B4FF] drop-shadow-md">
            KVRV Global Tech
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Smart Living, Secure Future — Automation, renewable energy, and lifestyle solutions under one roof.
          </p>

          <div className="flex">
            <div className="mr-auto">
              <Translator />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#00B4FF]">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-[#00B4FF] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#00B4FF] transition-colors">About Us</a></li>
              <li><a href="/solutions" className="hover:text-[#00B4FF] transition-colors">Solutions</a></li>
              <li><a href="/projects" className="hover:text-[#00B4FF] transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-[#00B4FF] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Visitor Counter */}
          <div className="mt-6 border-gray-700 pt-3">
            <VisitorCounter />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#00B4FF]">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors">
              <FaPhoneAlt className="text-[#00B4FF]" />
              <a href="tel:8883010400" className="hover:underline">CRM: 88830 10400</a>
              <a
                href="https://wa.me/918883010400"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-[#00B4FF] hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors">
              <FaPhoneAlt className="text-[#00B4FF]" />
              <a href="tel:7200449985" className="hover:underline">Sales: 72004 49985</a>
              <a
                href="https://wa.me/917200449985"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-[#00B4FF] hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors">
              <FaPhoneAlt className="text-[#00B4FF]" />
              <a href="tel:9514306044" className="hover:underline">Office: 95143 06044</a>
              <a
                href="https://wa.me/919514306044"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-[#00B4FF] hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors">
              <FaEnvelope className="text-[#00B4FF]" />
              <a href="mailto:friendsinfrabuildtech.blr@gmail.com" className="hover:underline">
                Karnataka: friendsinfrabuildtech.blr@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#00B4FF] transition-colors">
              <FaEnvelope className="text-[#00B4FF]" />
              <a href="mailto:Kvrvglobaltech.hsr@gmail.com" className="hover:underline">
                Tamil Nadu: Kvrvglobaltech.hsr@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Office Addresses */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#00B4FF]">Our Offices</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-start gap-2 hover:text-[#00B4FF] transition-colors">
              <FaMapMarkerAlt className="text-[#00B4FF]" />
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

            <li className="flex items-start gap-2 hover:text-[#00B4FF] transition-colors">
              <FaMapMarkerAlt className="text-[#00B4FF]" />
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

            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#00B4FF]" />
              <a
                href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#00B4FF] to-[#0070C0] text-white font-semibold px-8 py-3 rounded-lg
                   hover:from-[#0098E8] hover:to-[#005FA3] transition transform hover:scale-105 shadow-lg"
              >
                🌐 Web Link
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#004C99] text-center py-6 mt-10 text-gray-300 text-sm flex flex-col items-center gap-1">
        <span>&copy; {new Date().getFullYear()} KVRV Global Tech. All Rights Reserved.</span>
        <span>
          Developed & Designed by{" "}
          <a
            href="https://webworldhub.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00B4FF] hover:text-[#0098E8] font-semibold transition-colors"
          >
            Web World Hub
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

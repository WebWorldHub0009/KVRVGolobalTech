import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0a1a2f] text-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Gradient Heading */}
        <h3
          className="text-3xl md:text-4xl font-extrabold mb-6
                     bg-clip-text text-transparent bg-gradient-to-r from-[#0077c8] via-[#0099e6] to-[#0077c8]
                     animate-gradient-x"
        >
          Get in Touch
        </h3>

        {/* Contact Info */}
        <div className="mb-10 space-y-2 text-gray-300">
          {/* Phone */}
          <p className="flex items-center justify-center gap-3 flex-wrap">
            <FiPhone className="text-[#0099e6] w-5 h-5" />
            <a href="tel:+917200449985" className="hover:underline">
              +91 72004 49985
            </a>
            |
            <a href="tel:+918883010400" className="hover:underline">
              +91 88830 10400
            </a>
          </p>

          {/* Email */}
          <p className="flex items-center justify-center gap-3 flex-wrap">
            <FiMail className="text-[#0099e6] w-5 h-5" />
            <a href="mailto:info@kvrvglobaltech.com" className="hover:underline">
              info@kvrvglobaltech.com
            </a>
          </p>

          {/* Address */}
          <p className="flex items-center justify-center gap-3 flex-wrap text-sm text-gray-400">
            <FiMapPin className="text-[#0099e6] w-5 h-5" />
            <a
              href="https://www.google.com/maps?q=Bhavan+Complex,+Attibelle,+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Karnataka: Bhavan Complex, Attibelle, Bengaluru
            </a>
            •
            <a
              href="https://www.google.com/maps?q=Sunnambu+Zeebee,+Hosur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              TN: Sunnambu Zeebee, Hosur
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-[#102542] p-8 rounded-2xl shadow-lg space-y-4 border border-[#1b3b66] transition-transform duration-300 hover:scale-[1.02]">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-[#1b3b66] bg-[#0a1a2f] text-white
                       focus:outline-none focus:ring-2 focus:ring-[#0099e6] transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border border-[#1b3b66] bg-[#0a1a2f] text-white
                       focus:outline-none focus:ring-2 focus:ring-[#0099e6] transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-lg border border-[#1b3b66] bg-[#0a1a2f] text-white
                       focus:outline-none focus:ring-2 focus:ring-[#0099e6] transition"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#0077c8] to-[#00bfff] text-white font-semibold px-8 py-3 rounded-lg
                       hover:from-[#0099e6] hover:to-[#33ccff] transition transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

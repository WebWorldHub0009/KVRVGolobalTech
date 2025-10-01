import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Gradient Heading */}
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6
                   bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400
                   animate-gradient-x">
          Get in Touch
        </h3>

        {/* Contact Info */}
        <div className="mb-8 space-y-2 text-gray-200">
          {/* Phone */}
          <p className="flex items-center justify-center gap-2">
            <FiPhone className="text-green-400 w-5 h-5" />
            <a href="tel:+917200449985" className="hover:underline">
              +91 72004 49985
            </a>
            |
            <a href="tel:+918883010400" className="hover:underline">
              +91 88830 10400
            </a>
          </p>

          {/* Email */}
          <p className="flex items-center justify-center gap-2">
            <FiMail className="text-green-400 w-5 h-5" />
            <a href="mailto:info@kvrvglobaltech.com" className="hover:underline">
              info@kvrvglobaltech.com
            </a>
          </p>

          {/* Address */}
          <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <FiMapPin className="text-green-400 w-5 h-5" />
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
        <form className="bg-gray-700 p-8 rounded-2xl shadow-xl space-y-4 transition-transform duration-300 hover:scale-105">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-800 text-white
                   focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-800 text-white
                   focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-lg border border-gray-600 bg-gray-800 text-white
                   focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-teal-300 text-gray-900 font-semibold px-8 py-3 rounded-lg
                   hover:from-green-300 hover:to-green-200 transition transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

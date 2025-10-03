import React from "react";
import { FaLightbulb, FaShieldAlt, FaLeaf, FaSolarPanel, FaCogs, FaTint, FaHotTub, FaFan, FaGasPump, FaGlassWhiskey } from "react-icons/fa";
import { MdSensors, MdOutlineSecurity } from "react-icons/md";
import { GiWaterDrop, GiHeatHaze, GiAutoRepair } from "react-icons/gi";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-center px-4">
      {/* Section Heading */}
      <h2
        className="text-3xl md:text-5xl font-extrabold mb-8 
                   bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400"
      >
        About Us
      </h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
        At <span className="font-semibold text-green-500">KVRV Global Tech</span>, we believe that{" "}
        <span className="italic text-gray-800">"Home is not a place, it’s a feeling"</span>. <br />
        With operations across <span className="font-semibold">Karnataka</span> &{" "}
        <span className="font-semibold">Tamil Nadu</span>, we provide trusted solutions in{" "}
        <span className="font-medium text-green-400">
          Surveillance, Home Automation, Renewable Energy, Water Technology, Hot Water Systems, Air
          Conditioning, Elevators, Gas Tech, and Glass Tech
        </span>
        .
        <br />
        <br />
        Our mission is to deliver{" "}
        <span className="font-semibold text-teal-500">
          innovative, reliable, and energy-efficient technologies
        </span>{" "}
        that bring convenience, security, and sustainability to modern living and businesses.
      </p>

      {/* Feature Highlights */}
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-left mb-16">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col items-start">
          <FaLightbulb className="text-green-400 text-3xl mb-3" />
          <h3 className="font-bold text-lg text-green-400 mb-2">Innovation</h3>
          <p className="text-gray-600">
            Cutting-edge technology designed to enhance modern homes and smart businesses.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col items-start">
          <FaShieldAlt className="text-green-400 text-3xl mb-3" />
          <h3 className="font-bold text-lg text-green-400 mb-2">Reliability</h3>
          <p className="text-gray-600">
            Trusted solutions ensuring security, convenience, and long-term performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col items-start">
          <FaLeaf className="text-green-400 text-3xl mb-3" />
          <h3 className="font-bold text-lg text-green-400 mb-2">Sustainability</h3>
          <p className="text-gray-600">
            Eco-friendly, energy-efficient systems built for a sustainable future.
          </p>
        </div>
      </div>

      {/* Services / Domains Grid */}
      <h3 className="text-2xl font-bold mb-8 text-gray-800">Our Expertise</h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left relative w-full py-16 px-16 bg-cover bg-center"
        // className="relative w-full py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/services-bg.png')" }}
      >
        {[
          { icon: <MdOutlineSecurity />, label: "Surveillance & Smart Gadgets" },
          { icon: <GiAutoRepair />, label: "Entrance Automation" },
          { icon: <MdSensors />, label: "Home Automation" },
          { icon: <FaSolarPanel />, label: "Renewable Energy" },
          { icon: <GiWaterDrop />, label: "Water Technology" },
          { icon: <GiHeatHaze />, label: "Hot Water Tech" },
          { icon: <FaCogs />, label: "Pumps & Controllers" },
          { icon: <FaFan />, label: "Air Conditioning & Elevators" },
          { icon: <FaGasPump />, label: "Gas Technology" },
          { icon: <FaGlassWhiskey />, label: "Glass Technology" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <span className="text-green-500 text-2xl">{item.icon}</span>
            <span className="text-gray-700 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;


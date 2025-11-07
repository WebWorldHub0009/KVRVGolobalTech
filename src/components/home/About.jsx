import React from "react";
import { FaLightbulb, FaShieldAlt, FaLeaf } from "react-icons/fa";
import aboutImg from "../../assets/hero1.jpg";
import { solutions } from "../../data/data";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#f8f9fb] to-[#eef3f9] px-6 md:px-12">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#001F3F] via-[#0056B3] to-[#00BFFF]">
        About Us
      </h2>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 max-w-6xl mx-auto">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About KVRV Global Tech"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover border-4 border-[#0056B3]/40"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            At{" "}
            <span className="font-semibold text-[#0056B3]">KVRV Global Tech</span>, we believe that{" "}
            <span className="italic text-gray-800">
              "Home is not a place, it’s a feeling"
            </span>.
            <br />
            Operating across{" "}
            <span className="font-semibold text-[#001F3F]">Karnataka</span> &{" "}
            <span className="font-semibold text-[#001F3F]">Tamil Nadu</span>, we specialize in{" "}
            <span className="font-medium text-[#00BFFF]">
              Surveillance, Home Automation, Renewable Energy, Water Technology, Hot Water Systems,
              Air Conditioning, Elevators, Gas Tech, and Glass Tech
            </span>
            .
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our mission is to deliver{" "}
            <span className="font-semibold text-[#0056B3]">
              innovative, reliable, and energy-efficient technologies
            </span>{" "}
            that bring convenience, security, and sustainability to modern homes and businesses.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-left mb-20">
        {[
          {
            icon: <FaLightbulb className="text-[#00BFFF] text-3xl mb-3" />,
            title: "Innovation",
            desc: "Cutting-edge technology designed to enhance modern living and business environments.",
          },
          {
            icon: <FaShieldAlt className="text-[#0056B3] text-3xl mb-3" />,
            title: "Reliability",
            desc: "Trusted solutions that ensure safety, durability, and long-term satisfaction.",
          },
          {
            icon: <FaLeaf className="text-[#00BFFF] text-3xl mb-3" />,
            title: "Sustainability",
            desc: "Eco-friendly and energy-efficient systems that support a greener tomorrow.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border-t-4 border-[#0056B3]/50"
          >
            {feature.icon}
            <h3 className="font-bold text-lg text-[#0056B3] mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { FaLightbulb, FaShieldAlt, FaLeaf } from "react-icons/fa";
import aboutImg from "../../assets/hero1.jpg"; // ✅ add your own image path
import { solutions } from "../../data/data";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-6 md:px-12">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400">
        About Us
      </h2>

      {/* Flex Layout: Image + Text */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 max-w-6xl mx-auto">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About KVRV Global Tech"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            At{" "}
            <span className="font-semibold text-green-500">KVRV Global Tech</span>, we believe that{" "}
            <span className="italic text-gray-800">
              "Home is not a place, it’s a feeling"
            </span>. <br />
            With operations across{" "}
            <span className="font-semibold">Karnataka</span> &{" "}
            <span className="font-semibold">Tamil Nadu</span>, we provide trusted solutions in{" "}
            <span className="font-medium text-green-400">
              Surveillance, Home Automation, Renewable Energy, Water Technology, Hot Water Systems,
              Air Conditioning, Elevators, Gas Tech, and Glass Tech
            </span>
            .
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our mission is to deliver{" "}
            <span className="font-semibold text-teal-500">
              innovative, reliable, and energy-efficient technologies
            </span>{" "}
            that bring convenience, security, and sustainability to modern living and businesses.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      {/* <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3 text-left mb-20">
        {[
          {
            icon: <FaLightbulb className="text-green-400 text-3xl mb-3" />,
            title: "Innovation",
            desc: "Cutting-edge technology designed to enhance modern homes and smart businesses.",
          },
          {
            icon: <FaShieldAlt className="text-green-400 text-3xl mb-3" />,
            title: "Reliability",
            desc: "Trusted solutions ensuring security, convenience, and long-term performance.",
          },
          {
            icon: <FaLeaf className="text-green-400 text-3xl mb-3" />,
            title: "Sustainability",
            desc: "Eco-friendly, energy-efficient systems built for a sustainable future.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col items-start"
          >
            {feature.icon}
            <h3 className="font-bold text-lg text-green-400 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div> */}

      {/* Services / Domains Grid */}
      {/* <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Expertise</h3>
      <div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left relative w-full py-16 px-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/services-bg.png')" }}
      >
        {solutions.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col items-start"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-green-600 text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default About;

import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-center px-4">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8 
                     bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400">
        About Us
      </h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
        At <span className="font-semibold text-green-500">KVRV Global Tech</span>, we believe that
        <span className="italic text-gray-800"> "Home is not a place, it’s a feeling"</span>.
        With operations across Karnataka & Tamil Nadu, we deliver trusted solutions in
        <span className="font-medium text-green-400"> Surveillance, Home Automation, Renewable Energy, Water Technology, Hot Water Systems, Air Conditioning, Elevators, and Glass Tech</span>.
        <br /><br />
        Our mission is to provide <span className="font-semibold text-teal-500">innovative, reliable, and energy-efficient technologies</span>
        that bring convenience, security, and sustainability to modern living and businesses.
      </p>

      {/* Optional Feature Highlights */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg text-green-400 mb-2">Innovation</h3>
          <p className="text-gray-600">Delivering cutting-edge technology solutions for modern homes and businesses.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg text-green-400 mb-2">Reliability</h3>
          <p className="text-gray-600">Trusted solutions that ensure security, convenience, and performance.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg text-green-400 mb-2">Sustainability</h3>
          <p className="text-gray-600">Energy-efficient and eco-friendly technologies for a better future.</p>
        </div>
      </div>
    </section>
  );
}

export default About;

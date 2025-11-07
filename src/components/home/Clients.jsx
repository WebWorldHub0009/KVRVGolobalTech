import React from "react";
import { clients } from "../../data/data";

export default function Clients() {
    return (
        <section id="clients" className="py-20 px-6 bg-gradient-to-b from-[#f8fbff] to-white">
            {/* Section Title */}
            <h2
                className="text-3xl md:text-5xl font-extrabold text-center mb-14
                           bg-clip-text text-transparent bg-gradient-to-r from-[#0077c8] via-[#0099e6] to-[#0077c8]
                           animate-gradient-x">
                Our Trusted Clients
            </h2>

            {/* Client Logos */}
            <div className="flex flex-wrap justify-center items-center gap-10 max-w-6xl mx-auto">
                {clients.map((logo, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-md rounded-xl p-4 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                    >
                        <img
                            src={logo}
                            alt={`Client ${idx + 1}`}
                            className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

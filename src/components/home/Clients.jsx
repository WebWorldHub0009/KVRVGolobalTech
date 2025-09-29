import React from "react";
import { clients } from "../../data/data";


export default function Clients() {
    return (
        <section id="clients" className="py-16 px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12
                           bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400
                           animate-gradient-x">
                Our Trusted Clients
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
                {clients.map((logo, idx) => (
                    <img key={idx} src={logo} alt={`Client ${idx + 1}`} className="h-16 object-contain filter grayscale hover:filter-none transition-all duration-300" />
                ))}
            </div>
        </section>
    );
}

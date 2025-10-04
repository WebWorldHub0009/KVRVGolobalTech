import React from "react";
import { projects } from "../../data/data";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-gray-50 bg-center bg-cover min-h-screen"
            style={{ backgroundImage: "url('/images/services/renewable/solar.webp')" }}
        >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12
                     bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400
                     animate-gradient-x">
                Our Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {projects.map((p, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
                    >
                        <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-48 sm:h-56 md:h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity duration-300">
                            <h3 className="text-white text-lg sm:text-xl font-bold text-center px-2">{p.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

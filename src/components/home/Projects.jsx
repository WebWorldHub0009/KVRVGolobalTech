import React from "react";
import p1 from "../../assets/home_automation.jpg";
import p2 from "../../assets/solar.jpg";
import p3 from "../../assets/water_purification.webp"
const projects = [
    { title: "Smart Home Automation", image: p1 },
    { title: "Solar Energy Setup", image: p2 },
    { title: "Water Purification System", image: p3 },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-gray-50">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12
                           bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400
                           animate-gradient-x">
                Our Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((p, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity">
                            <h3 className="text-white text-xl font-bold">{p.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

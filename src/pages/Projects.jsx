import React from "react";
import { projects } from "../data/projects";
import Hero from "../components/common/Hero";
function Projects() {
    return (
        <section className="bg-gray-50">
            {/* Genric hero */}
            <Hero
                title="Our Projects"
                subtitle="Explore our wide range of innovative projects including smart surveillance, entrance automation, parking management, smart lighting, home energy management, and access control systems. Each project is designed with cutting-edge technology to enhance security, efficiency, and sustainability."
                backgroundImage="/images/services/renewable/solar1.webp"
            />
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-12 mt-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Our Projects
                </h2>
                <p className="text-gray-600">
                    Explore some of our successful implementations and ongoing projects
                    across automation, surveillance, and smart technologies.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{project.desc}</p>
                            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

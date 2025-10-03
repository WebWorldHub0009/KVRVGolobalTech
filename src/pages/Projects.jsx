import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import Hero from "../components/common/Hero";

function Projects() {
    return (
        <section className="bg-gray-50">
            {/* Full-screen Hero */}
            <Hero
                title="Our Projects"
                subtitle="Explore our wide range of innovative projects in smart surveillance, entrance automation, parking management, smart lighting, home energy management, and access control systems."
                backgroundImage="/images/services/renewable/solar1.webp"
            />

            {/* Intro Section */}
            <div className="text-center max-w-3xl mx-auto mb-12 mt-12 px-4 sm:px-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                    Explore some of our successful implementations and ongoing projects across automation, surveillance, and smart technologies.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 px-4 sm:px-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="h-48 sm:h-56 w-full object-cover"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mt-2 flex-grow">{project.desc}</p>
                            <Link
                                to={`/projects/${project.id}`}
                                className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Hero from "../components/common/Hero";

function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <h2 className="text-center text-red-500 text-2xl py-10">
                Project Not Found
            </h2>
        );
    }

    return (
        <div className="w-full mb-16">
            {/* Hero */}
            <Hero
                title={project.title}
                subtitle={project.desc}
                backgroundImage={project.img}
            />

            {/* Project Content */}
            <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-6">
                <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">{project.details}</p>

                {/* Optional: image gallery / additional content */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full rounded-2xl shadow-lg mb-6"
                />

                <Link
                    to="/projects"
                    className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                    Back to Projects
                </Link>
            </div>
        </div>
    );
}

export default ProjectDetails;

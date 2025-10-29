import React from "react";
import { useParams, Link } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";
import { motion } from "framer-motion";

export default function CategoryPage() {
    const { id } = useParams();
    const category = categoryDetails[id];

    if (!category)
        return <div className="text-center p-10 text-red-600">Category Not Found</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 🔥 Hero Section */}
            <div
                className="relative h-[60vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${category.image || "/default-banner.jpg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-5xl font-extrabold text-white drop-shadow-lg text-center px-6"
                >
                    {category.title}
                </motion.h1>
            </div>

            {/* 🔹 Main Content */}
            <div className="max-w-6xl mx-auto py-16 px-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                    {category.introduction}
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Types of {category.title}
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {category.types.map((type, i) => (
                            <Link
                                key={i}
                                to={`/category/${id}/type/${type.id}`}
                                className="bg-white shadow-lg hover:shadow-xl transition rounded-xl overflow-hidden border border-gray-100 transform hover:scale-105"
                            >
                                <div className="p-6 text-center">
                                    <h3 className="font-bold text-xl text-blue-700 mb-2">
                                        {type.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {type.shortDesc || "Click to explore more..."}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Applications */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                        Applications
                    </h2>
                    <ul className="list-disc text-left inline-block pl-6 space-y-2 text-gray-700">
                        {category.applications.map((app, i) => (
                            <li key={i}>{app}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-10 text-center">
                    <Link
                        to="/"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

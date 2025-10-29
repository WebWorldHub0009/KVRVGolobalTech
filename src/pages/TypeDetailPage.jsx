import React from "react";
import { useParams, Link } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";
import { motion } from "framer-motion";

export default function TypeDetailPage() {
    const { id, typeId } = useParams();
    const category = categoryDetails[id];
    const type = category?.types.find((t) => t.id === typeId);

    if (!type)
        return <div className="text-center p-10 text-red-600">Type Not Found</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <div
                className="relative h-[50vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${type.image || category.image || "/banner.jpg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-6"
                >
                    {type.name}
                </motion.h1>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto py-16 px-6">
                <p className="text-gray-700 text-lg leading-relaxed">{type.description}</p>

                {type.subtypes && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Subtypes</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {type.subtypes.map((sub, i) => (
                                <li key={i}>{sub}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                    <Link
                        to={`/category/${id}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Back to {category.title}
                    </Link>
                    <Link
                        to="/"
                        className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

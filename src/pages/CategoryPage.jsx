import React from "react";
import { useParams, Link } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";
import { motion } from "framer-motion";

export default function CategoryPage() {
    const { id } = useParams();
    const category = categoryDetails[id];

    if (!category)
        return (
            <div className="text-center p-10 text-red-600 text-lg font-semibold">
                Category Not Found
            </div>
        );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 🌄 Hero Banner */}
            <div
                className="relative h-[50vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${category.image || "/banner.jpg"})`,
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
                    {category.title}
                </motion.h1>
            </div>

            {/* 📄 Content Section */}
            <div className="max-w-6xl mx-auto py-16 px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-700 text-lg leading-relaxed mb-10 text-center"
                >
                    {category.description ||
                        "Explore the available types under this category."}
                </motion.p>

                {/* 🔹 Type Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {category.types.map((type) => (
                        <Link
                            key={type.id}
                            to={`/category/${id}/type/${type.id}`}
                            className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition overflow-hidden group"
                        >
                            <div
                                className="h-48 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${type.image || category.image})`,
                                }}
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition">
                                    {type.name}
                                </h3>

                                {/* ✅ Model Count */}
                                {type.subtypes && (
                                    <p className="text-gray-600 text-sm mt-2">
                                        {type.subtypes.length} Available Model
                                        {type.subtypes.length > 1 ? "s" : ""}
                                    </p>
                                )}

                                <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                                    {type.description || "Learn more about this type."}
                                </p>
                            </div>
                        </Link>
                    ))}
                </motion.div>

                {/* 🔙 Navigation */}
                <div className="mt-14 text-center">
                    <Link
                        to="/"
                        className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

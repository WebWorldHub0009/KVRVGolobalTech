// src/pages/CategoryPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function CategoryPage() {
    const { id } = useParams();

    // ✅ Normalize ID safely to match object keys like "cctv_cameras"
    const normalizedId = id
        ?.toLowerCase()
        .replace(/[-\s&]+/g, "_") // handles spaces, dashes & ampersands
        .replace(/_{2,}/g, "_")   // clean multiple underscores
        .trim();

    const category = categoryDetails[normalizedId];
    console.log("🧭 Route Param (id):", id);
    console.log("🧮 Normalized ID:", normalizedId);
    console.log("📂 Available Keys:", Object.keys(categoryDetails));


    if (!category) {
        console.warn("❌ Category not found for ID:", id);
        console.warn("✅ Available keys:", Object.keys(categoryDetails));
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Category Not Found</h2>
                <p className="text-gray-600 mb-4">
                    The category <strong>{id}</strong> doesn’t exist or has a name mismatch.
                </p>
                <Link to="/" className="text-blue-500 underline">
                    Go back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="py-16 bg-gray-50">
            {/* ✅ SEO Meta Tags */}
            <Helmet>
                <title>{`${category.title} | KVRV Global Tech`}</title>
                <meta
                    name="description"
                    content={`Explore ${category.title} solutions including ${category.types
                        .map((t) => t.name)
                        .join(", ")} and more from KVRV Global Tech.`}
                />
            </Helmet>

            {/* ✅ Hero Section */}
            <div
                className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${category.image || "/images/placeholder.webp"})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <h1 className="text-white text-4xl md:text-6xl font-bold relative z-10 text-center">
                    {category.title}
                </h1>
            </div>

            {/* ✅ Breadcrumb */}
            <div className="mt-6 text-sm text-gray-600 px-6">
                <Link to="/" className="hover:text-blue-600">
                    Home
                </Link>{" "}
                &gt;{" "}
                <span className="text-blue-600 font-semibold">{category.title}</span>
            </div>

            {/* ✅ Intro */}
            <motion.p
                className="text-gray-700 text-lg leading-relaxed my-10 text-center px-6 md:px-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {category.introduction || "Explore our innovative solutions."}
            </motion.p>

            {/* ✅ Type Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20">
                {category.types.map((type) => (
                    <motion.div
                        key={type.id}
                        whileHover={{ scale: 1.05 }}
                        className="relative rounded-xl overflow-hidden shadow-lg bg-white"
                    >
                        <Link to={`/category/${normalizedId}/type/${type.id}`}>
                            <div
                                className="h-60 bg-cover bg-center"
                                style={{ backgroundImage: `url(${type.image || "/images/placeholder.webp"})` }}
                            />
                            <div className="p-5 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{type.name}</h3>
                                <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                                    {type.description}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

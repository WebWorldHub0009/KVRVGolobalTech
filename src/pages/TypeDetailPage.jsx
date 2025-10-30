// src/pages/TypeDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function TypeDetailPage() {
    const { id, typeId } = useParams();

    // ✅ Normalize category & type IDs
    const normalizedId = id?.toLowerCase().replace(/\s+/g, "_");
    const normalizedTypeId = typeId?.toLowerCase().replace(/\s+/g, "_");

    // ✅ Fetch category & type safely
    const category = categoryDetails[normalizedId];
    const type = category?.types.find((t) => t.id.toLowerCase() === normalizedTypeId);

    // ✅ Handle not found cases gracefully
    if (!category || !type) {
        console.warn("❌ Type not found:", { id, typeId });
        console.info("✅ Available categories:", Object.keys(categoryDetails));
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Type Not Found</h2>
                <p className="text-gray-600 mb-4">
                    The product type <strong>{typeId}</strong> was not found under{" "}
                    <strong>{id}</strong>.
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
                <title>{`${type.name} | ${category.title} | KVRV Global Tech`}</title>
                <meta
                    name="description"
                    content={`Learn more about ${type.name} under ${category.title}. ${type.description || ""}`}
                />
            </Helmet>

            {/* ✅ Hero Section */}
            <div
                className="relative h-[45vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${type.image || "/images/placeholder.webp"})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <h1 className="text-white text-4xl md:text-5xl font-bold relative z-10 text-center">
                    {type.name}
                </h1>
            </div>

            {/* ✅ Breadcrumb */}
            <div className="mt-6 text-sm text-gray-600 px-6">
                <Link to="/" className="hover:text-blue-600">Home</Link> &gt;{" "}
                <Link to={`/category/${normalizedId}`} className="hover:text-blue-600">
                    {category.title}
                </Link>{" "}
                &gt;{" "}
                <span className="text-blue-600 font-semibold">{type.name}</span>
            </div>

            {/* ✅ Description Section */}
            <motion.div
                className="mt-10 px-6 md:px-20 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                    {type.description ||
                        "Detailed information about this product type will be available soon."}
                </p>

                {/* ✅ Subtypes Grid */}
                {type.subtypes && type.subtypes.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Available Models
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {type.subtypes.map((sub, index) => (
                                <li
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition text-gray-700"
                                >
                                    {typeof sub === "string" ? sub : sub.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* ✅ Navigation Buttons */}
                <div className="mt-16 flex flex-wrap gap-4 justify-center">
                    <Link
                        to={`/category/${normalizedId}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        ← Back to {category.title}
                    </Link>
                    <Link
                        to="/"
                        className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
                    >
                        🏠 Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}

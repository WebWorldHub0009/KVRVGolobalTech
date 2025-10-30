// src/pages/TypeDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function TypeDetailPage() {
    const { id, typeId } = useParams();

    // ✅ Normalize and safely decode IDs
    const normalizedId = id
        ?.toLowerCase()
        .replace(/[-\s&]+/g, "_")
        .replace(/_{2,}/g, "_")
        .trim();

    const decodedTypeId = decodeURIComponent(typeId || "").trim();
    const normalizedTypeId = decodedTypeId
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");

    const category = categoryDetails[normalizedId];

    // 🟥 Category not found
    if (!category) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <h2 className="text-3xl font-bold mb-4 text-red-600">
                    Category Not Found
                </h2>
                <p className="text-gray-600 mb-4">
                    The category <strong>{id}</strong> doesn’t exist or has a name mismatch.
                </p>
                <Link to="/" className="text-blue-500 underline">
                    Go back to Home
                </Link>
            </div>
        );
    }

    // ✅ Find type using both id and normalized name
    const type =
        category.types?.find(
            (t) =>
                t.id?.toLowerCase() === normalizedTypeId ||
                t.name
                    ?.toLowerCase()
                    .replace(/[^a-z0-9]+/g, "_")
                    .replace(/^_+|_+$/g, "") === normalizedTypeId
        ) || null;

    // 🟥 Type not found
    if (!type) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] text-center">
                <h2 className="text-3xl font-bold mb-4 text-red-600">Type Not Found</h2>
                <p className="text-gray-600 mb-4">
                    Type ID mismatch or missing data for:{" "}
                    <strong>{decodedTypeId || "undefined"}</strong>
                </p>
                <Link to={`/category/${normalizedId}`} className="text-blue-500 underline">
                    Back to {category.title}
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
                    content={`Discover ${type.name} under ${category.title} solutions by KVRV Global Tech. Learn about its models, features, and benefits.`}
                />
            </Helmet>

            {/* ✅ Hero Section */}
            <div
                className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${type.image || category.image || "/images/placeholder.webp"})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <h1 className="text-white text-4xl md:text-6xl font-bold relative z-10 text-center">
                    {type.name}
                </h1>
            </div>

            {/* ✅ Breadcrumb */}
            <div className="mt-6 text-sm text-gray-600 px-6">
                <Link to="/" className="hover:text-blue-600">
                    Home
                </Link>{" "}
                &gt;{" "}
                <Link to={`/category/${normalizedId}`} className="hover:text-blue-600">
                    {category.title}
                </Link>{" "}
                &gt;{" "}
                <span className="text-blue-600 font-semibold">{type.name}</span>
            </div>

            {/* ✅ Description */}
            {type.description && (
                <motion.p
                    className="text-gray-700 text-lg leading-relaxed my-10 text-center px-6 md:px-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {type.description}
                </motion.p>
            )}

            {/* ✅ Subtypes */}
            {type.subtypes && type.subtypes.length > 0 && (
                <section className="px-6 md:px-20 my-10">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        Available Models
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
                        {type.subtypes.map((sub, index) => (
                            <li key={index}>
                                {typeof sub === "string" ? sub : sub.name}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* ✅ Category-level Features */}
            {category.features && (
                <section className="px-6 md:px-20 my-10">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        Key Features
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
                        {category.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

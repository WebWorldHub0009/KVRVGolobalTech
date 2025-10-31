// src/components/CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";
import { slides } from "../data/data";

export default function CategoryPage() {
    const { categoryKey } = useParams();
    const category = categoryDetails[categoryKey];
    const heroImage = slides.find((slide) => slide.id === categoryKey)?.img;

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl">
                Category not found.
            </div>
        );
    }

    const normalizeType = (t) =>
        typeof t === "string"
            ? { name: t, description: null }
            : { name: t.name ?? t.title ?? "Unnamed Type", description: t.description ?? null };

    const typesList = category.types ? category.types.map(normalizeType) : [];

    return (
        <section className="bg-gray-50 min-h-screen mt-9">
            {/* Hero Section */}
            <div
                className="relative w-full h-[50vh] bg-cover bg-center"
                style={{
                    backgroundImage: heroImage
                        ? `url(${heroImage})`
                        : "linear-gradient(135deg, #1e3a8a, #10b981)",
                }}
            >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                        {category.title}
                    </h1>
                </div>
            </div>

            {/* Introduction */}
            {category.introduction && (
                <div className="max-w-5xl mx-auto py-12 px-6 text-center">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {category.introduction}
                    </p>
                </div>
            )}

            {/* Features */}
            {category.features?.length > 0 && (
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                        Key Features
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {category.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition flex items-start gap-3"
                            >
                                <span className="text-green-500 font-bold">✓</span>
                                <span className="text-gray-800">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Available Types */}
            {typesList.length > 0 && (
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                        Available Types
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {typesList.map((type, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow hover:shadow-xl transition-all p-6 text-center border border-gray-100"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {type.name}
                                </h3>
                                {type.description && (
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {type.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Applications */}
            {category.applications?.length > 0 && (
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                        Applications
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
                        {category.applications.map((app, index) => (
                            <li key={index}>{app}</li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

// src/components/CategoryPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";

export default function CategoryPage() {
    const { categoryKey } = useParams();
    const category = categoryDetails[categoryKey];

    // modal state
    const [isOpen, setIsOpen] = useState(false);
    const [activeType, setActiveType] = useState(null);

    // close on ESC
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
                setActiveType(null);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl">
                Category not found.
            </div>
        );
    }

    // helper to normalise type entries (string or object)
    const normalizeType = (t) =>
        typeof t === "string"
            ? { id: null, name: t, image: null, description: null, subtypes: null }
            : {
                id: t.id ?? null,
                name: t.name ?? t.title ?? "Unnamed Type",
                image: t.image ?? null,
                description: t.description ?? null,
                subtypes: t.subtypes ?? null,
            };

    return (
        <section className="bg-gray-50 min-h-screen">
            {/* Hero */}
            <div
                className="relative w-full h-[50vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
            >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                        {category.title}
                    </h1>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-5xl mx-auto py-12 px-6 text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                    {category.introduction}
                </p>
            </div>

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

            {/* Types (cards) */}
            {category.types?.length > 0 && (
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                        Available Types
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {category.types.map((t, idx) => {
                            const type = normalizeType(t);
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setActiveType(type);
                                        setIsOpen(true);
                                    }}
                                    className="group text-left bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-2 focus:outline-none"
                                    aria-label={`Open details for ${type.name}`}
                                >
                                    {type.image ? (
                                        <img
                                            src={type.image}
                                            alt={type.name}
                                            className="w-full h-48 object-cover"
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = category.image ?? "/images/placeholder.webp";
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-500">
                                            {type.name}
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600">
                                            {type.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">
                                            {type.description ?? "Click to view details"}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
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

            {/* Modal (shows type details) */}
            {isOpen && activeType && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => {
                            setIsOpen(false);
                            setActiveType(null);
                        }}
                    />
                    <div className="relative bg-white rounded-2xl max-w-3xl w-full mx-4 overflow-auto shadow-2xl">
                        <div className="flex items-start justify-between p-4 border-b">
                            <h3 className="text-xl font-semibold">{activeType.name}</h3>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveType(null);
                                }}
                                className="text-gray-500 hover:text-gray-700 p-2 rounded focus:outline-none"
                                aria-label="Close details"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {activeType.image && (
                                <img
                                    src={activeType.image}
                                    alt={activeType.name}
                                    className="w-full h-56 object-cover rounded-md"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = category.image ?? "/images/placeholder.webp";
                                    }}
                                />
                            )}

                            <div>
                                <h4 className="font-medium mb-2">Description</h4>
                                <p className="text-gray-700">
                                    {activeType.description ?? "No detailed description available."}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2">Subtypes</h4>
                                {Array.isArray(activeType.subtypes) && activeType.subtypes.length > 0 ? (
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        {activeType.subtypes.map((st, i) => (
                                            <li key={i}>
                                                {/* each subtype could be object or string */}
                                                {typeof st === "string" ? st : st.name ?? JSON.stringify(st)}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">No further subtypes available.</p>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 p-4 border-t">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveType(null);
                                }}
                                className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCameraRetro } from "react-icons/fa";

// Example gallery data — replace image URLs with your real ones
const galleryImages = [
    {
        id: 1,
        src: "/images/gallery/fire-system.jpg",
        title: "Fire Safety Installation",
    },
    {
        id: 2,
        src: "/images/gallery/automation.jpg",
        title: "Smart Home Automation",
    },
    {
        id: 3,
        src: "/images/gallery/solar-panel.jpg",
        title: "Solar Power Setup",
    },
    {
        id: 4,
        src: "/images/gallery/water-system.jpg",
        title: "Water Management System",
    },
    {
        id: 5,
        src: "/images/gallery/security.jpg",
        title: "Security Control Room",
    },
    {
        id: 6,
        src: "/images/gallery/training.jpg",
        title: "Team Installation Training",
    },
];

export default function Gallery() {
    const [activeImg, setActiveImg] = useState(null);

    return (
        <section className="bg-gradient-to-b from-white via-green-50 to-teal-50 min-h-screen py-20 px-6">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 bg-clip-text text-transparent mb-4 drop-shadow-md">
                    KVRV Gallery
                </h1>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                    A glimpse into our innovative projects, safety installations, and smart automation solutions across various sectors.
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((img) => (
                    <motion.div
                        key={img.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setActiveImg(img)}
                        className="relative overflow-hidden rounded-2xl cursor-pointer shadow-xl group bg-white/80 backdrop-blur-sm border border-white/40"
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 flex flex-col justify-end items-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white text-lg font-semibold mb-1">{img.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-teal-200">
                                <FaCameraRetro /> View Full Image
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Preview */}
            <AnimatePresence>
                {activeImg && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative max-w-5xl mx-auto p-4">
                            <button
                                onClick={() => setActiveImg(null)}
                                className="absolute -top-10 right-0 text-white text-3xl hover:text-teal-300 transition"
                            >
                                <FaTimes />
                            </button>
                            <motion.img
                                key={activeImg.id}
                                src={activeImg.src}
                                alt={activeImg.title}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="rounded-2xl w-full h-auto shadow-2xl border-4 border-teal-500/20"
                            />
                            <p className="text-center text-teal-200 mt-4 text-lg font-medium">{activeImg.title}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>

    );
}

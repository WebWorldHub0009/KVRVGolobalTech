import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { videoData } from "../../data/videoData";

const VideoShowcase = () => {
    const navigate = useNavigate();
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <div className="font-sans text-gray-800 bg-gray-50">
            {/* ---------------- Hero Section ---------------- */}
            <section
                className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden"
                style={{
                    backgroundImage: "url('/images/services/renewable/solar.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#000000aa] via-[#00000055] to-white/30"></div>

                <motion.div
                    className="relative z-10 px-6 max-w-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 drop-shadow-md uppercase tracking-wide">
                        KVRV Video Showcase
                    </h1>

                    <motion.p
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mt-6 text-lg md:text-xl text-white leading-relaxed"
                    >
                        Discover how KVRV integrates innovation, sustainability, and smart automation to shape a safer future.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={() => navigate("/contact")}
                        className="mt-8 px-10 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-white hover:to-white hover:text-green-600 transition cursor-pointer"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </section>

            {/* ---------------- Intro Section ---------------- */}
            <section className="py-20 px-6 md:px-20 bg-white text-center text-gray-700">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-6 font-serif">
                        KVRV: Redefining Safety & Automation
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our vision is to integrate safety and sustainability through advanced smart technologies.
                        Explore our featured videos to see how KVRV leads innovation across industries.
                    </p>
                </motion.div>
            </section>

            {/* ---------------- Video Gallery Section ---------------- */}
            <section className="bg-gray-100 py-20 px-6">
                <h3 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-16 flex items-center justify-center gap-3">
                    <FaYoutube className="text-green-500 text-5xl" /> Featured KVRV Videos
                </h3>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {videoData.map((vid) => (
                        <motion.div
                            key={vid.id}
                            whileHover={{ scale: 1.05, y: -8 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setActiveVideo(vid.src)}
                            className="bg-white border border-green-200 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(34,197,94,0.15)] hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition cursor-pointer group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={`https://img.youtube.com/vi/${vid.src.split("embed/")[1]}/hqdefault.jpg`}
                                    alt={vid.title}
                                    className="w-full h-56 object-cover group-hover:opacity-80 transition"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/50">
                                    <FaYoutube className="text-green-400 text-6xl drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-5 text-center">
                                <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 font-serif">
                                    {vid.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{vid.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ---------------- Modal ---------------- */}
            {activeVideo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                >
                    <div className="relative w-[90%] md:w-[70%] h-[60vh]">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src={`${activeVideo}?autoplay=1`}
                            title="KVRV Video Player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute -top-10 right-0 text-white text-4xl hover:text-green-400 transition"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default VideoShowcase;

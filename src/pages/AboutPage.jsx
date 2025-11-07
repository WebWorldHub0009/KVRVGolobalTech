import React from "react";
import hero from "../assets/AboutPageImg/hero.png";
import { solutions } from "../data/data";
import { Link } from "react-router-dom";
import { FaUsers, FaProjectDiagram, FaAward } from "react-icons/fa";
import Hero from "../components/common/Hero";

function About() {
    return (
        <section className="bg-gray-50">
            {/* Hero Section */}
            <Hero
                title="About Us"
                subtitle="Committed to creating smarter, safer, and more connected lifestyles."
                backgroundImage="/images/services/renewable/solar.webp"
            />

            {/* About Section */}
            <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                        About Us
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        We are a technology-driven company transforming spaces into smarter,
                        safer, and more sustainable environments. Our solutions span home
                        automation, renewable energy, water tech, and modern infrastructure.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block bg-gradient-to-r from-[#00b09b] via-[#00d4ff] to-[#0077b6] text-white 
                        px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition duration-300 shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </div>

                <div className="relative w-full flex justify-center">
                    <img
                        src={hero}
                        alt="About Us"
                        className="w-full max-w-lg h-auto rounded-3xl shadow-xl object-cover"
                    />
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 py-20">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent 
                        bg-gradient-to-r from-[#00b09b] via-[#00d4ff] to-[#0077b6]">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        To innovate and deliver end-to-end smart solutions that enhance safety,
                        comfort, and sustainability for residential, commercial, and industrial spaces.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent 
                        bg-gradient-to-r from-[#00b09b] via-[#00d4ff] to-[#0077b6]">
                        Our Vision
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        To become a leading technology partner, transforming spaces into
                        intelligent, eco-friendly, and efficient environments worldwide.
                    </p>
                </div>
            </div>

            {/* Core Solutions */}
            <div className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 
                    bg-clip-text text-transparent bg-gradient-to-r from-[#00b09b] via-[#00d4ff] to-[#0077b6]">
                    What We Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {solutions.map((sol, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 
                            transform transition duration-300 border-t-4 border-transparent 
                            hover:border-[#00b09b]"
                        >
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={sol.img}
                                    alt={sol.title}
                                    className="w-28 h-28 object-cover mb-4 rounded-full shadow-md"
                                />
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                                    {sol.title}
                                </h3>
                                <p className="text-gray-600">{sol.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-b from-[#e6f9f6] to-white py-20 px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent 
                    bg-gradient-to-r from-[#00b09b] via-[#00d4ff] to-[#0077b6]">
                    Why Choose Us
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl mb-12">
                    Innovative technology, sustainable solutions, expert team, and dedicated support make us your ideal partner.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { title: "Innovation", desc: "Cutting-edge smart solutions to stay ahead of the curve." },
                        { title: "Sustainability", desc: "Eco-friendly products and systems for a greener future." },
                        { title: "Expert Team", desc: "Skilled professionals delivering reliable and quality solutions." },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-transparent 
                            hover:border-[#00d4ff] transition duration-300"
                        >
                            <h3 className="font-semibold text-lg mb-2 text-[#0077b6]">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats / Achievements */}
            <div className="py-20 px-4 bg-gray-100 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent 
                    bg-gradient-to-r from-[#00b09b] via-[#00d4ff] to-[#0077b6]">
                    Our Achievements
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { icon: <FaUsers />, count: "500+", label: "Happy Clients" },
                        { icon: <FaProjectDiagram />, count: "300+", label: "Projects Delivered" },
                        { icon: <FaAward />, count: "10+", label: "Years Experience" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg flex flex-col items-center 
                            transition duration-300 hover:scale-105"
                        >
                            <div className="text-4xl text-[#00b09b] mb-3">{stat.icon}</div>
                            <h3 className="text-2xl font-bold">{stat.count}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Closing CTA */}
            <div className="py-20 px-4 text-center">
                <p className="max-w-2xl mx-auto text-gray-700 text-lg md:text-xl mb-6">
                    With a holistic approach, we integrate technology and sustainability to deliver cutting-edge solutions for residential, commercial, and industrial needs.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-[#00b09b] via-[#00d4ff] to-[#0077b6] 
                    text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition duration-300 shadow-lg"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
}

export default About;

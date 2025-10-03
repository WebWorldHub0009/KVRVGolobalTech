import React from "react";
import hero from "../assets/AboutPageImg/hero.png";
import { solutions } from "../data/data";
// import { Link } from "react-scroll";  // <-- here
import { Link } from "react-router-dom";
import { FaUsers, FaProjectDiagram, FaAward } from "react-icons/fa";
import Hero from "../components/common/Hero";


function About() {
    return (
        <section className="bg-gray-50">
            {/* Genric hero */}
            <Hero
                title="About Us"
                subtitle="We are pioneers in technology-driven lifestyle solutions."
                backgroundImage="/images/services/renewable/solar.webp"
            />

            {/* Hero Section */}
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
                        className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition cursor-pointer"
                    >
                        Get in Touch
                    </Link>


                </div>

                <div className="relative w-full flex justify-center">
                    <img
                        src={hero}
                        alt="About Us"
                        className="w-full max-w-lg h-auto rounded-3xl shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 py-20">
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        To innovate and deliver end-to-end smart solutions that enhance safety,
                        comfort, and sustainability for residential, commercial, and industrial spaces.
                    </p>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Our Vision
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        To become a leading technology partner, transforming spaces into
                        intelligent, eco-friendly, and efficient environments worldwide.
                    </p>
                </div>
            </div>

            {/* Solutions / Core Services */}
            <div className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
                    What We Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {solutions.map((sol, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
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

            {/* Highlights / Why Choose Us */}
            <div className="bg-green-50 py-20 px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                    Why Choose Us
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl mb-12">
                    Innovative technology, sustainable solutions, expert team, and dedicated support make us your ideal partner.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                        <p className="text-gray-600">Cutting-edge smart solutions to stay ahead of the curve.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                        <p className="text-gray-600">Eco-friendly products and systems for a greener future.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                        <p className="text-gray-600">Skilled professionals delivering reliable and quality solutions.</p>
                    </div>
                </div>
            </div>

            {/* Stats / Achievements */}
            <div className="py-20 px-4 bg-gray-100 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
                    Our Achievements
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
                        <FaUsers className="text-green-400 text-4xl mb-3" />
                        <h3 className="text-2xl font-bold">500+</h3>
                        <p className="text-gray-600">Happy Clients</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
                        <FaProjectDiagram className="text-green-400 text-4xl mb-3" />
                        <h3 className="text-2xl font-bold">300+</h3>
                        <p className="text-gray-600">Projects Delivered</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
                        <FaAward className="text-green-400 text-4xl mb-3" />
                        <h3 className="text-2xl font-bold">10+</h3>
                        <p className="text-gray-600">Years Experience</p>
                    </div>
                </div>
            </div>

            {/* Closing Statement + CTA */}
            <div className="py-20 px-4 text-center">
                <p className="max-w-2xl mx-auto text-gray-700 text-lg md:text-xl mb-6">
                    With a holistic approach, we integrate technology and sustainability to deliver cutting-edge solutions for residential, commercial, and industrial needs.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
}

export default About;

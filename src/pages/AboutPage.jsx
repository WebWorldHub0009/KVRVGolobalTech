import React from "react";
import hero from "../assets/AboutPageImg/hero.png";
import { solutions } from "../data/data";
import { FaUsers, FaProjectDiagram, FaAward } from "react-icons/fa";

function About() {
    return (
        <section id="about" className="bg-gray-50">

            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
                        About Us
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-6">
                        We are a technology-driven company transforming spaces into smarter, safer, and more sustainable environments. Our solutions span home automation, renewable energy, water tech, and modern infrastructure.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition"
                    >
                        Get in Touch
                    </a>
                </div>
                <div data-aos="fade-left">
                    <img
                        src={hero}
                        alt="About Us"
                        className="w-full rounded-3xl shadow-lg"
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
                        To innovate and deliver end-to-end smart solutions that enhance safety, comfort, and sustainability for residential, commercial, and industrial spaces.
                    </p>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        Our Vision
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        To become a leading technology partner, transforming spaces into intelligent, eco-friendly, and efficient environments worldwide.
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

            {/* Highlights Section */}
            <div className="bg-green-50 py-20 px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                    Why Choose Us
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl mb-12">
                    Innovative technology, sustainable solutions, expert team, and dedicated support make us your ideal partner for transforming spaces.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                        <p className="text-gray-600">
                            Cutting-edge smart solutions to stay ahead of the curve.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                        <p className="text-gray-600">
                            Eco-friendly products and systems for a greener future.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                        <p className="text-gray-600">
                            Skilled professionals delivering reliable and quality solutions.
                        </p>
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

            {/* Company Journey / Timeline */}
            <div className="py-20 px-4 bg-gray-50">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
                    Our Journey
                </h2>
                <div className="max-w-6xl mx-auto relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

                    {[
                        { year: "2015", title: "Founded", desc: "KVRV Global Tech was established with a vision to innovate smart solutions." },
                        { year: "2017", title: "First Major Project", desc: "Completed our first large-scale home automation project in Bangalore." },
                        { year: "2019", title: "Expanded to Tamil Nadu", desc: "Opened our branch in Hosur to serve more clients." },
                        { year: "2022", title: "Award & Recognition", desc: "Received industry recognition for excellence in smart solutions." },
                    ].map((item, idx) => (
                        <div key={idx} className="mb-12 relative flex justify-between items-center w-full">
                            <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                                {idx % 2 === 0 && (
                                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold text-gray-800">{item.year}</h3>
                                        <h4 className="text-lg font-medium text-green-500">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full z-10 shadow-lg text-white font-bold">
                                {item.year}
                            </div>

                            <div className={`hidden md:block w-1/2 ${idx % 2 !== 0 ? "pl-8 text-left" : "pr-8 text-right"}`}>
                                {idx % 2 !== 0 && (
                                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                                        <h3 className="text-xl font-semibold text-gray-800">{item.year}</h3>
                                        <h4 className="text-lg font-medium text-green-500">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="py-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
                    Meet Our Team
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {[1, 2, 3, 4].map((member) => (
                        <div key={member} className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
                            <h3 className="text-xl font-semibold text-gray-800">Member Name</h3>
                            <p className="text-gray-600">Designation</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Closing Statement + CTA */}
            <div className="py-20 px-4 text-center">
                <p className="max-w-2xl mx-auto text-gray-700 text-lg md:text-xl mb-6">
                    With a holistic approach, we integrate technology and sustainability to deliver cutting-edge solutions for residential, commercial, and industrial needs.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition"
                >
                    Contact Us
                </a>
            </div>

        </section>
    );
}

export default About;

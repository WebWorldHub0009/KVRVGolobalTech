import React, { useState, useEffect } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Hero from "../components/common/Hero";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
            .then(
                () => {
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                    setLoading(false);
                },
                () => {
                    alert("Failed to send message. Try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Contact Us"
                subtitle="We are pioneers in technology-driven lifestyle solutions."
                backgroundImage="/images/services/renewable/solar.webp"
            /><section className="relative bg-gradient-to-b from-green-50 via-white to-green-50 py-28 px-4 overflow-hidden">
                {/* Particles Background */}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    className="absolute inset-0 -z-10"
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "repulse" },
                                onClick: { enable: true, mode: "push" },
                            },
                        },
                        particles: {
                            color: { value: "#34D399" },
                            links: { color: "#34D399", distance: 120, enable: true, opacity: 0.2, width: 1 },
                            collisions: { enable: false },
                            move: { enable: true, speed: 1, random: true, outModes: "out" },
                            number: { value: 50, density: { enable: true, area: 800 } },
                            opacity: { value: 0.3 },
                            shape: { type: "circle" },
                            size: { value: { min: 2, max: 4 } },
                        },
                        detectRetina: true,
                    }}
                />

                {/* Header */}
                <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
                    <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Have questions or want to work together? Send us a message or reach out via our contact details.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        data-aos="fade-right"
                        className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-transform transform hover:-translate-y-2"
                    >
                        {["name", "email", "subject"].map((field) => (
                            <div className="mb-6" key={field}>
                                <label className="block text-gray-700 font-medium mb-2 capitalize">{field}</label>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition shadow-md focus:shadow-lg"
                                />
                            </div>
                        ))}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition shadow-md focus:shadow-lg"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="relative inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-3 rounded-full font-semibold hover:scale-105 transform transition overflow-hidden hover:ring-2 hover:ring-green-400 hover:ring-offset-2"
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <span className="absolute inset-0 bg-white opacity-10 rounded-full animate-ping"></span>
                        </button>
                    </form>

                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-8" data-aos="fade-left">
                        {[
                            { icon: <FiPhone className="w-6 h-6 text-green-500" />, title: "Phone", desc: "+91 72004 49985 | +91 88830 10400" },
                            { icon: <FiMail className="w-6 h-6 text-green-500" />, title: "Email", desc: "info@kvrvglobaltech.com" },
                            {
                                icon: <FiMapPin className="w-6 h-6 text-green-500" />,
                                title: "Office",
                                desc: "Karnataka: Bhavan Complex, Attibelle, Bengaluru\nTamil Nadu: Sunnambu Zeebee, Hosur",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg flex items-start gap-4 hover:shadow-2xl transition">
                                <div className="mt-1">{item.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                                    <p className="text-gray-600 whitespace-pre-line">{item.desc}</p>
                                </div>
                            </div>
                        ))}

                        {/* Google Maps */}
                        <div className="mt-6 rounded-3xl overflow-hidden shadow-lg">
                            <iframe
                                title="KVRV Office"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.000!2d77.623!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12d1f0!2sBengaluru!5e0!3m2!1sen!2sin!4v1680000000000"
                                className="w-full h-56 border-0"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
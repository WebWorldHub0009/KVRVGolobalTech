import React from "react";
import hero from "../assets/AboutPageImg/hero.png";
import surveillance from "../assets/AboutPageImg/surveillance.jpg";
import entrance from "../assets/AboutPageImg/entrance1.jpg";
import renewable from "../assets/hero3.jpg"
import WaterTechnology from "../assets/AboutPageImg/WaterTechnology.jpg"
import home from "../assets/home_automation.jpg";

const solutions = [
    {
        title: "Surveillance & Smart Gadgets",
        desc: "CCTV, VDP, Smart locks, Sensors, and Alarm systems to ensure safety and convenience.",
        img: surveillance,
    },
    {
        title: "Entrance Automation",
        desc: "Sliding & swing gates, rolling shutters, boom barriers, and high-speed doors for secure access.",
        img: entrance,
    },
    {
        title: "Home Automation",
        desc: "Smart control of lights, curtains, blinds, and appliances with wired, Wi-Fi, and Zigbee systems.",
        img: home,
    },
    {
        title: "Renewable Energy",
        desc: "Solar rooftops, pumps, street lights, fancy solar lights, UPS, and inverters for sustainable living.",
        img: renewable,
    },
    {
        title: "Water Technology",
        desc: "RO purifiers, softeners, filters, STP/WWTP/DM plants, and rainwater harvesting solutions.",
        img: WaterTechnology,
    },
    {
        title: "Hot Water Tech",
        desc: "Heat pumps, geysers, and solar water heaters for efficient hot water solutions.",
        img: "/images/solutions/hotwater.jpg",
    },
    {
        title: "Pumps & Controllers",
        desc: "Reliable water pumps, pressure boosters, and intelligent level controllers.",
        img: "/images/solutions/pumps.jpg",
    },
    {
        title: "Air Conditioning & Elevators",
        desc: "Advanced cooling solutions and vertical mobility systems for modern spaces.",
        img: "/images/solutions/ac-elevator.jpg",
    },
    {
        title: "Gas Technology",
        desc: "Safe LPG pipelines and durable copper lines for AC systems.",
        img: "/images/solutions/gas.jpg",
    },
    {
        title: "Glass Technology",
        desc: "Glass partitions, railings, skylights, and shower cabins for elegant interiors.",
        img: "/images/solutions/glass.jpg",
    },
];

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
                        To innovate and deliver end-to-end smart solutions that enhance
                        safety, comfort, and sustainability for residential, commercial,
                        and industrial spaces.
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

            {/* Highlights Section */}
            <div className="bg-green-50 py-20 px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                    Why Choose Us
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl mb-12">
                    Innovative technology, sustainable solutions, expert team, and
                    dedicated support make us your ideal partner for transforming spaces.
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

            {/* Closing Statement */}
            <div className="py-20 px-4 text-center">
                <p className="max-w-2xl mx-auto text-gray-700 text-lg">
                    With a holistic approach, we integrate technology and sustainability
                    to deliver cutting-edge solutions for residential, commercial, and
                    industrial needs.
                </p>
            </div>
        </section>
    );
}

export default About;

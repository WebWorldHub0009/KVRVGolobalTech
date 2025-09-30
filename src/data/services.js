// src/data/servicesData.js
import surveillance from "../assets/AboutPageImg/surveillance.jpg"

const services = [
    {
        id: "surveillance",
        title: "Surveillance & Smart Gadgets",
        description:
            "CCTV, Video Door Phones, Smart locks, Sensors, and Alarm systems to ensure safety, monitoring, and convenience for homes and businesses.",
        images: [
            surveillance,
            surveillance,
            surveillance,
        ],
        icon: "/icons/surveillance.svg",
    },
    {
        id: "entrance",
        title: "Entrance Automation",
        description:
            "Sliding & swing gates, rolling shutters, boom barriers, and high-speed doors for seamless automation and security at entry points.",
        images: [
            "/images/services/entrance/gate.jpg",
            "/images/services/entrance/shutter.jpg",
        ],
        icon: "/icons/entrance.svg",
    },
    {
        id: "automation",
        title: "Home Automation",
        description:
            "Smart lighting, curtain controls, voice-controlled devices, and centralized automation for modern smart homes.",
        images: [
            "/images/services/automation/lights.jpg",
            "/images/services/automation/curtain.jpg",
        ],
        icon: "/icons/home-automation.svg",
    },
    {
        id: "renewable",
        title: "Renewable Energy",
        description:
            "Solar panels, wind energy, and hybrid renewable solutions to reduce energy bills and support sustainability.",
        images: [
            "/images/services/renewable/solar.jpg",
            "/images/services/renewable/wind.jpg",
        ],
        icon: "/icons/renewable.svg",
    },
    {
        id: "watertech",
        title: "Water Technology",
        description:
            "Advanced water treatment, purification, and recycling solutions for residential, commercial, and industrial use.",
        images: [
            "/images/services/watertech/purifier.jpg",
            "/images/services/watertech/treatment.jpg",
        ],
        icon: "/icons/water.svg",
    },
    {
        id: "hotwater",
        title: "Hot Water Tech",
        description:
            "Efficient water heating solutions including geysers, solar water heaters, and heat pumps.",
        images: [
            "/images/services/hotwater/geyser.jpg",
            "/images/services/hotwater/solar-water.jpg",
        ],
        icon: "/icons/hotwater.svg",
    },
    {
        id: "pumps",
        title: "Pumps & Controllers",
        description:
            "High-performance pumps and advanced controllers designed for efficiency in residential and commercial applications.",
        images: [
            "/images/services/pumps/pump.jpg",
            "/images/services/pumps/controller.jpg",
        ],
        icon: "/icons/pump.svg",
    },
    {
        id: "ac",
        title: "Air Conditioning & Elevators",
        description:
            "Modern HVAC systems and elevator solutions to ensure comfort and smooth mobility in buildings.",
        images: [
            "/images/services/ac/air-conditioner.jpg",
            "/images/services/ac/elevator.jpg",
        ],
        icon: "/icons/ac.svg",
    },
    {
        id: "gas",
        title: "Gas Technology",
        description:
            "Safe and reliable gas pipeline systems, detectors, and automation technology for residential and industrial needs.",
        images: [
            "/images/services/gas/gas-pipeline.jpg",
            "/images/services/gas/gas-detector.jpg",
        ],
        icon: "/icons/gas.svg",
    },
    {
        id: "glass",
        title: "Glass Technology",
        description:
            "High-quality glass solutions including tempered glass, laminated glass, and smart switchable glass.",
        images: [
            "/images/services/glass/tempered.jpg",
            "/images/services/glass/smart-glass.jpg",
        ],
        icon: "/icons/glass.svg",
    },
];

export default services;

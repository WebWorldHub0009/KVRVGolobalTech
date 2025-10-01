// src/data/servicesData.js

// // About / Surveillance
import surveillance1 from "../assets/AboutPageImg/surveillance.jpg";

const services = [
    {
        id: "surveillance",
        title: "Surveillance & Smart Gadgets",
        description:
            "CCTV, Video Door Phones, Smart locks, Sensors, and Alarm systems to ensure safety, monitoring, and convenience for homes and businesses.",
        images: [
            surveillance1,
            surveillance1,
            surveillance1
        ],
        keyFeatures: [
            "24/7 high-definition monitoring",
            "Remote access via mobile app",
            "Smart alerts and notifications",
        ],
        applications: ["Home Security", "Commercial Buildings", "Industrial Sites"],
        testimonials: [
            { name: "John Doe", feedback: "Excellent coverage and easy to use.", rating: 5 },
            { name: "Jane Smith", feedback: "Highly recommended for small businesses.", rating: 4 },
        ],
    },
    {
        id: "entrance",
        title: "Entrance Automation",
        description:
            "Sliding & swing gates, rolling shutters, boom barriers, and high-speed doors for seamless automation and security at entry points.",
        images: [
            "/images/services/entrance/gate.webp",
            "/images/services/entrance/shutter.webp",
        ],
        keyFeatures: [
            "Automated sliding & swing gates",
            "Boom barriers for secure entry",
            "High-speed doors for commercial use",
        ],
        applications: ["Residential Complexes", "Commercial Buildings", "Factories"],
        testimonials: [
            { name: "Alice Green", feedback: "Smooth and reliable automation.", rating: 5 },
        ],
    },
    {
        id: "automation",
        title: "Home Automation",
        description:
            "Smart lighting, curtain controls, voice-controlled devices, and centralized automation for modern smart homes.",
        images: [
            "/images/services/automation/home-automation1.webp",
            "/images/services/automation/home-automation.webp",
        ],
        keyFeatures: [
            "Voice-controlled devices",
            "Automated lighting & curtains",
            "Centralized control panel",
        ],
        applications: ["Smart Homes", "Villas", "Apartments"],
        testimonials: [
            { name: "Robert Lee", feedback: "My home feels futuristic now!", rating: 5 },
        ],
    },
    {
        id: "renewable",
        title: "Renewable Energy",
        description:
            "Solar panels, wind energy, and hybrid renewable solutions to reduce energy bills and support sustainability.",
        images: [
            "/images/services/renewable/solar.webp",
            "/images/services/renewable/solar1.webp",
        ],
        keyFeatures: [
            "Rooftop solar solutions",
            "Wind and hybrid energy options",
            "Cost-effective & sustainable",
        ],
        applications: ["Residential", "Commercial", "Industrial"],
        testimonials: [
            { name: "Emma Watson", feedback: "Significant reduction in electricity bills.", rating: 5 },
        ],
    },
    {
        id: "watertech",
        title: "Water Technology",
        description:
            "Advanced water treatment, purification, and recycling solutions for residential, commercial, and industrial use.",
        images: [
            "/images/services/watertech/watertech1.webp",
            "/images/services/watertech/watertech.webp",
        ],
        keyFeatures: ["RO and water softening", "STP/WWTP solutions", "Rainwater harvesting integration"],
        applications: ["Residential", "Commercial Buildings", "Factories"],
        testimonials: [
            { name: "David Kim", feedback: "Water quality improved significantly.", rating: 5 },
        ],
    },
    {
        id: "hotwater",
        title: "Hot Water Tech",
        description:
            "Efficient water heating solutions including geysers, solar water heaters, and heat pumps.",
        images: [
            "/images/services/hotwater/geyser.webp",
            "/images/services/hotwater/watertech.webp",
        ],
        keyFeatures: ["Solar water heaters", "Geysers and heat pumps", "Energy efficient systems"],
        applications: ["Homes", "Hotels", "Factories"],
        testimonials: [
            { name: "Sophia Brown", feedback: "Hot water available instantly.", rating: 5 },
        ],
    },
    {
        id: "pumps",
        title: "Pumps & Controllers",
        description:
            "High-performance pumps and advanced controllers designed for efficiency in residential and commercial applications.",
        images: [
            "/images/services/pumps/pump.webp",
            "/images/services/pumps/controller.webp",
        ],
        keyFeatures: ["High efficiency pumps", "Smart controllers for automation", "Durable & low-maintenance"],
        applications: ["Residential", "Irrigation Systems", "Industrial Sites"],
        testimonials: [
            { name: "Liam Scott", feedback: "Pumps are very reliable and silent.", rating: 5 },
        ],
    },
    {
        id: "ac",
        title: "Air Conditioning & Elevators",
        description:
            "Modern HVAC systems and elevator solutions to ensure comfort and smooth mobility in buildings.",
        images: [
            "/images/services/ac/air-conditioner.webp",
            "/images/services/ac/elevator.webp",
        ],
        keyFeatures: ["Energy-efficient HVAC systems", "Modern elevators with smooth mobility", "Smart climate control"],
        applications: ["Residential Buildings", "Offices", "Hotels"],
        testimonials: [
            { name: "Olivia Davis", feedback: "AC works perfectly and elevators are smooth.", rating: 5 },
        ],
    },
    {
        id: "gas",
        title: "Gas Technology",
        description:
            "Safe and reliable gas pipeline systems, detectors, and automation technology for residential and industrial needs.",
        images: [
            "/images/services/gas/gas-pipeline.webp",
            "/images/services/gas/gas-detector.webp",
        ],
        keyFeatures: ["Gas leak detectors", "Pipeline automation", "Industrial & residential safety"],
        applications: ["Factories", "Homes", "Restaurants"],
        testimonials: [
            { name: "Ethan Clark", feedback: "Reliable and safe gas installations.", rating: 5 },
        ],
    },
    {
        id: "glass",
        title: "Glass Technology",
        description:
            "High-quality glass solutions including tempered glass, laminated glass, and smart switchable glass.",
        images: [
            "/images/services/glass/tempered.webp",
            "/images/services/glass/smart-glass.webp",
        ],
        keyFeatures: ["Tempered and laminated glass", "Smart switchable glass", "Custom glass solutions"],
        applications: ["Homes", "Offices", "Commercial Buildings"],
        testimonials: [
            { name: "Mia Johnson", feedback: "Glass solutions are high quality and sleek.", rating: 5 },
        ],
    },
];

export default services;




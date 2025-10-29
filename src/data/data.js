// for hero 
import hero1 from "../assets/hero1.jpg"
import hero5 from "../assets/hero5.png"
import hero6 from "../assets/hero6.png"
import surveillance from "../assets/AboutPageImg/surveillance.jpg";
import entrance from "../assets/AboutPageImg/entrance1.jpg";
import renewable from "../assets/hero3.jpg";
import WaterTechnology from "../assets/AboutPageImg/WaterTechnology.jpg";
import Pump from "../assets/AboutPageImg/pump&Controle.jpg";
import ac from "../assets/AboutPageImg/ac.webp";
import gas from "../assets/AboutPageImg/gas.webp";
import glass from "../assets/AboutPageImg/glass.webp";
import home from "../assets/home_automation.jpg";
import p1 from "../assets/home_automation.jpg";
import p2 from "../assets/solar.jpg";
import p3 from "../assets/water_purification.webp"
import hotwater from "/images/services/hotwater/geyser.webp"
export const slides = [
  {
    title: "Water Tech",
    subtitle:
      "RO Water Purifiers, Water Softeners, Sand Filters, Carbon Filters, Commercial RO Systems, STP, WWTP, DM Plants, Rain Water Harvesting (RWH)",
    img: WaterTechnology, // apna image daalna
  },
  {
    title: "Hot Water Tech",
    subtitle:
      "Heat Pump (Hot Water System), Geysers, Solar Water Heaters, Gujarat Boiler",
    img: hotwater, // apna image daalna
  },
  {
    title: "Pumps & Controllers",
    subtitle:
      "Pressure Booster Pumps, Water Pumps, Automatic Water Level Controllers, Water Level Indicators",
    img: Pump, // apna image daalna
  },
  {
    title: "Air Conditioners & Elevators (Lift)",
    subtitle:
      "Efficient Air Conditioning and Modern Elevator Systems for Commercial and Residential Spaces",
    img: ac, // apna image daalna
  },
  {
    title: "Gas Tech",
    subtitle: "LPG Gas Line, A/C Copper Line",
    img: "/images/services/gas/lpg.webp", // apna image daalna
  },
  {
    title: "Glass Tech",
    subtitle:
      "Shower Partitions, Glass Railings, Sky Light Glasses, Window Glasses, Office Partitions",
    img: glass, // apna image daalna
  },
  {
    title: "Surveillance Systems & Smart Gadgets",
    subtitle:
      "CCTV Cameras, Video Door Phone (VDP), Smart Digital Door Locks, Gas Leakage Detectors, Alarm & Sensors",
    img: surveillance, // apna image daalna
  },
  {
    title: "Entrance Automation",
    subtitle:
      "Sliding Gate Operator, Swing Gate Operator, Rolling Shutter Operator, High Speed Door Operator, Rapid Door Operator, Boom Barrier System",
    img: entrance, // apna image daalna
  },
  {
    title: "Home Automation",
    subtitle: "Light Automation, Curtain Operators, Blind Operators",
    img: home, // apna image daalna
  },
  {
    title: "Renewable Energy Source",
    subtitle:
      "Roof-Top Solar System, Solar Pumps, UPS & Inverters, Solar Street Lights, Solar Fancy Lights",
    img: renewable, // apna image daalna
  },
];


export const testimonials = [
  {
    name: "Amit Verma",
    role: "IT Manager, TechVision Pvt. Ltd.",
    feedback: "The team delivered exceptional results on time. Their expertise in automation and renewable solutions has transformed our workplace efficiency. I truly appreciate their professional approach and problem-solving attitude."
  },
  {
    name: "Sophia Mehta",
    role: "Founder, GreenFuture Solutions",
    feedback: "Working with them was a smooth experience. Their innovative solutions in energy and water technology helped our organization move towards sustainability. The dedication and communication were outstanding."
  },
  {
    name: "Ravi Sharma",
    role: "Operations Head, SecureHomes",
    feedback: "They are our go-to technology partner for surveillance and automation projects. The quality of their service and after-support is unmatched. Highly recommended for businesses looking for reliable tech partners."
  },
  {
    name: "Priya Nair",
    role: "CEO, AquaPure Systems",
    feedback: "The team implemented water technology solutions that exceeded our expectations. From planning to execution, everything was handled with great professionalism and efficiency. A trusted partner indeed."
  },
  // {
  //     name: "Daniel Fernandes",
  //     role: "Facilities Director, SkyTech Towers",
  //     feedback: "We collaborated on a smart building project and their expertise in home automation and air conditioning systems was remarkable. They ensured seamless integration with modern tech, making our spaces smarter and more energy-efficient."
  // }
];



export const solutions = [
  {
    title: "Surveillance & Smart Gadgets",
    desc: "CCTV, video door phones, smart locks, sensors, and alarm systems for complete safety.",
    img: surveillance,
  },
  {
    title: "Entrance Automation",
    desc: "Automatic sliding & swing gates, shutters, boom barriers, and high-speed doors.",
    img: entrance,
  },
  {
    title: "Home Automation",
    desc: "Smart lighting, curtain control, voice-enabled systems, and hybrid automation.",
    img: home,
  },
  {
    title: "Renewable Energy",
    desc: "Solar rooftops, inverters, solar pumps, and eco-friendly street lighting solutions.",
    img: renewable,
  },
  {
    title: "Water Technology",
    desc: "RO purifiers, softeners, filters, wastewater treatment, and rainwater harvesting.",
    img: WaterTechnology,
  },
  {
    title: "HVAC & Cooling Solutions",
    desc: "Efficient air conditioning, chillers, and elevators for modern living and workplaces.",
    img: ac,
  },
  {
    title: "Gas Technology",
    desc: "Safe LPG pipeline installation and durable copper line solutions for AC systems.",
    img: gas,
  },
  {
    title: "Glass & Interior Technology",
    desc: "Glass partitions, railings, skylights, and shower cabins for elegant interiors.",
    img: glass,
  },
];



export const projects = [
  { title: "Smart Home Automation", image: p1 },
  { title: "Solar Energy Setup", image: p2 },
  { title: "Water Purification System", image: p3 },
];

export const clients = [
  glass,
  WaterTechnology,
  ac,
  home,
];

// src/data/associates.js
export const associates = [
  {
    name: "TechCorp",
    logo: entrance,
    link: "https://techcorp.com",
    tagline: "Leading provider of IoT & smart solutions",
  },
  {
    name: "GreenEnergy",
    logo: entrance,
    link: "https://greenenergy.com",
    tagline: "Renewable energy specialists",
  },
  {
    name: "SmartHomes",
    logo: entrance,
    link: "https://smarthomes.com",
    tagline: "Home automation & smart living",
  },
  {
    name: "SecureVision",
    logo: entrance,
    link: "https://securevision.com",
    tagline: "Advanced surveillance systems",
  },
  {
    name: "WaterTech",
    logo: WaterTechnology,
    link: "https://watertech.com",
    tagline: "Water purification & management",
  },
  {
    name: "SolarPro",
    logo: renewable,
    link: "https://solarpro.com",
    tagline: "Solar energy solutions for homes & industry",
  },
  {
    name: "GlassMasters",
    logo: glass,
    link: "https://glassmasters.com",
    tagline: "Architectural glass & A/C systems",
  },
  {
    name: "EcoLift",
    logo: entrance,
    link: "#",
    tagline: "Modern elevator solutions",
  },
  {
    name: "HeatWave",
    logo: entrance,
    link: "#",
    tagline: "Efficient hot water & heating systems",
  },
];


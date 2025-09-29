// for hero 
import hero1 from "../assets/hero1.jpg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"
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
export const slides = [
    {
        title: "Surveillance Systems",
        subtitle: "CCTV, VDP, Smart Locks, Alarms — Complete security solutions.",
        img: hero1, // apna image daalna
    },
    {
        title: "Home Automation",
        subtitle: "Lights, Curtains, Voice control, Hybrid automation.",
        img: hero4,
    },
    {
        title: "Renewable Energy",
        subtitle: "Roof-top solar, solar pumps, street lights & inverters.",
        img: hero3,
    },
];

export const testimonials = [
    { name: "Client One", feedback: "Amazing work! Highly recommend." },
    { name: "Client Two", feedback: "Professional and reliable team." },
    { name: "Client Three", feedback: "Our go-to tech partner!" },
];


export const solutions = [
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
    // {
    //     title: "Hot Water Tech",
    //     desc: "Heat pumps, geysers, and solar water heaters for efficient hot water solutions.",
    //     img: "/images/solutions/hotwater.jpg",
    // },
    {
        title: "Pumps & Controllers",
        desc: "Reliable water pumps, pressure boosters, and intelligent level controllers.",
        img: Pump,
    },
    {
        title: "Air Conditioning & Elevators",
        desc: "Advanced cooling solutions and vertical mobility systems for modern spaces.",
        img: ac,
    },
    {
        title: "Gas Technology",
        desc: "Safe LPG pipelines and durable copper lines for AC systems.",
        img: gas,
    },
    {
        title: "Glass Technology",
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
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
];
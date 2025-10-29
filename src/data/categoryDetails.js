// ✅ src/data/categoryDetails.js
import surveillance from "../assets/AboutPageImg/surveillance.jpg";
import entrance from "../assets/AboutPageImg/entrance1.jpg";
import home from "../assets/home_automation.jpg";
import renewable from "../assets/hero3.jpg";

export const categoryDetails = {
    // 1️⃣ WATER TECH
    watertech: {
        title: "Water Solutions",
        image: "/images/services/watertech/watertech.webp",
        introduction:
            "KR Water Tech Solutions provides comprehensive systems for purification, conditioning, and recycling of water. Designed for domestic, commercial, and industrial needs.",
        types: [
            {
                id: "rowaterpurifiers",
                name: "RO Water Purifiers",
                image: "/images/services/watertech/ro.webp",
                description:
                    "RO Water Purifiers remove dissolved salts and impurities using advanced membrane technology.",
                subtypes: ["Wall Mounted", "Under the Sink"],
            },
            {
                id: "watersofteners",
                name: "Water Softeners",
                image: "/images/services/watertech/softener.webp",
                description:
                    "Water Softeners help reduce hardness by removing calcium and magnesium ions, extending appliance life.",
                subtypes: ["Manual", "Automatic"],
            },
            {
                id: "waterconditioners",
                name: "Water Conditioners",
                image: "/images/services/watertech/conditioner.webp",
                description:
                    "Water conditioners neutralize minerals and prevent scaling without removing beneficial minerals.",
            },
            {
                id: "commercialro",
                name: "Commercial RO & Water Treatment Plant",
                image: "/images/services/watertech/commercialro.webp",
                description:
                    "Advanced large-scale RO systems suitable for apartments, schools, and industries.",
                subtypes: ["Manual", "Automatic"],
            },
            {
                id: "stpwwtp",
                name: "STP & WWTP",
                image: "/images/services/watertech/stp.webp",
                description:
                    "Sewage Treatment Plants and Waste Water Treatment Plants for sustainable waste management.",
            },
            {
                id: "rwh",
                name: "Rain Water Harvesting (RWH)",
                image: "/images/services/watertech/rwh.webp",
                description:
                    "Rainwater harvesting systems designed for water conservation and ground recharge.",
            },
        ],
        applications: [
            "Residential & Industrial Water Purification",
            "Apartment Complexes & Hotels",
            "Water Recycling & Reuse",
            "Rainwater Storage Systems",
        ],
    },

    // 2️⃣ HOT WATER TECH
    hotwatertech: {
        title: "Hot Water Solutions",
        image: "/images/services/hotwater/geyser.webp",
        introduction:
            "Efficient and sustainable hot water systems designed for domestic, commercial, and industrial use.",
        types: [
            {
                id: "geysers",
                name: "Geysers",
                image: "/images/services/hotwater/geyser.webp",
                description:
                    "Compact and efficient heating units for domestic hot water use.",
                subtypes: ["Domestic Geysers"],
            },
            {
                id: "gujaratboilers",
                name: "Gujarat Boilers",
                image: "/images/services/hotwater/boiler.webp",
                description:
                    "Reliable boilers designed for consistent hot water output.",
                subtypes: ["Domestic Boilers"],
            },
            {
                id: "solarheaters",
                name: "Solar Water Heaters",
                image: "/images/services/hotwater/solar.webp",
                description:
                    "Solar-powered water heaters using renewable energy for heating.",
                subtypes: ["ETC Type", "FPC Type"],
            },
            {
                id: "heatpumps",
                name: "Heat Pumps",
                image: "/images/services/hotwater/heatpump.webp",
                description:
                    "Energy-efficient heat pumps for both domestic and commercial use.",
                subtypes: [
                    "Domestic Heat Pumps",
                    "Commercial Heat Pumps",
                    "Industrial Heat Pumps",
                    "Swimming Pool Heat Pumps",
                ],
            },
        ],
        applications: [
            "Homes & Apartments",
            "Hotels, Hospitals, Resorts",
            "Factories & Industrial Facilities",
        ],
    },

    // 3️⃣ PUMPS & CONTROLLERS
    pumps: {
        title: "Pumps & Controllers",
        image: "/images/services/pumps/pump.webp",
        introduction:
            "High-performance pumps and automation controllers for efficient water flow management.",
        types: [
            {
                id: "waterpumps",
                name: "Water Pumps",
                image: "/images/services/pumps/waterpump.webp",
                subtypes: ["Open Well Pumps", "Monoblock Pumps"],
            },
            {
                id: "pressureboosters",
                name: "Pressure Booster Pumps",
                image: "/images/services/pumps/booster.webp",
                subtypes: [
                    "Domestic (0.5HP–3HP)",
                    "Commercial – Mono Pressure",
                    "Twin Booster Pump",
                    "Hydro Pneumatic Booster Set",
                ],
            },
            {
                id: "hotwaterrecirculation",
                name: "Hot Water Re-Circulation Pumps",
                image: "/images/services/pumps/recirculation.webp",
                subtypes: ["Domestic", "Commercial"],
            },
            {
                id: "controllers",
                name: "Automatic Water Level Controllers & Indicators",
                image: "/images/services/pumps/controller.webp",
            },
        ],
        applications: [
            "Water Pressure Management",
            "Automatic Water Level Control",
            "Residential & Commercial Plumbing Systems",
        ],
    },

    // 4️⃣ AIR CONDITIONERS & ELEVATORS
    acelevators: {
        title: "Air Conditioners & Elevators (Lift)",
        image: "/images/services/ac/air-conditioner.webp",
        introduction:
            "We provide efficient air conditioning systems and advanced elevator technologies for residential and commercial spaces.",
        types: [
            {
                id: "acsplit",
                name: "Split Air Conditioners",
                image: "/images/services/ac/air-conditioner.webp",
                description:
                    "High-performance split AC units suitable for homes and offices.",
            },
            {
                id: "acducted",
                name: "Ducted & VRF Systems",
                image: "/images/services/ac/vrf.webp",
                description:
                    "Centralized air conditioning solutions for large spaces.",
            },
            {
                id: "elevators",
                name: "Elevators & Lifts",
                image: "/images/services/ac/lift.webp",
                description:
                    "Reliable and safe elevator systems for residential and commercial use.",
                subtypes: ["Passenger Lift", "Home Lift", "Hospital Lift", "Goods Lift"],
            },
        ],
        applications: [
            "Apartments & Offices",
            "Commercial Complexes",
            "Hospitals & Malls",
        ],
    },

    // 5️⃣ GAS TECH
    gastech: {
        title: "Gas Tech Solutions",
        image: "/images/services/gas/gas-pipeline.webp",
        introduction:
            "Safe and reliable gas line systems for LPG, copper piping, and integrated HVAC installations.",
        types: [
            {
                id: "lpgline",
                name: "LPG Gas Line",
                image: "/images/services/gas/lpg.webp",
                description:
                    "Expert installation of LPG pipelines for domestic and commercial spaces.",
            },
            {
                id: "copperline",
                name: "A/C Copper Line",
                image: "/images/services/gas/gas-pipeline.webp",
                description:
                    "Durable copper piping systems for air conditioning and gas supply lines.",
            },
        ],
        applications: [
            "Restaurants & Commercial Kitchens",
            "Apartment Gas Piping Systems",
            "HVAC Installations",
        ],
    },

    // 6️⃣ GLASS TECH
    glasstech: {
        title: "Glass Tech Solutions",
        image: "/images/services/glass/glassTower1.webp",
        introduction:
            "Modern glass solutions that enhance aesthetics and functionality of architectural spaces.",
        types: [
            {
                id: "shower",
                name: "Shower Partitions",
                image: "/images/services/glass/shower.webp",
            },
            {
                id: "railings",
                name: "Glass Railings",
                image: "/images/services/glass/railing.webp",
            },
            {
                id: "skylight",
                name: "Sky Light Glasses",
                image: "/images/services/glass/skylight.webp",
            },
            {
                id: "windows",
                name: "Window Glasses",
                image: "/images/services/glass/window.webp",
            },
            {
                id: "office",
                name: "Office Partitions",
                image: "/images/services/glass/office.webp",
            },
        ],
        applications: [
            "Residential & Commercial Interiors",
            "Offices and Malls",
            "Balconies and Staircases",
        ],
    },

    // 7️⃣ SURVEILLANCE SYSTEMS
    surveillance: {
        title: "Surveillance Systems & Smart Gadgets",
        image: surveillance,
        introduction:
            "We offer advanced security and automation systems for complete home and office protection.",
        types: [
            { id: "cctv", name: "CCTV Cameras", image: "/images/services/surveillance/cctv.webp" },
            { id: "vdp", name: "Video Door Phones (VDP)", image: "/images/services/surveillance/vdp.webp" },
            { id: "smartlocks", name: "Smart Digital Door Locks", image: "/images/services/surveillance/lock.webp" },
            { id: "gasdetectors", name: "Gas Leakage Detectors", image: "/images/services/surveillance/gas.webp" },
            { id: "alarmsensors", name: "Alarms & Sensors", image: "/images/services/surveillance/alarm.webp" },
        ],
        applications: [
            "Homes & Apartments",
            "Offices & Factories",
            "Schools & Hospitals",
        ],
    },

    // 8️⃣ ENTRANCE AUTOMATION
    entranceautomation: {
        title: "Entrance Automation Systems",
        image: entrance,
        introduction:
            "Automated gate and shutter solutions for secure and efficient entry management.",
        types: [
            { id: "slidinggate", name: "Sliding Gate Operator", image: "/images/services/entrance/sliding.webp" },
            { id: "swinggate", name: "Swing Gate Operator", image: "/images/services/entrance/swing.webp" },
            { id: "rollingdoor", name: "Rolling Shutter Operator", image: "/images/services/entrance/rolling.webp" },
            { id: "highspeeddoor", name: "High Speed Door Operator", image: "/images/services/entrance/highspeed.webp" },
            { id: "rapiddoor", name: "Rapid Door Operator", image: "/images/services/entrance/rapid.webp" },
            { id: "boombarrier", name: "Boom Barrier System", image: "/images/services/entrance/barrier.webp" },
        ],
        applications: [
            "Industrial Complexes",
            "Residential Communities",
            "Parking Areas & Warehouses",
        ],
    },

    // 9️⃣ HOME AUTOMATION
    homeautomation: {
        title: "Home Automation",
        image: home,
        introduction:
            "Smart automation solutions for controlling lighting, curtains, and home devices effortlessly.",
        types: [
            { id: "light", name: "Light Automation", image: "/images/services/homeautomation/light.webp" },
            { id: "curtain", name: "Curtain Operators", image: "/images/services/homeautomation/curtain.webp" },
            { id: "blinds", name: "Blind Operators", image: "/images/services/homeautomation/blinds.webp" },
        ],
        applications: [
            "Smart Homes & Villas",
            "Hotels & Offices",
            "Conference Rooms & Theaters",
        ],
    },

    // 🔟 RENEWABLE ENERGY
    renewableenergy: {
        title: "Renewable Energy Solutions",
        image: renewable,
        introduction:
            "Eco-friendly systems that harness solar power for energy efficiency and sustainability.",
        types: [
            {
                id: "rooftopsolarsystem",
                name: "Roof-Top Solar Systems",
                image: "/images/services/renewable/rooftop.webp",
                subtypes: [
                    "Domestic – On-Grid, Off-Grid, Hybrid",
                    "Commercial – On-Grid, Off-Grid, Hybrid",
                ],
            },
            {
                id: "solarpumps",
                name: "Solar Pumps & Controllers",
                image: "/images/services/renewable/solarpump.webp",
            },
            {
                id: "solarlights",
                name: "Solar Lights",
                image: "/images/services/renewable/solarlight.webp",
                subtypes: ["Solar Street Lights", "Solar Fancy Lights"],
            },
        ],
        applications: [
            "Residential Solar Energy Generation",
            "Industrial Power Backup",
            "Outdoor Lighting Solutions",
        ],
    },
};

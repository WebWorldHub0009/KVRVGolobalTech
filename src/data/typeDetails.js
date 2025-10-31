// src/data/typeDetails.js

export const typeDetails = {
    // 1️⃣ CCTV Cameras & Accessories
    "cctv-cameras-accessories": [
        {
            name: "Analog CCTV Camera",
            description:
                "Cost-effective surveillance solution ideal for small offices, shops, and homes. Provides decent video quality and easy setup.",
            subtypes: ["Bullet Camera", "Dome Camera", "IR Camera"],
        },
        {
            name: "IP CCTV Camera",
            description:
                "Network-enabled cameras offering high-resolution video streaming, motion detection, and remote access via mobile apps.",
            subtypes: ["Fixed IP Camera", "PTZ IP Camera", "Wireless IP Camera"],
        },
        {
            name: "CCTV Accessories",
            description:
                "Essential components like DVR, NVR, connectors, cables, and power supply units for complete camera installations.",
            subtypes: ["DVR/NVR", "BNC Connectors", "SMPS Power Units", "CCTV Cables"],
        },
    ],

    // 2️⃣ Video Door Phone (VDP)
    "video-door-phone": [
        {
            name: "Stand-alone Video Door Phone",
            description:
                "Compact video door phones suitable for individual homes, allowing two-way communication and video display.",
            subtypes: ["4-inch Display", "7-inch Display", "Touch Screen Models"],
        },
        {
            name: "Digital Video Door Phone",
            description:
                "Smart VDP systems with connectivity to mobile apps, recording, and integration with smart locks or automation.",
            subtypes: ["WiFi VDP", "Multi-apartment VDP", "IP-based VDP"],
        },
    ],

    // 3️⃣ Smart Digital Lock
    "smart-digital-lock": [
        {
            name: "Fingerprint Lock",
            description:
                "Modern locks offering biometric security with fast and accurate fingerprint recognition.",
            subtypes: ["Front Door Lock", "Glass Door Lock"],
        },
        {
            name: "Keypad Lock",
            description:
                "Locks with password and PIN access options — ideal for offices and home entry points.",
            subtypes: ["Touch Keypad", "Mechanical Key Backup"],
        },
        {
            name: "RFID Lock",
            description:
                "Keyless RFID-enabled locks providing convenience and security for residential and hotel use.",
            subtypes: ["Card Access", "Combination Lock"],
        },
    ],

    // 4️⃣ Home Automation
    "home-automation": [
        {
            name: "Smart Lighting System",
            description:
                "Automate your home lighting using voice, app, or remote control — supports Google Home & Alexa.",
            subtypes: ["WiFi Switch", "Zigbee Switch", "IR Control"],
        },
        {
            name: "Hybrid Automation",
            description:
                "Combination of wired and wireless automation — flexible for both new and existing homes.",
            subtypes: ["Scene Controller", "Hybrid Gateway"],
        },
    ],

    // 5️⃣ Curtain & Blind Operators
    "curtain-blind-operators": [
        {
            name: "Motorized Curtain Track",
            description:
                "Smart curtain motor system compatible with remote, app, or voice control.",
            subtypes: ["Single Channel", "Dual Channel", "Zigbee/WiFi Control"],
        },
        {
            name: "Motorized Blind Roller",
            description:
                "Automated roller blinds for modern interiors with light and temperature sensing options.",
            subtypes: ["Fabric Roller", "Wooden Roller"],
        },
    ],

    // 6️⃣ Blinds & Curtains
    "blinds-curtains": [
        {
            name: "Designer Curtains",
            description:
                "Premium fabric curtains in multiple colors and styles for living rooms and bedrooms.",
            subtypes: ["Sheer Curtains", "Blackout Curtains"],
        },
        {
            name: "Smart Blinds",
            description:
                "Automated blinds offering style, comfort, and light control using remotes or mobile apps.",
            subtypes: ["Vertical Blinds", "Roman Blinds", "Roller Blinds"],
        },
    ],

    // 7️⃣ Mosquito Net
    "mosquito-net": [
        {
            name: "Retractable Net",
            description:
                "Elegant and convenient sliding nets for doors and windows offering full protection from insects.",
            subtypes: ["Sliding Type", "Roll-up Type"],
        },
        {
            name: "Magnetic Net",
            description:
                "Simple magnetic nets for quick installation and easy maintenance.",
            subtypes: ["Door Type", "Window Type"],
        },
    ],

    // 8️⃣ LPG Gas Line
    "lpg-gas-line": [
        {
            name: "Residential Gas Line",
            description:
                "Safe copper pipeline systems for domestic kitchens and apartments.",
            subtypes: ["Copper Pipe Fittings", "Flexible Hose"],
        },
        {
            name: "Commercial Gas Line",
            description:
                "Heavy-duty LPG systems for restaurants, hotels, and industrial kitchens.",
            subtypes: ["SS Pipe Installation", "Multi-cylinder Manifold"],
        },
    ],

    // 9️⃣ Gate Automation
    "gate-automation": [
        {
            name: "Sliding Gate Automation",
            description:
                "Smart gate motors suitable for residential and industrial sliding gates.",
            subtypes: ["AC Motor", "DC Motor", "WiFi Integration"],
        },
        {
            name: "Swing Gate Automation",
            description:
                "Robust automation for swing-type gates with safety and remote features.",
            subtypes: ["Single Leaf", "Double Leaf"],
        },
    ],

    // 🔟 Boom Barrier System
    "boom-barrier-system": [
        {
            name: "Automatic Boom Barrier",
            description:
                "Reliable access control system for parking lots, toll gates, and society entrances.",
            subtypes: ["Straight Arm", "Folding Arm", "Fence Arm"],
        },
        {
            name: "Smart Integration",
            description:
                "Integrated with RFID, ANPR, and ticketing systems for seamless operation.",
            subtypes: ["RFID Reader", "Loop Detector"],
        },
    ],

    // 11️⃣ Solar Power Grid System
    "solar-power-grid-system": [
        {
            name: "On-Grid Solar System",
            description:
                "Connects directly to the power grid for energy generation and cost saving.",
            subtypes: ["Residential Setup", "Commercial Setup"],
        },
        {
            name: "Off-Grid Solar System",
            description:
                "Battery-based solar system that works independently of the power grid.",
            subtypes: ["Battery Inverter Combo", "Solar Controller"],
        },
        {
            name: "Hybrid Solar System",
            description:
                "Combines on-grid and off-grid features for uninterrupted power supply.",
            subtypes: ["Smart Inverter", "Hybrid Controller"],
        },
    ],

    // 12️⃣ UPS & Inverters
    "ups-inverters": [
        {
            name: "Home UPS",
            description:
                "Compact UPS systems providing power backup for home appliances and computers.",
            subtypes: ["600VA", "1000VA", "1500VA"],
        },
        {
            name: "Commercial Inverters",
            description:
                "High-capacity inverter systems suitable for offices and industries.",
            subtypes: ["5kVA", "10kVA", "20kVA"],
        },
    ],

    // 13️⃣ RO Water Purifiers
    "ro-water-purifiers": [
        {
            name: "Domestic RO",
            description:
                "Compact wall-mount RO systems for households ensuring safe drinking water.",
            subtypes: ["6L", "8L", "10L Capacity"],
        },
        {
            name: "Industrial RO",
            description:
                "High-performance purifiers for offices, schools, and hospitals.",
            subtypes: ["25LPH", "50LPH", "100LPH"],
        },
    ],

    // 14️⃣ Water Softener & Sand Filter
    "water-softener-sand-filter": [
        {
            name: "Water Softener",
            description:
                "Removes hardness-causing minerals from water to prevent scaling.",
            subtypes: ["Domestic Softener", "Industrial Softener"],
        },
        {
            name: "Sand Filter",
            description:
                "Removes suspended particles and impurities to improve water clarity.",
            subtypes: ["FRP Filter", "MS Filter"],
        },
    ],

    // 15️⃣ Commercial RO System
    "commercial-ro-system": [
        {
            name: "Reverse Osmosis Plant",
            description:
                "High-capacity RO plants for commercial and industrial use with durable components.",
            subtypes: ["250LPH", "500LPH", "1000LPH"],
        },
    ],

    // 16️⃣ Rain Water Filter (RWF)
    "rain-water-filter": [
        {
            name: "Rainwater Harvesting Filter",
            description:
                "Efficient filtration system for collecting and purifying rainwater for reuse.",
            subtypes: ["Wall Mount Filter", "Underground Filter"],
        },
    ],

    // 17️⃣ Pump & Controllers
    "pump-controllers": [
        {
            name: "Pressure Booster Pump",
            description:
                "Maintains consistent water pressure in bathrooms and kitchens.",
            subtypes: ["Automatic Booster", "Manual Control"],
        },
        {
            name: "Submersible Pump",
            description:
                "Ideal for borewells and tanks — energy-efficient and durable.",
            subtypes: ["1 HP", "2 HP", "3 HP"],
        },
    ],

    // 18️⃣ Automatic Water Level Controller
    "automatic-water-level-controller": [
        {
            name: "Smart Water Controller",
            description:
                "Automatically switches the pump ON/OFF to maintain optimal tank levels.",
            subtypes: ["Float Sensor Model", "Wireless Model"],
        },
    ],

    // 19️⃣ Solar Water Heater
    "solar-water-heater": [
        {
            name: "Flat Plate Collector Heater",
            description:
                "Durable solar heater suitable for large families and commercial spaces.",
            subtypes: ["100L", "200L", "300L"],
        },
        {
            name: "Evacuated Tube Collector Heater",
            description:
                "Energy-efficient water heater for domestic use with better heat retention.",
            subtypes: ["ETC-100L", "ETC-150L"],
        },
    ],

    // 20️⃣ Heat Pump (Hot Water System)
    "heat-pump": [
        {
            name: "Domestic Heat Pump",
            description:
                "Eco-friendly and energy-efficient system for hot water generation at homes.",
            subtypes: ["100L", "200L"],
        },
        {
            name: "Commercial Heat Pump",
            description:
                "High-capacity heat pump systems for hotels, hospitals, and industries.",
            subtypes: ["500L", "1000L"],
        },
    ],

    // 21️⃣ Glass Shower Partition
    "glass-shower-partition": [
        {
            name: "Sliding Shower Partition",
            description:
                "Elegant glass partition with sliding doors for compact bathrooms.",
            subtypes: ["Framed", "Frameless"],
        },
        {
            name: "Fixed Glass Partition",
            description:
                "Minimalist design with fixed glass panels for premium bathrooms.",
            subtypes: ["10mm Glass", "12mm Glass"],
        },
    ],

    // 22️⃣ Glass Railing & Partitions
    "glass-railing-partitions": [
        {
            name: "Balcony Glass Railing",
            description:
                "Durable glass railing systems with stainless steel or aluminum fittings.",
            subtypes: ["Top Mounted", "Side Mounted"],
        },
        {
            name: "Office Glass Partition",
            description:
                "Elegant partitions offering privacy and transparency in corporate environments.",
            subtypes: ["Frosted", "Clear Glass"],
        },
    ],

    // 23️⃣ Elevators (Lift)
    "elevators": [
        {
            name: "Home Lift",
            description:
                "Compact lift solution for residential spaces ensuring comfort and style.",
            subtypes: ["Hydraulic Lift", "Gearless Lift"],
        },
        {
            name: "Commercial Elevator",
            description:
                "Heavy-duty elevator designed for offices, malls, and hospitals.",
            subtypes: ["Passenger Lift", "Goods Lift"],
        },
    ],

    // 24️⃣ Air Conditioners
    "air-conditioners": [
        {
            name: "Split AC",
            description:
                "Energy-efficient air conditioners ideal for homes and offices.",
            subtypes: ["Inverter AC", "Non-Inverter AC"],
        },
        {
            name: "Cassette AC",
            description:
                "Ceiling-mounted AC system designed for large halls and showrooms.",
            subtypes: ["2 Ton", "3 Ton"],
        },
    ],
};

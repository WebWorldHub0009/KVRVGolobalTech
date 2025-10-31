// // src/data/typeDetails.js
// export const typeDetails = {
//     // 1️⃣ CCTV Cameras & Accessories
//     "cctv-cameras-accessories": [
//         {
//             name: "Analog CCTV Camera",
//             description:
//                 "Cost-effective surveillance solution using coaxial cables, ideal for small businesses and homes. Provides stable video feeds without latency.",
//             image: "/images/services/cctv_cameras_accessories/analog.webp",
//             subtypes: ["Bullet Camera", "Dome Camera", "IR Camera"],
//         },
//         {
//             name: "IP CCTV Camera",
//             description:
//                 "High-resolution network cameras that transmit video via internet protocol. Ideal for remote monitoring and recording via NVR or cloud.",
//             image: "/images/services/cctv_cameras_accessories/ip_camera.webp",
//             subtypes: ["Fixed IP Camera", "PTZ IP Camera", "Wireless IP Camera"],
//         },
//         {
//             name: "CCTV Accessories",
//             description:
//                 "Essential components such as DVRs, NVRs, connectors, cables, and power supplies to complete your CCTV setup.",
//             image: "/images/services/cctv_cameras_accessories/accessories.webp",
//             subtypes: ["DVR/NVR", "BNC Connectors", "SMPS Units", "CCTV Cables"],
//         },
//     ],

//     // 2️⃣ Video Door Phone (VDP)
//     "video-door-phone": [
//         {
//             name: "Stand-alone Video Door Phone",
//             description:
//                 "Compact VDP system suitable for independent homes. Allows communication with visitors through an indoor monitor.",
//             image: "/images/services/video_door_phone/standalone.webp",
//             subtypes: ["4-inch Display", "7-inch Display", "Touch Screen Models"],
//         },
//         {
//             name: "Digital Video Door Phone",
//             description:
//                 "Smart VDP systems with app connectivity, recording, and integration with digital locks for enhanced home security.",
//             image: "/images/services/video_door_phone/digital.webp",
//             subtypes: ["WiFi VDP", "Multi-apartment VDP", "IP-based VDP"],
//         },
//     ],

//     // 3️⃣ Smart Digital Locks
//     "smart-digital-lock": [
//         {
//             name: "Fingerprint Door Lock",
//             description:
//                 "Advanced biometric lock that uses your fingerprint for keyless access — ensuring both convenience and top-notch security.",
//             image: "/images/services/smart_digital_lock/fingerprint.webp",
//             subtypes: ["Single Door", "Double Door", "Push & Pull Design"],
//         },
//         {
//             name: "RFID Card Lock",
//             description:
//                 "Smart lock operated using RFID cards, ideal for offices, hotels, and apartments. Supports multiple user cards.",
//             image: "/images/services/smart_digital_lock/rfid.webp",
//             subtypes: ["Card + PIN", "Card + Fingerprint", "Card + App Control"],
//         },
//         {
//             name: "WiFi / Bluetooth Lock",
//             description:
//                 "Remotely controllable locks via smartphone app, supporting unlock, access logs, and guest passcodes.",
//             image: "/images/services/smart_digital_lock/bluetooth.webp",
//             subtypes: ["WiFi Lock", "Bluetooth Lock", "Hybrid Models"],
//         },
//     ],

//     // 4️⃣ Home Automation
//     "home-automation": [
//         {
//             name: "Lighting Control",
//             description:
//                 "Automate your home lighting with smart switches, dimmers, and voice control integration via Alexa or Google Home.",
//             image: "/images/services/home_automation/lighting.webp",
//             subtypes: ["Smart Switches", "Motion Sensors", "Voice Control Lights"],
//         },
//         {
//             name: "Curtain & Blind Operators",
//             description:
//                 "Motorized curtain systems that open and close automatically based on schedule or sunlight detection.",
//             image: "/images/services/home_automation/curtain.webp",
//             subtypes: ["Remote Control", "App Control", "Voice Activated"],
//         },
//         {
//             name: "Security & Sensors",
//             description:
//                 "IoT-enabled sensors like motion detectors, gas leak alarms, and door/window sensors integrated into your smart home hub.",
//             image: "/images/services/home_automation/security.webp",
//             subtypes: ["Motion Sensor", "Gas Sensor", "Water Leak Detector"],
//         },
//     ],

//     // 5️⃣ Blinds & Curtains
//     "blinds-curtains": [
//         {
//             name: "Roller Blinds",
//             description:
//                 "Sleek and modern blinds perfect for homes and offices, available in blackout and sunscreen fabrics.",
//             image: "/images/services/blinds_curtains/roller.webp",
//             subtypes: ["Manual Roller", "Motorized Roller", "Zebra Blinds"],
//         },
//         {
//             name: "Curtains",
//             description:
//                 "Custom-designed curtains with motorized track options for smart homes.",
//             image: "/images/services/blinds_curtains/curtain.webp",
//             subtypes: ["Sheer", "Blackout", "Dual-layer Curtains"],
//         },
//     ],

//     // 6️⃣ Mosquito Net
//     "mosquito-net": [
//         {
//             name: "Pleated Mosquito Net",
//             description:
//                 "Elegant pleated mesh system for windows and doors providing insect protection without blocking air or view.",
//             image: "/images/services/mosquito_net/pleated.webp",
//             subtypes: ["Single Door", "Double Door", "Sliding Windows"],
//         },
//         {
//             name: "Roller Mosquito Net",
//             description:
//                 "Retractable roller system ideal for windows — easy to operate and maintain.",
//             image: "/images/services/mosquito_net/roller.webp",
//             subtypes: ["Spring Operated", "Chain Operated"],
//         },
//     ],

//     // 7️⃣ LPG Gas Line
//     "lpg-gas-line": [
//         {
//             name: "Commercial Gas Pipeline",
//             description:
//                 "Safe and efficient gas pipeline installation for restaurants, hotels, and industries.",
//             image: "/images/services/lpg_gas_line/commercial.webp",
//             subtypes: ["Copper Pipeline", "MS Pipeline", "HDPE Pipeline"],
//         },
//         {
//             name: "Residential Gas Pipeline",
//             description:
//                 "LPG pipeline system for domestic kitchens ensuring safety and convenience.",
//             image: "/images/services/lpg_gas_line/residential.webp",
//             subtypes: ["Single Cylinder", "Double Cylinder", "Multi-Outlet"],
//         },
//     ],

//     // 8️⃣ Gate Automation
//     "gate-automation": [
//         {
//             name: "Swing Gate Automation",
//             description:
//                 "Motorized gate automation ideal for villas and commercial entrances with remote and sensor control options.",
//             image: "/images/services/gate_automation/swing.webp",
//             subtypes: ["Single Gate", "Double Gate", "Hydraulic Systems"],
//         },
//         {
//             name: "Sliding Gate Automation",
//             description:
//                 "Durable and reliable sliding automation with heavy-duty motor systems.",
//             image: "/images/services/gate_automation/sliding.webp",
//             subtypes: ["Rack & Pinion", "Chain Driven", "Smart Sensor Operated"],
//         },
//     ],

//     // 9️⃣ Boom Barrier System
//     "boom-barrier-system": [
//         {
//             name: "Automatic Boom Barrier",
//             description:
//                 "Access control system for parking lots and gated communities, integrated with RFID or sensors.",
//             image: "/images/services/boom_barrier_system/automatic.webp",
//             subtypes: ["RFID Boom", "Remote Control Boom", "Sensor-based Boom"],
//         },
//     ],

//     // 🔟 Solar Power Grid System
//     "solar-power-grid-system": [
//         {
//             name: "On-grid Solar System",
//             description:
//                 "Solar power system connected to the main grid, reducing energy bills and supporting net metering.",
//             image: "/images/services/solar_power_grid/on_grid.webp",
//             subtypes: ["Mono PERC Panels", "Poly Panels", "Hybrid Inverters"],
//         },
//         {
//             name: "Off-grid Solar System",
//             description:
//                 "Standalone solar setup with batteries for areas with unreliable grid supply.",
//             image: "/images/services/solar_power_grid/off_grid.webp",
//             subtypes: ["Battery Backup", "Inverter System", "Charge Controller"],
//         },
//     ],
// };

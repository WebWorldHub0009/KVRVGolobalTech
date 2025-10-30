// src/data/categoryDetails.js
// Generated for KVRV Global Tech — consistent structure, snake_case keys, types with subtypes.
// NOTE: Update image paths to match your project (these are placeholder paths following your pattern).

export const categoryDetails = {
    // 1) CCTV Cameras & Accessories
    cctvcameras_accessories: {
        title: "CCTV Cameras & Accessories",
        image: "/images/services/cctv_cameras/cctv.webp",
        introduction:
            "KVRV Global Tech supplies professional CCTV surveillance solutions designed for continuous, reliable monitoring of homes, offices and industrial facilities. Our range covers high-resolution IP cameras, robust outdoor bullet cameras, discreet dome cameras and intelligent PTZ units with tracking. Systems include low-light/night-vision, motion detection, AI-based analytics and remote mobile viewing for instant alerts and playback. We pair cameras with quality recorders (DVR/NVR), storage and cabling to ensure resilient installation and long-term performance. Our installers optimize camera placement, bandwidth and retention settings to meet safety and privacy requirements. Choose scalable systems suitable for small shops to multi-site enterprise projects — all backed by our maintenance and warranty support.",
        types: [
            {
                id: "ip_cameras",
                name: "IP Cameras",
                image: "/images/services/cctv_cameras/ip.webp",
                description:
                    "Network-based IP cameras deliver high-resolution video, flexible mounting and easy remote access via apps and cloud services. They integrate with NVRs and support PoE for simplified cabling.",
                subtypes: [
                    { name: "Bullet IP Camera" },
                    { name: "Dome IP Camera" },
                    { name: "Turret IP Camera" },
                    { name: "Pan-Tilt-Zoom (PTZ) IP Camera" }
                ]
            },
            {
                id: "analog_cameras",
                name: "Analog Cameras (HD-CVI/AHD)",
                image: "/images/services/cctv_cameras/analog.webp",
                description:
                    "High-definition analog formats (CVI/AHD/TVI) provide cost-effective HD video over coax and are ideal for retrofit projects.",
                subtypes: [
                    { name: "Indoor Analog Camera" },
                    { name: "Outdoor Analog Camera" }
                ]
            },
            {
                id: "recorders_and_storage",
                name: "DVR / NVR & Storage",
                image: "/images/services/cctv_cameras/nvr.webp",
                description:
                    "Digital (DVR) and network (NVR) recorders with scalable storage options, RAID support and remote access for secure evidence retention.",
                subtypes: [
                    { name: "4-Channel NVR" },
                    { name: "16-Channel NVR" },
                    { name: "Enterprise NVR with RAID" }
                ]
            }
        ],
        applications: [
            "Residential buildings & gated communities",
            "Corporate offices & commercial complexes",
            "Warehouses, factories & industrial sites",
            "Retail stores, malls & showrooms",
            "Healthcare facilities & educational institutions"
        ]
    },

    // 2) Video Door Phone (VDP)
    video_door_phone: {
        title: "Video Door Phone (VDP)",
        image: "/images/services/video_door_phone/vdp.webp",
        introduction:
            "KVRV Global Tech offers modern Video Door Phone systems that bring secure, two-way video communication to your entrance. Our VDPs allow residents and staff to visually verify visitors before granting access, with full-duplex audio, night vision and clear LCD/HD displays. Systems come in wired and wireless variants and scale from single-door installations to multi-tenant apartment complexes. Integration options include electric locks, CCTV feeds and smartphone apps for remote unlock and call forwarding. Installations are optimized for signal reliability, tamper protection and easy user operation. We support retrofit and new-build deployments with professional cabling and post-install support.",
        types: [
            {
                id: "single_door_vdp",
                name: "Single Door VDP",
                image: "/images/services/video_door_phone/single.webp",
                description: "Simple, reliable VDP for single-family homes and individual apartments with a monitor and outdoor camera.",
                subtypes: [{ name: "Wired Single VDP" }, { name: "Wireless Single VDP" }]
            },
            {
                id: "multi_tenant_vdp",
                name: "Multi-Tenant VDP",
                image: "/images/services/video_door_phone/multi.webp",
                description: "Apartment building VDP panels supporting multiple internal monitors and apartment call routing.",
                subtypes: [{ name: "Intercom Panel" }, { name: "Apartment Monitor Unit" }]
            },
            {
                id: "ip_vdp",
                name: "IP-Based VDP",
                image: "/images/services/video_door_phone/ip.webp",
                description: "Networked VDP with mobile app integration, cloud connectivity and remote access features.",
                subtypes: [{ name: "Cloud VDP" }, { name: "App-Integrated VDP" }]
            }
        ],
        applications: [
            "Villas & gated residences",
            "Apartment complexes & condos",
            "Small offices & clinics",
            "Hostels & service apartments",
            "Retail storefronts with secure access"
        ]
    },

    // 3) Smart Digital Lock
    smart_digital_lock: {
        title: "Smart Digital Lock",
        image: "/images/services/smart_digital_lock/smartlock.webp",
        introduction:
            "Upgrade access control with KVRV Global Tech’s Smart Digital Locks — combining secure hardware with modern convenience. Our locks support multiple authentication modes: fingerprint, PIN, RFID card and smartphone. They include anti-tamper alarms, auto-lock functionality and audit trails for authorized entry logs. Many models support offline access as well as cloud connectivity for remote management, temporary access codes and visitor scheduling. With robust build quality and weather-resistant options, these locks suit residential doors, office cabins and hospitality suites. Integration with VDPs and home automation systems delivers unified security and convenient workflows.",
        types: [
            {
                id: "fingerprint_lock",
                name: "Fingerprint Smart Lock",
                image: "/images/services/smart_digital_lock/fingerprint.webp",
                description: "Biometric entry with fast fingerprint recognition and backup PIN/RFID methods.",
                subtypes: [{ name: "Single-Point Biometric Lock" }, { name: "Multi-Mode Biometric Lock" }]
            },
            {
                id: "keypad_lock",
                name: "Keypad & PIN Lock",
                image: "/images/services/smart_digital_lock/keypad.webp",
                description: "Numeric keypad locks supporting temporary codes, scheduled access and admin overrides.",
                subtypes: [{ name: "Standalone Keypad Lock" }, { name: "Networked Keypad Lock" }]
            },
            {
                id: "wifi_lock",
                name: "Wi-Fi / App Enabled Lock",
                image: "/images/services/smart_digital_lock/wifi.webp",
                description: "Remote unlock and mobile management via secure cloud/mobile apps, ideal for short-term rentals.",
                subtypes: [{ name: "Bluetooth + Wi-Fi Lock" }, { name: "Cloud-Managed Smart Lock" }]
            }
        ],
        applications: [
            "Residential homes and apartments",
            "Office doors and server rooms (controlled access)",
            "Hotels, BnBs and short-stay accommodations",
            "Retail back-office areas",
            "Premium gated communities"
        ]
    },

    // 4) Home Automation
    home_automation: {
        title: "Home Automation",
        image: "/images/services/home_automation/home.webp",
        introduction:
            "KVRV Global Tech delivers end-to-end home automation systems to simplify everyday living and save energy. Our solutions centralize control for lighting, climate, curtains, security and entertainment through apps and voice assistants. We design hybrid setups combining Wi-Fi, Zigbee and proprietary protocols to balance responsiveness and reliability. Automation scenarios include schedules, presence-based behavior, sensor-triggered actions and energy-optimizing scenes. Installations are tailored for retrofit or new construction, ensuring minimal intrusion and clear user interfaces. Ongoing support includes firmware updates, system tuning and expansion planning for future devices.",
        types: [
            {
                id: "lighting_control",
                name: "Smart Lighting Control",
                image: "/images/services/home_automation/lighting.webp",
                description: "Dimmable, scene-based lighting control accessible via app, schedule or voice.",
                subtypes: [{ name: "Smart Switches" }, { name: "Dimmers & Controllers" }]
            },
            {
                id: "hvac_integration",
                name: "Climate & HVAC Integration",
                image: "/images/services/home_automation/hvac.webp",
                description: "Energy-conscious HVAC scheduling and remote control for comfort and savings.",
                subtypes: [{ name: "Smart Thermostat" }, { name: "Zoned Climate Control" }]
            },
            {
                id: "scene_automation",
                name: "Scene & Automation Engine",
                image: "/images/services/home_automation/scene.webp",
                description: "Create scenes to automate multiple devices with a single command or trigger.",
                subtypes: [{ name: "Wake-up Scene" }, { name: "Away/Eco Mode" }]
            }
        ],
        applications: [
            "Smart residences and apartments",
            "Luxury villas and bungalows",
            "Smart hotel rooms and service apartments",
            "Smart office meeting rooms",
            "Automated retail displays & showrooms"
        ]
    },

    // 5) Curtain & Blind Operators
    curtain_blind_operators: {
        title: "Curtain & Blind Operators",
        image: "/images/services/curtain_and_blind_operators/curtain.webp",
        introduction:
            "Automate window treatments with KVRV Global Tech’s curtain and blind operators for style and convenience. Our motorized systems support remote control, scheduling and integration with home automation platforms. Choose from tubular motors for curtains, linear actuator systems for heavy drapes and precision motors for Venetian and roller blinds. Add sun sensors and light-driven automation to reduce heat gain and cut AC usage. Installation is clean and discreet — designed to maintain aesthetics while providing smooth, quiet operation. We provide retrofit kits and full replacements for new projects.",
        types: [
            {
                id: "motorized_curtain_system",
                name: "Motorized Curtain System",
                image: "/images/services/curtain_and_blind_operators/motorized_curtain.webp",
                description: "Seamless curtain automation with remote control, schedules and integration.",
                subtypes: [{ name: "Track Motor" }, { name: "Rail Motor" }]
            },
            {
                id: "roller_blind_motor",
                name: "Roller Blind Motor",
                image: "/images/services/curtain_and_blind_operators/roller_blind.webp",
                description: "Compact motors for roller blinds supporting precise travel and stops.",
                subtypes: [{ name: "Somfy-Style Motor" }, { name: "Tubular Motor" }]
            }
        ],
        applications: [
            "Living rooms and bedrooms",
            "Conference halls and auditoriums",
            "Hotel suites and lobbies",
            "Offices and meeting rooms",
            "Retail displays with automated shading"
        ]
    },

    // 6) Blinds & Curtains
    blinds_curtains: {
        title: "Blinds & Curtains",
        image: "/images/services/blinds_and_curtains/blinds.webp",
        introduction:
            "KVRV Global Tech curates stylish blinds and curtains that pair design with functionality. Our offerings include roller blinds, Venetian blinds, vertical blinds, blackout curtains and designer fabrics. Options are available for light-filtering, blackout, thermal insulation and acoustic control to suit bedrooms, media rooms and commercial spaces. Fabrics and finishes are chosen for durability, UV resistance and colorfastness. We provide measurement, custom manufacture and professional fitting to ensure perfect operation and elegant aesthetics. Automation-ready options are available to integrate with curtain motors and home control systems.",
        types: [
            {
                id: "roller_blinds",
                name: "Roller Blinds",
                image: "/images/services/blinds_and_curtains/roller.webp",
                description: "Sleek roller blinds for privacy and daylight control.",
                subtypes: [{ name: "Blackout Roller" }, { name: "Light-Filtering Roller" }]
            },
            {
                id: "venetian_blinds",
                name: "Venetian Blinds",
                image: "/images/services/blinds_and_curtains/venetian.webp",
                description: "Adjustable slat blinds for precise light direction and ventilation.",
                subtypes: [{ name: "Aluminum Slats" }, { name: "Wooden Slats" }]
            }
        ],
        applications: [
            "Bedrooms and living rooms",
            "Offices and boardrooms",
            "Hotels and hospitality",
            "Media rooms and home theaters",
            "Retail and showroom display areas"
        ]
    },

    // 7) Mosquito Net
    mosquito_net: {
        title: "Mosquito Net Systems",
        image: "/images/services/mosquito_net/net.webp",
        introduction:
            "Protect interiors from insects with KVRV Global Tech’s high-quality mosquito net systems. We offer retractable, sliding and fixed-frame nets crafted from durable mesh for ventilation and insect protection. Solutions are tailored for windows, doors, balconies and large openings, with options for powder-coated frames, corrosion-resistant fittings and easy maintenance. Retractable systems conceal neatly when not in use and provide seamless aesthetics. Our installations prioritize smooth operation, tight seals and child-safe latching. Ideal for residential homes, hotels and hospitals requiring hygienic, insect-free environments.",
        types: [
            {
                id: "retractable_net",
                name: "Retractable Mosquito Net",
                image: "/images/services/mosquito_net/retractable.webp",
                description: "Roll-away nets with smooth action and durable mesh.",
                subtypes: [{ name: "Vertical Retractable" }, { name: "Horizontal Retractable" }]
            },
            {
                id: "sliding_net",
                name: "Sliding Mosquito Net",
                image: "/images/services/mosquito_net/sliding.webp",
                description: "Sliding panels for balcony doors and large openings.",
                subtypes: [{ name: "Single Track" }, { name: "Double Track" }]
            }
        ],
        applications: [
            "Windows and balcony doors",
            "Patios and terraces",
            "Commercial kitchens and restaurants (outdoor seating)",
            "Hospitals and clinics",
            "Hotels and resorts"
        ]
    },

    // 8) LPG Gas Line
    lpg_gas_line: {
        title: "LPG Gas Line Services",
        image: "/images/services/lpg_gas_line/lpg.webp",
        introduction:
            "KVRV Global Tech delivers safe, code-compliant LPG gas line installations for homes and commercial kitchens. Our certified gas technicians design copper or stainless-steel pipelines with leak-proof fittings and secure shutoff points. Installations follow local regulations and include pressure testing, regulator setup and proper ventilation planning. We also offer point-of-use piping for hob, oven and autogas equipment, and durable concealed routing for aesthetic finishes. Post-installation inspections and maintenance contracts ensure safe, uninterrupted gas supply and peace of mind for occupants.",
        types: [
            {
                id: "residential_lpg",
                name: "Residential LPG Piping",
                image: "/images/services/lpg_gas_line/residential.webp",
                description: "Safe LPG pipeline installations for domestic kitchens with regulator and leak detection.",
                subtypes: [{ name: "Single Outlet" }, { name: "Multi-Outlet" }]
            },
            {
                id: "commercial_lpg",
                name: "Commercial LPG Systems",
                image: "/images/services/lpg_gas_line/commercial.webp",
                description: "High-capacity LPG piping solutions for restaurants and commercial kitchens.",
                subtypes: [{ name: "Hose Reel Systems" }, { name: "Bulk LPG Piping" }]
            }
        ],
        applications: [
            "Domestic kitchens and apartments",
            "Restaurants and commercial kitchens",
            "Hotels and catering services",
            "Food courts and institutional kitchens",
            "Industrial processes requiring LPG"
        ]
    },

    // 9) Gate Automation
    gate_automation: {
        title: "Gate Automation",
        image: "/images/services/gate_automation/gate.webp",
        introduction:
            "Automate your gates with KVRV Global Tech’s reliable gate automation systems — safe, robust and easy to operate. We supply sliding gate motors, swing gate operators and rolling shutter drives with safety sensors and remote controls. Systems integrate with access control, intercoms and vehicle sensors for hands-free entry. Safety features include obstacle detection, auto-stop and battery backup options for continuous operation during grid outages. Our installation includes civil preparation, limit-setting, remote pairing and commissioning for smooth service life.",
        types: [
            {
                id: "sliding_gate_operator",
                name: "Sliding Gate Operator",
                image: "/images/services/gate_automation/sliding.webp",
                description: "Heavy-duty motors for automated sliding gates with smooth acceleration control.",
                subtypes: [{ name: "Single Leaf" }, { name: "Double Leaf" }]
            },
            {
                id: "swing_gate_operator",
                name: "Swing Gate Operator",
                image: "/images/services/gate_automation/swing.webp",
                description: "Hydraulic/electromechanical operators for swing gates with safety cutoffs.",
                subtypes: [{ name: "Left Swing" }, { name: "Right Swing" }]
            }
        ],
        applications: [
            "Residential gated communities",
            "Industrial facility entry points",
            "Commercial complex parking",
            "Apartment block main gates",
            "Government and institutional campuses"
        ]
    },

    // 10) Boom Barrier System
    boom_barrier_system: {
        title: "Boom Barrier System",
        image: "/images/services/boom_barrier_system/boom.webp",
        introduction:
            "KVRV Global Tech provides boom barrier systems for controlled vehicle access in parking lots, toll plazas and guarded facilities. Our barriers include automatic arm rise/lower, loop detectors and safety photocells for secure, efficient vehicle throughput. Options include single/dual lane, fast-cycle units and integrated ticketing or RFID readers for automated access management. Robust construction, corrosion-resistant finishes and intelligent control boards ensure long-term reliability. We also offer maintenance contracts and remote diagnostics to keep traffic moving smoothly.",
        types: [
            {
                id: "single_lane_barrier",
                name: "Single Lane Boom Barrier",
                image: "/images/services/boom_barrier_system/single_lane.webp",
                description: "Standard barrier for single-lane vehicle control with manual override.",
                subtypes: [{ name: "Arm 3m" }, { name: "Arm 4m" }]
            },
            {
                id: "high_speed_barrier",
                name: "High Speed Boom Barrier",
                image: "/images/services/boom_barrier_system/high_speed.webp",
                description: "Fast-cycle barriers ideal for high throughput parking and toll lanes.",
                subtypes: [{ name: "Fast Arm" }, { name: "Hydraulic Drive" }]
            }
        ],
        applications: [
            "Commercial parking facilities",
            "Industrial gates and logistics yards",
            "Apartment and society entrances",
            "Toll plazas and paid parking",
            "Government & institutional security checkpoints"
        ]
    },

    // 11) UPS & Inverters
    ups_inverters: {
        title: "UPS & Inverters",
        image: "/images/services/ups_and_inverters/ups.webp",
        introduction:
            "KVRV Global Tech supplies reliable UPS and inverter systems to ensure uninterrupted power for critical loads. Our portfolio ranges from compact home inverters to scalable industrial UPS systems with online double-conversion topology. We provide battery solutions, automatic transfer switches and power conditioning to protect sensitive electronics and maintain uptime. Our team sizes the solution for runtime targets, load types and space constraints while ensuring correct ventilation and safety. Maintenance and battery replacement services keep systems running efficiently over their lifecycle.",
        types: [
            {
                id: "home_inverter",
                name: "Home Inverter Systems",
                image: "/images/services/ups_and_inverters/home_inverter.webp",
                description: "Compact inverters with battery packs for residential backup needs.",
                subtypes: [{ name: "1kVA - 3kVA" }, { name: "3kVA - 5kVA" }]
            },
            {
                id: "commercial_ups",
                name: "Commercial UPS",
                image: "/images/services/ups_and_inverters/commercial_ups.webp",
                description: "Line-interactive and online UPS options for office and server room protection.",
                subtypes: [{ name: "Tower UPS" }, { name: "Rack-mount UPS" }]
            }
        ],
        applications: [
            "Home backup power",
            "Data centers & server rooms",
            "SME offices and retail POS",
            "Medical equipment & clinics",
            "Telecom and broadcast installations"
        ]
    },

    // 12) RO Water Purifiers
    ro_water_purifiers: {
        title: "RO Water Purifiers",
        image: "/images/services/ro_water_purifiers/ro.webp",
        introduction:
            "KVRV Global Tech offers advanced reverse osmosis (RO) water purifiers engineered for safe drinking water in varied source conditions. Our systems combine RO membranes with pre-filters, UV sterilization and post-carbon polishing to remove dissolved salts, bacteria and organic contaminants. Units range from compact under-sink solutions to large-capacity commercial RO plants with automated flushing and monitoring. We design systems with appropriate storage capacity, flow rates and energy efficiency for homes, restaurants, offices and institutions. Installation, commissioning and periodic membrane maintenance are provided to guarantee consistent water quality.",
        types: [
            {
                id: "domestic_ro",
                name: "Domestic RO Units",
                image: "/images/services/ro_water_purifiers/domestic.webp",
                description: "Compact RO purifiers suitable for families with easy filter replacement.",
                subtypes: [{ name: "Under Sink RO" }, { name: "Countertop RO" }]
            },
            {
                id: "commercial_ro",
                name: "Commercial RO Plants",
                image: "/images/services/ro_water_purifiers/commercial.webp",
                description: "High-capacity RO plants for institutions, factories, and large kitchens.",
                subtypes: [{ name: "5 LPM - 50 LPM" }, { name: "50 LPM+" }]
            }
        ],
        applications: [
            "Homes and apartments",
            "Restaurants and hotels",
            "Schools and colleges",
            "Manufacturing & industrial use",
            "Healthcare & labs requiring purified water"
        ]
    },

    // 13) Water Softener & Sand Filter
    water_softener_sand_filter: {
        title: "Water Softener & Sand Filter",
        image: "/images/services/water_softener_and_sand_filter/softener.webp",
        introduction:
            "KVRV Global Tech installs water softening and filtration systems to protect plumbing and appliances from hard water scaling. Our softeners use ion-exchange resin to remove calcium and magnesium while backwashable sand filters remove suspended solids and turbidity. Combined systems extend the life of water-using equipment, improve soap performance and reduce maintenance. We size and configure systems for household, commercial and industrial flow rates, offering automatic regeneration and control valves for convenience. Routine servicing and resin replacement options are available to maintain optimal performance.",
        types: [
            {
                id: "cation_exchange_softener",
                name: "Ion-Exchange Water Softener",
                image: "/images/services/water_softener_and_sand_filter/softener_unit.webp",
                description: "Removes water hardness using resin beds; includes automatic regeneration cycles.",
                subtypes: [{ name: "Manual Softener" }, { name: "Automatic Softener" }]
            },
            {
                id: "sand_filter",
                name: "Multi-Media / Sand Filter",
                image: "/images/services/water_softener_and_sand_filter/sand_filter.webp",
                description: "Removes suspended particles, sediment and turbidity before downstream treatment.",
                subtypes: [{ name: "Single Media" }, { name: "Multi Media" }]
            }
        ],
        applications: [
            "Residential plumbing and hot water systems",
            "Laundry and hospitality facilities",
            "Industrial pre-treatment",
            "Apartment complexes and societies",
            "Pre-RO and process water conditioning"
        ]
    },

    // 14) Commercial RO System
    commercial_ro_system: {
        title: "Commercial RO System",
        image: "/images/services/commercial_ro_system/commercial_ro.webp",
        introduction:
            "KVRV Global Tech designs and installs commercial reverse osmosis systems for institutions, manufacturing plants and large residential complexes. These systems include pre-treatment (sand, carbon), anti-scalant dosing, RO membrane banks with automatic flushing and high-capacity storage. Control panels with PLCs and remote monitoring ensure smooth operation and prompt alerts. We size plants to demand, ensuring energy-efficient pumps and recovery optimization. Regular maintenance contracts, membrane replacement services and water quality validation are part of our complete commercial offering.",
        types: [
            {
                id: "modular_commercial_ro",
                name: "Modular Commercial RO",
                image: "/images/services/commercial_ro_system/modular.webp",
                description: "Skid-mounted modular RO plants for quick deployment at factories and complexes.",
                subtypes: [{ name: "10 LPM - 100 LPM" }, { name: "100 LPM - 1000 LPM" }]
            },
            {
                id: "containerized_ro",
                name: "Containerized RO Plant",
                image: "/images/services/commercial_ro_system/containerized.webp",
                description: "Turnkey containerized solutions for remote or temporary installations.",
                subtypes: [{ name: "Plug-and-Play Container" }]
            }
        ],
        applications: [
            "Hotels and large restaurants",
            "Industrial process water",
            "Educational campuses and hospitals",
            "Bottling and food processing",
            "Municipal pre-treatment solutions"
        ]
    },

    // 15) Rain Water Filter (RWF)
    rain_water_filter: {
        title: "Rain Water Filter (RWF)",
        image: "/images/services/rain_water_filter/rainwater.webp",
        introduction:
            "KVRV Global Tech provides rainwater harvesting and filtration solutions that convert rooftop runoff into usable water for landscaping, flushing and groundwater recharge. Our systems include first-flush diverters, sedimentation tanks, cartridge filters and UV disinfection to ensure safe, low-maintenance harvested water. We design storage and conveyance systems to local site topography and usage patterns to maximize water capture and reduce demand on mains. Combined with smart pumping and level controllers, our RWH systems are eco-friendly, reduce utility bills and support sustainability targets for residential and commercial sites.",
        types: [
            {
                id: "first_flush_diverter",
                name: "First-Flush Diverter",
                image: "/images/services/rain_water_filter/first_flush.webp",
                description: "Pre-filter system that discards initial contaminated runoff to improve water quality.",
                subtypes: [{ name: "Manual Diverter" }, { name: "Automatic Diverter" }]
            },
            {
                id: "rwh_storage_system",
                name: "RWH Storage & Filtration",
                image: "/images/services/rain_water_filter/storage.webp",
                description: "Storage tanks with filtration and pump systems for reuse and recharge.",
                subtypes: [{ name: "Underground Tank" }, { name: "Aboveground Tank" }]
            }
        ],
        applications: [
            "Residential rainwater harvesting",
            "Commercial building landscaping",
            "Industrial site water reuse",
            "Groundwater recharge projects",
            "Institutional campuses and parks"
        ]
    },

    // 16) Pump & Controllers
    pump_controllers: {
        title: "Pump & Controllers",
        image: "/images/services/pump_and_controllers/pump.webp",
        introduction:
            "KVRV Global Tech supplies robust pump solutions and smart controllers for domestic, commercial and industrial water systems. Our range includes submersible pumps, monoblock pumps, pressure booster sets and swimming pool pumps. Controllers include auto-level controllers, pressure switches, VFDs and smart pump controllers for optimized energy consumption. We design systems to maintain required pressure, prevent dry-run and enable remote monitoring. Proper selection and installation ensure long life, quiet operation and low maintenance for water distribution systems.",
        types: [
            {
                id: "submersible_pump",
                name: "Submersible Pump",
                image: "/images/services/pump_and_controllers/submersible.webp",
                description: "For deep borewells and submerged applications, with corrosion-resistant construction.",
                subtypes: [{ name: "Open Well" }, { name: "Borewell Submersible" }]
            },
            {
                id: "pressure_booster",
                name: "Pressure Booster Set",
                image: "/images/services/pump_and_controllers/booster.webp",
                description: "Boosts pressure for multi-storey buildings and commercial complexes.",
                subtypes: [{ name: "Single Pump Booster" }, { name: "Twin Pump Booster" }]
            },
            {
                id: "pump_controller",
                name: "Pump Controllers & VFD",
                image: "/images/services/pump_and_controllers/controller.webp",
                description: "Smart controllers to prevent dry-run, automate sequences and save energy with VFDs.",
                subtypes: [{ name: "Auto Water Level Controller" }, { name: "VFD for Pumps" }]
            }
        ],
        applications: [
            "Residential water supply systems",
            "Apartment & high-rise buildings",
            "Industrial process water",
            "Irrigation and agriculture",
            "Commercial plumbing and HVAC systems"
        ]
    },

    // 17) Automatic Water Level Controller
    automatic_water_level_controller: {
        title: "Automatic Water Level Controller",
        image: "/images/services/automatic_water_level_controller/awl.webp",
        introduction:
            "KVRV Global Tech’s Automatic Water Level Controllers maintain tank water levels reliably and prevent pump damage due to dry-running. Systems range from float-based mechanical units to advanced sensor-driven and IoT-enabled controllers that provide status on mobile apps. Our controllers support multi-tank setups, low/high level alarms and scheduled filling. They reduce manual intervention and water waste while protecting pumps and electrical systems. Installation includes calibration for tank depth, pump characteristics and local plumbing configuration.",
        types: [
            {
                id: "float_switch_controller",
                name: "Float Switch Controller",
                image: "/images/services/automatic_water_level_controller/float.webp",
                description: "Mechanical float-based controller for simple and cost-effective level control.",
                subtypes: [{ name: "Single Float" }, { name: "Dual Float" }]
            },
            {
                id: "sensor_based_controller",
                name: "Sensor-Based Controller",
                image: "/images/services/automatic_water_level_controller/sensor.webp",
                description: "Electronic sensor controllers for precise level detection and automation.",
                subtypes: [{ name: "Capacitive Sensor" }, { name: "Ultrasonic Sensor" }]
            },
            {
                id: "iot_level_controller",
                name: "IoT-Enabled Controller",
                image: "/images/services/automatic_water_level_controller/iot.webp",
                description: "Remote monitoring and alerts via mobile app with historical logs and analytics.",
                subtypes: [{ name: "Wi-Fi Controller" }, { name: "GSM Controller" }]
            }
        ],
        applications: [
            "Household and apartment water tanks",
            "Commercial complexes",
            "Industrial water storage",
            "Irrigation control systems",
            "Remote monitoring for pumps and tanks"
        ]
    },

    // 18) Solar Water Heater
    solar_water_heater: {
        title: "Solar Water Heater",
        image: "/images/services/solar_water_heater/solar_heater.webp",
        introduction:
            "KVRV Global Tech offers energy-efficient solar water heating systems that reduce electricity usage and provide reliable hot water. We provide flat-plate collectors, evacuated tube collectors and integrated storage tanks sized for household and commercial applications. Our systems are engineered for Indian climatic conditions and include backup electric or gas heating where required. Expert installation, tilt optimization and insulation ensure maximum thermal efficiency and long life. We provide centralized and decentralized solutions for hostels, hotels and residential complexes with periodic maintenance services.",
        types: [
            {
                id: "flat_plate_collector",
                name: "Flat Plate Solar Water Heater",
                image: "/images/services/solar_water_heater/flat_plate.webp",
                description: "Efficient for moderate climates and packaged with insulated storage tanks.",
                subtypes: [{ name: "Domestic Flat Plate" }, { name: "Commercial Flat Plate" }]
            },
            {
                id: "evacuated_tube",
                name: "Evacuated Tube Collector",
                image: "/images/services/solar_water_heater/evacuated.webp",
                description: "High efficiency in cooler climates with improved thermal performance.",
                subtypes: [{ name: "Single Tube" }, { name: "Multi-Tube Array" }]
            }
        ],
        applications: [
            "Residential hot water supply",
            "Hotels, hostels and guest houses",
            "Industrial process hot water",
            "Healthcare facilities",
            "Swimming pool heating (specialized)"
        ]
    },

    // 19) Heat Pump (Hot Water System)
    heat_pump: {
        title: "Heat Pump (Hot Water System)",
        image: "/images/services/heat_pump/heatpump.webp",
        introduction:
            "KVRV Global Tech installs efficient heat pump hot water systems that extract ambient heat to deliver hot water with low electrical consumption. Heat pumps can achieve higher CoP (Coefficient of Performance) than resistive heating and are suitable for domestic and commercial applications. Our offerings include air-source and ground-source heat pumps sized to match demand, backup heaters and circulation pumps. Heat pump systems integrate with solar PV and control systems for further savings. Regular servicing ensures refrigerant charge, compressor health and system efficiency is maintained.",
        types: [
            {
                id: "air_source_heat_pump",
                name: "Air-Source Heat Pump",
                image: "/images/services/heat_pump/air_source.webp",
                description: "Efficient and easy-to-install heat pump using ambient air as the heat source.",
                subtypes: [{ name: "Split Heat Pump" }, { name: "Monoblock Heat Pump" }]
            },
            {
                id: "ground_source_heat_pump",
                name: "Ground-Source Heat Pump",
                image: "/images/services/heat_pump/ground_source.webp",
                description: "Higher efficiency via ground loops; ideal for large installations and long-term savings.",
                subtypes: [{ name: "Horizontal Loop" }, { name: "Vertical Borehole" }]
            }
        ],
        applications: [
            "Residential whole-home hot water",
            "Hotels and laundries",
            "Industrial hot water processes",
            "Swimming pool heating",
            "Commercial kitchens and institutions"
        ]
    },

    // 20) Glass Shower Partition
    glass_shower_partition: {
        title: "Glass Shower Partition",
        image: "/images/services/glass_shower_partition/shower.webp",
        introduction:
            "KVRV Global Tech supplies premium glass shower partitions and enclosures that transform bathrooms with a sleek, modern aesthetic. We offer frameless, semi-frameless and framed glass enclosures using toughened safety glass and stainless-steel hardware. Custom sizing and hinge selection allow for walk-in showers, pivot doors and sliding enclosures. Glass treatments include anti-scale coatings and privacy films. Our professional installation ensures precise leveling, sealing and long-term durability while meeting safety standards.",
        types: [
            {
                id: "frameless_shower",
                name: "Frameless Glass Shower",
                image: "/images/services/glass_shower_partition/frameless.webp",
                description: "Seamless look with minimal hardware for modern bathrooms.",
                subtypes: [{ name: "Pivot Door" }, { name: "Fixed Panel" }]
            },
            {
                id: "sliding_shower",
                name: "Sliding Glass Shower",
                image: "/images/services/glass_shower_partition/sliding.webp",
                description: "Space-saving sliding enclosures with smooth roller hardware.",
                subtypes: [{ name: "Top Rollers" }, { name: "Bottom Rollers" }]
            }
        ],
        applications: [
            "Residential bathrooms",
            "Hotel and resort bathrooms",
            "Gym and spa shower enclosures",
            "Luxury apartment bathrooms",
            "Commercial washroom upgrades"
        ]
    },

    // 21) Glass Railing & Partitions
    glass_railing_partitions: {
        title: "Glass Railing & Partitions",
        image: "/images/services/glass_railing_partitions/railing.webp",
        introduction:
            "KVRV Global Tech crafts contemporary glass railings and office partitions that elevate interior design while providing durability and safety. Our systems use toughened glass with stainless steel or aluminum fittings suitable for balconies, staircases and mezzanines. Office glass partitions include acoustic options and frosted/privacy treatments for meeting rooms. We provide structural analysis, glass thickness recommendations and anchor details to comply with building codes. Finishes and handrail styles are customizable to suit architectural aesthetics.",
        types: [
            {
                id: "balcony_glass_railing",
                name: "Balcony Glass Railing",
                image: "/images/services/glass_railing_partitions/balcony.webp",
                description: "Elegant frameless or semi-frameless railings with safety-rated glass.",
                subtypes: [{ name: "Spigoted" }, { name: "Channel Mounted" }]
            },
            {
                id: "office_partition",
                name: "Office Glass Partition",
                image: "/images/services/glass_railing_partitions/office.webp",
                description: "Modular glass wall systems with acoustic seals and sliding doors.",
                subtypes: [{ name: "Frameless Partition" }, { name: "Framed Partition" }]
            }
        ],
        applications: [
            "Residential balconies and terraces",
            "Office interiors and boardrooms",
            "Retail storefronts and showrooms",
            "Hotel lobbies and mezzanines",
            "Public buildings and atriums"
        ]
    },

    // 22) Elevators & Lifts
    elevators_and_lifts: {
        title: "Elevators & Lifts",
        image: "/images/services/elevators_and_lifts/lift.webp",
        introduction:
            "KVRV Global Tech partners to provide passenger and service elevators for residential and commercial buildings. Our solutions include hydraulic home lifts, machine-room-less (MRL) passenger lifts and goods lifts, with safety features meeting regulatory standards. We select drive types, capacity and control systems for smooth ride quality and energy efficiency. Installation includes pit, shaft and machine room coordination, plus commissioning and maintenance contracts. Retrofit and modernization services are available to upgrade existing lift systems with improved controllers and safety components.",
        types: [
            {
                id: "home_lift",
                name: "Home Lift",
                image: "/images/services/elevators_and_lifts/home_lift.webp",
                description: "Compact home elevators with low pit and headroom requirements for residences.",
                subtypes: [{ name: "Hydraulic Home Lift" }, { name: "MRL Home Lift" }]
            },
            {
                id: "passenger_elevator",
                name: "Passenger Elevator",
                image: "/images/services/elevators_and_lifts/passenger.webp",
                description: "Commercial passenger lifts with VVVF drives for energy-efficient operation.",
                subtypes: [{ name: "MRL Passenger" }, { name: "Traction Elevator" }]
            }
        ],
        applications: [
            "Residential buildings and villas",
            "Commercial office towers",
            "Hospitals and healthcare facilities",
            "Hotels and multi-storey retail centers",
            "Industrial and goods transport"
        ]
    },

    // 23) Air Conditioners
    air_conditioners: {
        title: "Air Conditioners",
        image: "/images/services/air_conditioners/ac.webp",
        introduction:
            "KVRV Global Tech supplies energy-efficient air conditioning solutions for homes, offices and industrial spaces. Offerings include split ACs, ducted VRF/VRV systems and packaged rooftop units tailored to load and zoning requirements. We provide heat-pump capable units, inverter technology for reduced running costs and smart controls for scheduling and remote monitoring. System design considers thermal loads, ductwork optimization and fresh-air requirements for health and comfort. Professional installation, commissioning and preventive maintenance are provided to ensure long-term efficiency and warranty compliance.",
        types: [
            {
                id: "split_ac",
                name: "Split Air Conditioners",
                image: "/images/services/air_conditioners/split.webp",
                description: "Wall-mounted split units ideal for rooms and small offices with inverter options.",
                subtypes: [{ name: "1 Ton - 2 Ton" }, { name: "2 Ton - 3 Ton" }]
            },
            {
                id: "vrf_vrv_system",
                name: "VRF / VRV Systems",
                image: "/images/services/air_conditioners/vrf.webp",
                description: "Variable refrigerant flow systems for multi-zone commercial buildings with high efficiency.",
                subtypes: [{ name: "Cooling Only" }, { name: "Heat Pump" }]
            },
            {
                id: "ducted_ac",
                name: "Ducted & Packaged AC",
                image: "/images/services/air_conditioners/ducted.webp",
                description: "Concealed ducted solutions for centralized climate control in large spaces.",
                subtypes: [{ name: "Low Static Ducted" }, { name: "High Static Ducted" }]
            }
        ],
        applications: [
            "Residential rooms and apartments",
            "Corporate offices & meeting rooms",
            "Retail & shopping centers",
            "Industrial spaces requiring controlled environments",
            "Hospitals and healthcare centers"
        ]
    },

    // 24) Miscellaneous & Integrated Solutions (Electrical, Fire Safety, Smart Accessories)
    integrated_solutions: {
        title: "Integrated Electrical & Safety Solutions",
        image: "/images/services/integrated_solutions/integrated.webp",
        introduction:
            "KVRV Global Tech also delivers complementary electrical, fire safety and smart-accessory solutions to build complete, integrated systems. From distribution boards, wiring and earthing to smoke detectors, fire alarm panels and emergency lighting — we offer compliant installations and testing. Our integrated approach ties energy, water, security and automation into single dashboards for easier management and efficiency. We design, supply and commission turnkey packages with documentation, safety compliance and performance testing. Ongoing service, spare-part provisioning and system upgrades ensure your infrastructure remains robust and future-ready.",
        types: [
            {
                id: "electrical_works",
                name: "Electrical Works & Panels",
                image: "/images/services/integrated_solutions/electrical.webp",
                description: "End-to-end electrical installations including MDBs, DBs, wiring, earthing and power factor correction.",
                subtypes: [{ name: "Low-Tension Panels" }, { name: "Distribution Boards" }]
            },
            {
                id: "fire_safety",
                name: "Fire Detection & Alarm",
                image: "/images/services/integrated_solutions/fire.webp",
                description: "Fire alarm panels, smoke & heat detectors, and emergency response integration for building safety.",
                subtypes: [{ name: "Addressable Fire Panel" }, { name: "Conventional Fire Panel" }]
            },
            {
                id: "smart_accessories",
                name: "Smart Accessories & Sensors",
                image: "/images/services/integrated_solutions/sensors.webp",
                description: "Range of sensors, smart plugs, energy meters and gateways to expand automation capabilities.",
                subtypes: [{ name: "Energy Metering" }, { name: "Gas & Smoke Sensors" }]
            }
        ],
        applications: [
            "Full building electrical fitouts",
            "Fire safety and life-safety systems",
            "Integrated building automation projects",
            "Compliance upgrades and retrofits",
            "Smart-metering and energy optimization"
        ]
    }
};

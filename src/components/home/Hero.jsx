// src/components/Hero/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { slides } from "../../data/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  // ✅ Map of slide titles to category IDs
  const titleToIdMap = {
    "CCTV Cameras & Accessories": "cctvcameras_accessories",
    "Video Door Phone (VDP)": "video_door_phone",
    "Smart Digital Lock": "smart_digital_lock",
    "Home Automation": "home_automation",
    "Curtain & Blind Operators": "curtain_blind_operators",
    "Blinds & Curtains": "blinds_curtains",
    "Mosquito Net": "mosquito_net",
    "LPG Gas Line": "lpg_gas_line",
    "Gate Automation": "gate_automation",
    "Boom Barrier System": "boom_barrier_system",
    "UPS & Inverters": "ups_inverters",
    "RO Water Purifiers": "ro_water_purifiers",
    "Water Softener & Sand Filter": "water_softener_sand_filter",
    "Commercial RO System": "commercial_ro_system",
    "Rain Water Filter (RWF)": "rain_water_filter",
    "Pump & Controllers": "pump_controllers",
    "Automatic Water Level Controller": "automatic_water_level_controller",
    "Solar Water Heater": "solar_water_heater",
    "Heat Pump (Hot Water System)": "heat_pump",
    "Glass Shower Partition": "glass_shower_partition",
    "Glass Railing & Partitions": "glass_railing_partitions",
    "Elevators and Lifts": "elevators_and_lifts",
    "Air Conditioners": "air_conditioners",
    "Integrated Solutions": "integrated_solutions",
  };

  return (
    <section className="relative pt-8">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[100vh]"
      >
        {slides.map((s, i) => {
          // ✅ Normalize the title to a clean URL-safe ID
          const normalizedId = (titleToIdMap[s.title] || s.title)
            .toLowerCase()
            .replace(/[-\s&()]+/g, "_") // spaces, dashes, ampersands, parentheses → _
            .replace(/_{2,}/g, "_") // remove duplicate underscores
            .trim();

          return (
            <SwiperSlide key={i}>
              <div className="relative h-[100vh]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white max-w-3xl"
                  >
                    <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                      {s.title}
                    </h1>

                    <p className="mt-4 text-base md:text-xl leading-relaxed opacity-90">
                      {s.subtitle.split(",").map((item, index) => (
                        <span key={index} className="block">
                          {item.trim()}
                        </span>
                      ))}
                    </p>

                    <Link
                      to={`/category/${normalizedId}`}
                      className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
                    >
                      Explore Our Solutions
                    </Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

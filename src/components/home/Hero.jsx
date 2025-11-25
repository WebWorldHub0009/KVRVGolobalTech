import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { slides } from "../../data/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
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
    "Elevators (Lift)": "elevators",
    "Air Conditioners": "air_conditioners",
    "Solar Power Grid System": "solar_power_grid_system",
  };

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-[100vh]"
      >
        {slides.map((slide, index) => {
          const categoryId =
            titleToIdMap[slide.title] ||
            slide.title.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");

          return (
            <SwiperSlide key={index}>
              <div className="relative h-[100vh]">

                {/* IMAGE (BRIGHTER FOR PREMIUM LOOK) */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover brightness-[0.85]"
                  loading="lazy"
                />

                {/* TRANSPARENT SOFT OVERLAY (NO IMAGE BLOCKING) */}
                <div
                  className="absolute inset-0 bg-gradient-to-b 
                  from-black/10 via-black/5 to-black/40 
                  backdrop-blur-[2px]
                  flex items-center justify-center px-6"
                >

                  {/* PREMIUM GLASS CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white max-w-3xl p-10 rounded-3xl
                    bg-white/10 backdrop-blur-xl 
                    border border-white/20
                    shadow-[0_0_50px_rgba(0,0,0,0.35)]"
                  >

                    {/* TRUST BADGE */}
                    <p className="text-xs md:text-sm tracking-wide mb-4 uppercase font-semibold
                      bg-white/20 px-5 py-1 inline-block rounded-full shadow-md">
                      ✔ Trusted by 10,000+ Customers
                    </p>

                    {/* TITLE */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.8 }}
                      className="text-4xl md:text-6xl font-extrabold leading-tight 
                      bg-gradient-to-r from-[#00C6FF] via-[#007BFF] to-[#00D4FF]
                      text-transparent bg-clip-text drop-shadow-[0_0_45px_rgba(0,140,255,0.4)]"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* SUBTITLE */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="mt-4 text-base md:text-lg leading-relaxed opacity-90"
                    >
                      {slide.subtitle.split(",").map((line, i) => (
                        <span key={i} className="block">{line.trim()}</span>
                      ))}
                    </motion.p>

                    {/* FEATURES */}
                    <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
                      {["Premium Quality", "Expert Installation", "24×7 Support"].map((feature, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-1 bg-white/15 rounded-full border border-white/10"
                        >
                          ✓ {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA BUTTON */}
                    <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to={`/category/${categoryId}`}
                        className="inline-block mt-10 px-12 py-3 text-lg font-bold 
                        rounded-full 
                        bg-gradient-to-r from-[#0038FF] via-[#007BFF] to-[#00D4FF]
                        shadow-[0_0_45px_rgba(0,150,255,0.5)]
                        hover:shadow-[0_0_70px_rgba(0,200,255,0.7)]
                        transition-all duration-300"
                      >
                        Explore Solutions
                      </Link>
                    </motion.div>

                    {/* STAR RATING */}
                    <div className="mt-6 flex items-center justify-center gap-3 opacity-95">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                        alt="star"
                        className="w-6 animate-pulse"
                      />
                      <p className="text-lg font-semibold">
                        Rated 4.9/5 by Homeowners & Businesses
                      </p>
                    </div>

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

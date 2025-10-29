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
    "Water Tech": "watertech",
    "Hot Water Tech": "hotwatertech",
    "Pumps & Controllers": "pumps",
    "Air Conditioners & Elevators (Lift)": "acelevators",
    "Gas Tech": "gastech",
    "Glass Tech": "glasstech",
    "Surveillance Systems & Smart Gadgets": "surveillance",
    "Entrance Automation": "entranceautomation",
    "Home Automation": "homeautomation",
    "Renewable Energy Source": "renewableenergy",
  };

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[100vh]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[100vh]">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
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
                    to={`/category/${titleToIdMap[s.title] || s.title.toLowerCase().replace(/\s+/g, "")}`}
                    className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
                  >
                    Explore Our Solutions
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

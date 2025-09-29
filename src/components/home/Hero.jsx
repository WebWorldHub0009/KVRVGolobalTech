import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";  // ✅ yahan se import karna hai
import hero1 from "../../assets/hero1.jpg"
import "swiper/css";
import "swiper/css/navigation";


const slides = [
  {
    title: "Surveillance Systems",
    subtitle: "CCTV, VDP, Smart Locks, Alarms — Complete security solutions.",
    img: hero1, // apna image daalna
  },
  {
    title: "Home Automation",
    subtitle: "Lights, Curtains, Voice control, Hybrid automation.",
    img: hero1,
  },
  {
    title: "Renewable Energy",
    subtitle: "Roof-top solar, solar pumps, street lights & inverters.",
    img: hero1,
  },
];

export default function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-[80vh]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[80vh]">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                <div className="text-center text-white max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold">{s.title}</h1>
                  <p className="mt-4 text-sm md:text-lg">{s.subtitle}</p>
                  <a
                    href="#services"
                    className="inline-block mt-6 px-6 py-3 bg-blue-600 rounded-md font-medium"
                  >
                    Explore Our Solutions
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

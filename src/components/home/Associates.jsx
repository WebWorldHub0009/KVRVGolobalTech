import React from "react";
import { associates } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Associates() {
    return (
        <section
            id="associates"
            className="py-16 md:py-20 relative bg-gray-50 overflow-hidden"
        >
            {/* Title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4
                     bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400">
                Our Associates
            </h2>

            {/* Section description */}
            <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600 text-lg">
                We are proud to collaborate with industry leaders who share our vision for innovative, sustainable, and reliable solutions.
            </p>

            {/* Slider */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 0, speed: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
                speed={3000}
            >
                {associates.map((assoc, idx) => (
                    <SwiperSlide key={idx} className="flex items-center justify-center">
                        <a
                            href={assoc.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative transition-transform duration-500 hover:scale-110"
                        >
                            {/* Logo container */}
                            <div className="bg-white/80 p-4 rounded-lg flex items-center justify-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={assoc.logo}
                                    alt={assoc.name}
                                    className="h-16 sm:h-20 object-contain"
                                />
                            </div>

                            {/* Tagline overlay on hover */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/70 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center max-w-[150px]">
                                {assoc.tagline}
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

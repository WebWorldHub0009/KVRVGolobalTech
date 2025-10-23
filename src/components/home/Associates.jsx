import React from "react";
import { associates } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Associates() {
    return (
        <section
            id="associates"
            className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-gray-50 min-h-screen"
        >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12
                     bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400
                     animate-gradient-x">
                Our Associates
            </h2>

            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                navigation={true} // enables arrows
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
            >
                {associates.map((assoc, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-screen overflow-hidden rounded-xl shadow-lg group">
                            {/* Image with zoom on hover */}
                            <img
                                src={assoc.logo}
                                alt={assoc.name}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col items-center justify-center px-6 text-center">
                                <h3 className="text-white text-3xl md:text-5xl font-bold mb-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                    {assoc.name}
                                </h3>
                                <p className="text-white text-lg md:text-2xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                    {assoc.tagline}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

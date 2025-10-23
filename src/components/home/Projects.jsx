import React from "react";
import { projects } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-gray-50 bg-center bg-cover min-h-screen"
        >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-12
                     bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400
                     animate-gradient-x">
                Our Projects
            </h2>

            {/* Full-Page Slider */}
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
            >
                {projects.map((p, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-screen overflow-hidden rounded-xl shadow-lg group">
                            {/* Image with zoom on hover */}
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
                                <h3 className="text-white text-3xl md:text-5xl font-bold text-center px-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                    {p.title}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

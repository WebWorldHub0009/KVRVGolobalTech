import React from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Images (local ya external URLs)
import surveillanceImg from "/images/services/surveillance/s1.png";
import automationImg from "/images/services/automation/home-automation.webp";
import solarImg from "/images/services/renewable/solar.webp";
import waterImg from "/images/services/watertech/watertech.webp";
import hotWaterImg from "/images/services/watertech/watertech1.webp";
import glassImg from "/images/services/glass/glassTower.webp";

export default function Services() {
    // ✅ same data as before
    const services = [
        {
            title: "Surveillance Systems",
            desc: "CCTV, VDP, Smart Locks, Gas Leak Detectors, Alarm & Sensors.",
            image: surveillanceImg,
            link: "/surveillance",
        },
        {
            title: "Home Automation",
            desc: "Light & Curtain Automation, Voice control, Wired/Wireless, Cloud based.",
            image: automationImg,
            link: "/automation",
        },
        {
            title: "Renewable Energy",
            desc: "Roof-top Solar, Solar Pumps, Solar Street Lights, UPS & Inverters.",
            image: solarImg,
            link: "/renewable",
        },
        {
            title: "Water Tech",
            desc: "RO Purifiers, Water Softeners, STP/WWTP, Rainwater Harvesting.",
            image: waterImg,
            link: "/watertech",
        },
        {
            title: "Hot Water Tech",
            desc: "Heat Pumps, Geysers, Solar Water Heaters.",
            image: hotWaterImg,
            link: "/hotwater",
        },
        {
            title: "Glass & A/C",
            desc: "Shower Partitions, Glass Railings, AC Systems & Elevators.",
            image: glassImg,
            link: "/glass",
        },
    ];

    return (
        <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
            <SectionTitle title="Our Services" />

            {/* ✅ Swiper Slider */}
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                spaceBetween={30}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mySwiper"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center">
                            <ServiceCard
                                title={service.title}
                                desc={service.desc}
                                image={service.image}
                                link={service.link}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

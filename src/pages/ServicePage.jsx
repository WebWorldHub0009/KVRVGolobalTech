import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesData from "../data/services";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper core + modules
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ServicePage() {
    const { type } = useParams();
    const service = servicesData.find((s) => s.id === type);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    if (!service) {
        return (
            <h2 className="text-center text-red-500 text-2xl py-10">
                Service Not Found
            </h2>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-16 px-6 space-y-16">

            {/* Hero Section */}
            <div
                data-aos="fade-up"
                className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-16 bg-gradient-to-r from-green-50 via-white to-green-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
                {/* Dynamic Hero Image */}
                {service.images && service.images.length > 0 && (
                    <div className="flex-shrink-0 w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md" data-aos="zoom-in">
                        <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                    </div>
                )}

                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4" data-aos="fade-right">
                        {service.title}
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed" data-aos="fade-left">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Key Features */}
            {service.keyFeatures && service.keyFeatures.length > 0 && (
                <div className="bg-green-50 p-10 rounded-3xl shadow-lg space-y-6" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features & Benefits</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {service.keyFeatures.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Applications */}
            {service.applications && service.applications.length > 0 && (
                <div className="space-y-6" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Applications</h2>
                    {service.applications.map((app, i) => (
                        <p key={i} className="text-gray-700 text-lg leading-relaxed">{app}</p>
                    ))}
                </div>
            )}

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.images.map((img, i) => (
                    <div
                        key={i}
                        className="relative overflow-hidden rounded-2xl shadow-lg group"
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                    >
                        <img
                            src={img}
                            alt={`${service.title} ${i}`}
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold tracking-wide">
                                {service.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dynamic Testimonials */}
            {service.testimonials && service.testimonials.length > 0 && (
                <div className="relative bg-green-100 rounded-3xl p-12 shadow-lg mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                        What Our Clients Say
                    </h2>
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="mt-8"
                    >
                        {service.testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                    <p className="text-gray-700 mb-4">"{t.feedback}"</p>
                                    <span className="font-semibold text-gray-800">– {t.name}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            {/* CTA Button */}
            <div className="text-center mt-10" data-aos="fade-up">
                <Link
                    to="/contact"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-colors duration-300"
                >
                    Get a Quote
                </Link>
            </div>

        </div>
    );
}

export default ServicePage;

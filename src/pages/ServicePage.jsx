import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesData from "../data/services";
import Hero from "../components/common/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
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
        <div className="w-full overflow-hidden space-y-16">
            {/* Full-width Hero */}
            <Hero
                title={service.title}
                subtitle="Committed to creating smarter, safer, and more connected lifestyles."
                backgroundImage={
                    service.heroImage ||
                    (service.images && service.images[0]) ||
                    "/default-bg.jpg"
                }
            />

            {/* Intro Section */}
            <div
                data-aos="fade-up"
                className="flex flex-col lg:flex-row items-center gap-8 px-4 sm:px-8 lg:px-16 mb-16 
        bg-gradient-to-r from-green-50 via-white to-green-50 py-10 rounded-none lg:rounded-3xl shadow-lg"
            >
                {service.images?.length > 0 && (
                    <div
                        className="flex-shrink-0 w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-md"
                        data-aos="zoom-in"
                    >
                        <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-full h-72 sm:h-80 lg:h-[28rem] object-cover rounded-2xl"
                        />
                    </div>
                )}

                <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4"
                        data-aos="fade-right"
                    >
                        {service.title}
                    </h1>
                    <p
                        className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed"
                        data-aos="fade-left"
                    >
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Key Features */}
            {service.keyFeatures?.length > 0 && (
                <div
                    className="bg-green-50 px-4 sm:px-8 lg:px-16 py-10 rounded-none lg:rounded-3xl shadow-lg"
                    data-aos="fade-up"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                        Key Features & Benefits
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-base sm:text-lg">
                        {service.keyFeatures.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Applications */}
            {service.applications?.length > 0 && (
                <div className="px-4 sm:px-8 lg:px-16 space-y-6" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                        Applications
                    </h2>
                    {service.applications.map((app, i) => (
                        <p
                            key={i}
                            className="text-gray-700 text-base sm:text-lg leading-relaxed"
                        >
                            {app}
                        </p>
                    ))}
                </div>
            )}

            {/* Image Gallery */}
            {service.images?.length > 0 && (
                <div
                    className="px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    data-aos="fade-up"
                >
                    {service.images.map((img, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-2xl shadow-lg group"
                            data-aos-delay={i * 100}
                        >
                            <img
                                src={img}
                                alt={`${service.title} ${i}`}
                                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-white text-lg sm:text-xl font-semibold tracking-wide">
                                    {service.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Testimonials */}
            {service.testimonials?.length > 0 && (
                <div
                    className="relative bg-green-100 px-4 sm:px-8 lg:px-16 py-12 rounded-none lg:rounded-3xl shadow-lg"
                    data-aos="fade-up"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                        What Our Clients Say
                    </h2>
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mt-8"
                    >
                        {service.testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center h-full flex flex-col justify-center">
                                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                                        "{t.feedback}"
                                    </p>
                                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                                        – {t.name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            {/* CTA */}
            <div className="text-center mt-10 pb-10" data-aos="fade-up">
                <Link
                    to="/contact"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 sm:px-10 py-4 rounded-full shadow-lg transition-colors duration-300 text-base sm:text-lg"
                >
                    Get a Quote
                </Link>
            </div>
        </div>
    );
}

export default ServicePage;

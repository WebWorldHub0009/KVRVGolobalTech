import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { testimonials } from '../../data/data';

function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-20 bg-gradient-to-br from-[#f0fff4] via-[#e6f9ff] to-[#f5fff9] text-center px-4 sm:px-6 lg:px-12"
        >
            {/* Gradient Animated Heading */}
            <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12
                           bg-clip-text text-transparent bg-gradient-to-r from-[#00b09b] via-[#00d4ff] to-[#00b09b]
                           animate-gradient-x"
            >
                What Our Clients Say
            </h2>

            {/* Testimonials Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg w-full sm:w-[45%] md:w-[30%]
                                   flex flex-col justify-between border border-transparent
                                   transition-all duration-300 hover:scale-105 hover:shadow-2xl
                                   hover:border-[#00b09b]/50 hover:bg-gradient-to-br hover:from-[#e0fff5] hover:to-[#e6faff]"
                    >
                        {/* User Icon */}
                        <FaUserCircle className="text-[#00b09b] text-5xl mb-4 mx-auto" />

                        {/* Feedback */}
                        <p className="text-gray-700 italic mb-4 leading-relaxed">
                            “{t.feedback}”
                        </p>

                        {/* Name + Role */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#00b09b]">{t.name}</h3>
                            {t.role && (
                                <p className="text-sm text-gray-500">{t.role}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;

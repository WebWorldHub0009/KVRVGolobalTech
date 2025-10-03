import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { testimonials } from '../../data/data';

function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-gray-50 text-center px-4">
            {/* Gradient Animated Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold mb-12
                           bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400
                           animate-gradient-x">
                What Our Clients Say
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 flex-wrap">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col justify-between 
                                   transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100"
                    >
                        {/* User Icon */}
                        <FaUserCircle className="text-green-400 text-5xl mb-4 mx-auto" />

                        {/* Feedback */}
                        <p className="text-gray-700 italic mb-4">&quot;{t.feedback}&quot;</p>

                        {/* Name + Role */}
                        <div>
                            <h3 className="text-lg font-semibold text-green-500">{t.name}</h3>
                            {t.role && (
                                <p className="text-sm text-gray-500">{t.role}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;

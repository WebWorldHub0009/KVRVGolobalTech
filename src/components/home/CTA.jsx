import React from "react";

export default function CTA() {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-green-400 to-teal-300 text-white text-center rounded-2xl mx-6 md:mx-20 my-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Space?
            </h2>
            <p className="mb-6 text-lg">
                Contact us today for a free consultation and discover how our solutions can elevate your home or business.
            </p>
            <a
                href="#contact"
                className="bg-white text-green-500 font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
                Get a Quote
            </a>
        </section>
    );
}

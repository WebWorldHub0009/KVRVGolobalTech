import React from "react";

export default function CTA() {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-[#0077c8] via-[#0099e6] to-[#00bfff] text-white text-center rounded-2xl mx-6 md:mx-20 my-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
                Ready to Transform Your Space?
            </h2>

            <p className="mb-6 text-lg text-blue-50 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how our
                innovative solutions can elevate your home or business.
            </p>

            <a
                href="#contact"
                className="bg-white text-[#0077c8] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#e6f4ff] hover:scale-105 transition-transform duration-300"
            >
                Get a Quote
            </a>
        </section>
    );
}

import React from "react";

const Hero = ({
    title,
    subtitle,
    buttonText,
    buttonLink,
    backgroundImage,
}) => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background image */}
            <img
                src={backgroundImage}
                alt="hero background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-3xl px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6">{subtitle}</p>
                {buttonText && (
                    <a
                        href={buttonLink}
                        className="inline-block bg-gradient-to-r from-green-400 to-teal-500 hover:scale-105 transform transition px-6 py-3 rounded-lg font-semibold shadow-lg"
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </section>

    );
};

export default Hero;

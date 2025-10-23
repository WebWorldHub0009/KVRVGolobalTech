import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Navbar = ({ logo }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileDropdown = () =>
        setIsMobileDropdownOpen(!isMobileDropdownOpen);

    const mobileLinks = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        {
            name: "Products & Services",
            dropdown: [
                { name: "Surveillance & Smart Gadgets", link: "/surveillance" },
                { name: "Entrance Automation", link: "/entrance" },
                { name: "Home Automation", link: "/automation" },
                { name: "Renewable Energy", link: "/renewable" },
                { name: "Water Technology", link: "/watertech" },
                { name: "Hot Water Tech", link: "/hotwater" },
                { name: "Pumps & Controllers", link: "/pumps" },
                { name: "Air Conditioning & Elevators", link: "/ac" },
                { name: "Gas Technology", link: "/gas" },
                { name: "Glass Technology", link: "/glass" },
            ],
        },
        { name: "Gallery", link: "/gallery" },
        { name: "Videos", link: "/video" },
        { name: "Projects", link: "/projects" },
        { name: "Contact Us", link: "/contact" },
    ];

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-xl">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    {logo && (
                        <div className="bg-gray-900 shadow-md flex items-center justify-center rounded-full overflow-hidden
                transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]
                h-15 w-15 z-40">
                            <img src={logo} alt="KVRV Logo" className="h-16 w-16 object-contain" />
                        </div>
                    )}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
                    <Link
                        className="hover:text-green-400 relative group transition-colors"
                        to="/"
                    >
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                        className="hover:text-green-400 relative group transition-colors"
                        to="/about"
                    >
                        About Us
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>

                    {/* Desktop Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-green-400 transition-colors">
                            Products & Services
                            <span className="inline-block text-[10px] transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                        </button>
                        <div className="absolute z-50 flex-col bg-white text-black mt-1 p-2 rounded shadow min-w-[220px]
                opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100
                transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                            {mobileLinks
                                .find((item) => item.dropdown)
                                .dropdown.map((item) => (
                                    <Link
                                        key={item.link}
                                        className="block px-4 py-2 hover:bg-gray-200 rounded"
                                        to={item.link}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                        </div>
                    </div>

                    <Link
                        className="hover:text-green-400 relative group transition-colors"
                        to="/gallery"
                    >
                        Gallery
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                        className="hover:text-green-400 relative group transition-colors"
                        to="/video"
                    >
                        Videos
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                        className="hover:text-green-400 relative group transition-colors"
                        to="/projects"
                    >
                        Projects
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                        className="hover:text-green-400 relative group transition-colors"
                        to="/contact"
                    >
                        Contact Us
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-3xl focus:outline-none"
                >
                    {isMobileMenuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-gray-800 shadow-lg overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-[2000px]" : "max-h-0"
                    }`}
            >
                {mobileLinks.map((item, idx) =>
                    item.dropdown ? (
                        <div key={idx} className="px-4 py-2">
                            <button
                                onClick={toggleMobileDropdown}
                                className="flex justify-between w-full font-semibold text-gray-300 hover:text-green-400 transition-colors"
                            >
                                {item.name}
                                <span
                                    className={`inline-block transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    ▼
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ${isMobileDropdownOpen ? "max-h-96 mt-2" : "max-h-0"
                                    }`}
                            >
                                {item.dropdown.map((sub) => (
                                    <Link
                                        key={sub.link}
                                        to={sub.link}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsMobileDropdownOpen(false);
                                        }}
                                        className="block px-2 py-2 hover:bg-gray-700 rounded transition-colors"
                                    >
                                        {sub.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Link
                            key={idx}
                            to={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-4 hover:bg-gray-700 transition-colors"
                        >
                            {item.name}
                        </Link>
                    )
                )}
            </div>
        </nav>
    );
};

export default Navbar;

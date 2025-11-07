import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Navbar = ({ logo }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileDropdown = () => setIsMobileDropdownOpen(!isMobileDropdownOpen);

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
        <nav className="bg-[#0A1F44] text-white fixed w-full z-50 shadow-lg">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    {logo && (
                        <div className="flex items-center justify-center rounded-full overflow-hidden
                            transition-transform duration-300 hover:scale-110
                            h-15 w-15 z-40">
                            <img src={logo} alt="KVRV Logo" className="h-16 w-16 object-contain" />
                        </div>
                    )}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
                    {["Home", "About Us", "Gallery", "Videos", "Projects", "Contact Us"].map(
                        (item, idx) => {
                            const link = mobileLinks.find((m) => m.name === item)?.link || "/";
                            return (
                                <Link
                                    key={idx}
                                    to={link}
                                    className="hover:text-[#00B4FF] relative group transition-colors"
                                >
                                    {item}
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00B4FF] transition-all group-hover:w-full"></span>
                                </Link>
                            );
                        }
                    )}

                    {/* Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-[#00B4FF] transition-colors">
                            Products & Services
                            <span className="inline-block text-[10px] transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                        </button>
                        <div className="absolute z-50 flex-col bg-white text-[#0A1F44] mt-1 p-2 rounded shadow min-w-[220px]
                            opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100
                            transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                            {mobileLinks.find((item) => item.dropdown).dropdown.map((item) => (
                                <Link
                                    key={item.link}
                                    className="block px-4 py-2 hover:bg-[#E0E0E0] rounded transition-colors"
                                    to={item.link}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-3xl focus:outline-none text-[#00B4FF]"
                >
                    {isMobileMenuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-[#13294B] shadow-lg overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-[2000px]" : "max-h-0"
                    }`}
            >
                {mobileLinks.map((item, idx) =>
                    item.dropdown ? (
                        <div key={idx} className="px-4 py-2">
                            <button
                                onClick={toggleMobileDropdown}
                                className="flex justify-between w-full font-semibold text-gray-300 hover:text-[#00B4FF] transition-colors"
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
                                        className="block px-2 py-2 hover:bg-[#1C3C6B] rounded transition-colors"
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
                            className="block px-4 py-4 hover:bg-[#1C3C6B] transition-colors"
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

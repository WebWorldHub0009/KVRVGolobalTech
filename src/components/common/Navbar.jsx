import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileDropdown = () => setIsMobileDropdownOpen(!isMobileDropdownOpen);

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    {logo && (
                        <div className="bg-gray-900 shadow-md flex items-center justify-center rounded-full overflow-hidden
                transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]
                h-12 w-12 z-40">
                            <img
                                src={logo}
                                alt="KVRV Logo"
                                className="h-16 w-16 object-contain"
                            />
                        </div>

                    )}
                    <span className="text-3xl md:text-4xl font-extrabold tracking-wider select-none
                 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400
                 drop-shadow-lg transition-transform duration-300 hover:scale-110 hover:from-green-300 hover:to-green-200">
                        KVRV
                    </span>

                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
                    <Link className="hover:text-green-400 relative group transition-colors" to="/">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link className="hover:text-green-400 relative group transition-colors" to="/about">
                        About Us
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>

                    {/* Solutions Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-green-400 transition-colors">
                            Solutions
                            <span className="inline-block transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                        </button>
                        <div className="absolute z-50 flex-col bg-white text-black mt-1 p-2 rounded shadow min-w-[220px]
      opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100
      transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">

                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/surveillance">
                                Surveillance & Smart Gadgets
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/entrance">
                                Entrance Automation
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/automation">
                                Home Automation
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/renewable">
                                Renewable Energy
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/watertech">
                                Water Technology
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/hotwater">
                                Hot Water Tech
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/pumps">
                                Pumps & Controllers
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/ac">
                                Air Conditioning & Elevators
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/gas">
                                Gas Technology
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-gray-200 rounded" to="/glass">
                                Glass Technology
                            </Link>
                        </div>
                    </div>


                    <Link className="hover:text-green-400 relative group transition-colors" to="/projects">
                        Projects
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link className="hover:text-green-400 relative group transition-colors" to="/contact">
                        Contact Us
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-3xl focus:outline-none"
                >
                    {isMobileMenuOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-gray-800 shadow-lg transform transition-transform duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"}`}>
                <Link
                    to="/"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 hover:bg-gray-700 transition-colors"
                >Home</Link>
                <Link
                    to="/about"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 hover:bg-gray-700 transition-colors"
                >About Us</Link>

                
                {/* Mobile Solutions Dropdown */}
                <div className="px-4 py-3">
                    <button
                        onClick={toggleMobileDropdown}
                        className="flex justify-between w-full font-semibold text-gray-300 hover:text-green-400 transition-colors"
                    >
                        <span>Solutions</span>
                        <span
                            className={`inline-block transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                                }`}
                        >
                            ▼
                        </span>
                    </button>

                    <div
                        className={`mt-2 flex flex-col gap-1 overflow-hidden transition-max-height duration-300 ${isMobileDropdownOpen ? "max-h-96" : "max-h-0"
                            }`}
                    >
                        <Link
                            to="/surveillance"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Surveillance & Smart Gadgets
                        </Link>
                        <Link
                            to="/entrance"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Entrance Automation
                        </Link>
                        <Link
                            to="/automation"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Home Automation
                        </Link>
                        <Link
                            to="/renewable"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Renewable Energy
                        </Link>
                        <Link
                            to="/watertech"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Water Technology
                        </Link>
                        <Link
                            to="/hotwater"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Hot Water Tech
                        </Link>
                        <Link
                            to="/pumps"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Pumps & Controllers
                        </Link>
                        <Link
                            to="/ac"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Air Conditioning & Elevators
                        </Link>
                        <Link
                            to="/gas"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Gas Technology
                        </Link>
                        <Link
                            to="/glass"
                            onClick={toggleMobileMenu}
                            className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                            Glass Technology
                        </Link>
                    </div>
                </div>


                <Link
                    to="/projects"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 hover:bg-gray-700 transition-colors"
                >Projects</Link>
                <Link
                    to="/contact"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 hover:bg-gray-700 transition-colors"
                >Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;

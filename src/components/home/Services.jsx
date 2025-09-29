import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";
import { FiCamera, FiHome, FiSun, FiDroplet, FiThermometer, FiCpu } from "react-icons/fi";

export default function Services() {
    return (
        <>
            {/* Services Section */}
            <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
                <SectionTitle title="Our Services" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <ServiceCard
                        title="Surveillance Systems"
                        desc="CCTV, VDP, Smart Locks, Gas Leak Detectors, Alarm & Sensors."
                        icon={<FiCamera className="text-green-400 w-12 h-12 mx-auto mb-4" />}
                    />
                    <ServiceCard
                        title="Home Automation"
                        desc="Light & Curtain Automation, Voice control, Wired/Wireless, Cloud based."
                        icon={<FiHome className="text-green-400 w-12 h-12 mx-auto mb-4" />}
                    />
                    <ServiceCard
                        title="Renewable Energy"
                        desc="Roof-top Solar, Solar Pumps, Solar Street Lights, UPS & Inverters."
                        icon={<FiSun className="text-green-400 w-12 h-12 mx-auto mb-4" />}
                    />
                </div>
            </section>

            {/* Other Solutions Section */}
            <section id="others" className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
                <SectionTitle title="Other Solutions" />
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Water Tech"
                        desc="RO Purifiers, Water Softeners, STP/WWTP, Rainwater Harvesting."
                        icon={<FiDroplet className="text-green-400 w-12 h-12 mx-auto mb-4" />}
                    />
                    <ServiceCard
                        title="Hot Water Tech"
                        desc="Heat Pumps, Geysers, Solar Water Heaters."
                        icon={<FiThermometer className="text-green-400 w-12 h-12 mx-auto mb-4" />}
                    />
                    <ServiceCard
                        title="Glass & A/C"
                        desc="Shower Partitions, Glass Railings, AC Systems & Elevators."
                        icon={<FiCpu className="text-green-400 w-12 h-12 mx-auto mb-4" />}
                    />
                </div>
            </section>
        </>
    );
}

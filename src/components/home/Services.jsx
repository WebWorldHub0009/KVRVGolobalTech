import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";

// Images (local ya external URLs)
import surveillanceImg from "/images/services/surveillance/s1.png";
import automationImg from "/images/services/automation/home-automation.webp";
import solarImg from "/images/services/renewable/solar.webp";
import waterImg from "/images/services/watertech/watertech.webp";
import hotWaterImg from "/images/services/watertech/watertech1.webp";
import glassImg from "/images/services/glass/glassTower.webp";

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
                        image={surveillanceImg}
                        link="/surveillance"
                    />
                    <ServiceCard
                        title="Home Automation"
                        desc="Light & Curtain Automation, Voice control, Wired/Wireless, Cloud based."
                        image={automationImg}
                        link="/automation"
                    />
                    <ServiceCard
                        title="Renewable Energy"
                        desc="Roof-top Solar, Solar Pumps, Solar Street Lights, UPS & Inverters."
                        image={solarImg}
                        link="/renewable"
                    />
                    <ServiceCard
                        title="Water Tech"
                        desc="RO Purifiers, Water Softeners, STP/WWTP, Rainwater Harvesting."
                        image={waterImg}
                        link="/watertech"
                    />
                    <ServiceCard
                        title="Hot Water Tech"
                        desc="Heat Pumps, Geysers, Solar Water Heaters."
                        image={hotWaterImg}
                        link="/hotwater"
                    />
                    <ServiceCard
                        title="Glass & A/C"
                        desc="Shower Partitions, Glass Railings, AC Systems & Elevators."
                        image={glassImg}
                        link="/glass"
                    />
                </div>
            </section>
        </>
    );
}

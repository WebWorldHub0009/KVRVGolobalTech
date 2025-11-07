import React from "react";

const HomeOrgChart = () => {
    const orgData = [
        { title: "KR Interiors", subtitle: "KR Electricals" },
        { title: "KR Appliances" },
        { title: "K'Tech Solar Systems", subtitle: "KR Painting & Wood Polish Works" },
        { title: "KR Water Pure" },
        { title: "KR Automation" },
        { title: "K'Tech Elevators" },
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Decorative gradient background blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0077c8]/10 via-[#0099e6]/10 to-[#00bfff]/10 blur-3xl opacity-50"></div>

            <h2 className="relative text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#0077c8] via-[#0099e6] to-[#00bfff]">
                KVRV Group Structure
            </h2>

            <div className="flex flex-col items-center relative z-10">
                {/* Top Level */}
                <div className="bg-gradient-to-r from-[#0077c8] via-[#0099e6] to-[#00bfff] text-white font-semibold px-8 py-4 rounded-xl shadow-lg relative mb-12">
                    KVRV Group
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-10 border-l-2 border-[#0099e6]"></div>
                </div>

                {/* Second Level */}
                <div className="flex flex-wrap justify-center gap-10 relative">
                    {/* Horizontal connector line for large screens */}
                    <div className="hidden md:block absolute top-0 left-0 w-full h-0.5 bg-[#0099e6]/50"></div>

                    {orgData.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center w-40 md:w-48">
                            <div className="bg-white text-gray-900 font-semibold px-5 py-3 rounded-lg shadow-md border border-[#0099e6]/30 text-center hover:shadow-xl transition-all duration-300">
                                {item.title}
                                {item.subtitle && (
                                    <div className="mt-1 text-sm text-gray-600">{item.subtitle}</div>
                                )}
                            </div>
                            {/* Connector line */}
                            <div className="h-8 border-l-2 border-[#0099e6]/50 mt-2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeOrgChart;

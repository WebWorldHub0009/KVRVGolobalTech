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
        <section className="py-20 bg-gray-50">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400 mb-12">
                KVRV Group Structure
            </h2>

            <div className="flex flex-col items-center">
                {/* Top Level */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md relative mb-12">
                    KVRV Group
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 border-l-2 border-gray-400"></div>
                </div>

                {/* First Level */}
                <div className="flex flex-wrap justify-center gap-8 relative">
                    {/* Horizontal connector line for large screens */}
                    <div className="hidden md:block absolute top-0 left-0 w-full h-0.5 bg-gray-400"></div>

                    {orgData.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center w-40 md:w-auto">
                            <div className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md text-center">
                                {item.title}
                                {item.subtitle && <div className="mt-1 text-sm text-gray-600">{item.subtitle}</div>}
                            </div>
                            {/* Connector line */}
                            <div className="h-8 border-l-2 border-gray-400 mt-2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeOrgChart;

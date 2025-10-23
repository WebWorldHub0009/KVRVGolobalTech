import React from "react";

const HomeOrgChart = () => {
    return (
        <section className="py-20 bg-gray-50">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-green-400 mb-12">
                KVRV Group Structure
            </h2>

            <div className="flex flex-col items-center">
                {/* Top Level */}
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md relative">
                    KVRV Group
                    {/* Vertical line down */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 border-l-2 border-gray-400"></div>
                </div>

                {/* First Level */}
                <div className="flex justify-center mt-10 gap-8 relative">
                    {/* Horizontal connector line */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-400"></div>

                    {/* Child Boxes */}
                    <div className="flex flex-col items-center">
                        <div className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md text-center">
                            KR Interiors
                            <div className="mt-2 text-sm text-gray-600">KR Electricals</div>
                        </div>
                        <div className="h-8 border-l-2 border-gray-400 mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md text-center">
                            KR Appliances
                        </div>
                        <div className="h-8 border-l-2 border-gray-400 mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md text-center">
                            K'Tech Solar Systems
                            <div className="mt-2 text-sm text-gray-600">KR Painting & Wood Polish Works</div>
                        </div>
                        <div className="h-8 border-l-2 border-gray-400 mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md text-center">
                            KR Water Pure
                        </div>
                        <div className="h-8 border-l-2 border-gray-400 mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md text-center">
                            KR Automation
                        </div>
                        <div className="h-8 border-l-2 border-gray-400 mt-2"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-white text-black font-semibold px-4 py-2 rounded-lg shadow-md text-center">
                            K'Tech Elevators
                        </div>
                        <div className="h-8 border-l-2 border-gray-400 mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOrgChart;

import { useEffect, useState } from "react";

export default function VisitorCounter() {
    const [count, setCount] = useState(() => {
        return parseInt(localStorage.getItem("visitor-count") || "0");
    });

    useEffect(() => {
        const newCount = count + 1;
        localStorage.setItem("visitor-count", newCount.toString());
        setCount(newCount);
    }, []);

    return (
        <div className="text-gray-800 text-sm md:text-base font-medium text-center mx-2">
            Visitor Count:{" "}
            <span className="font-semibold bg-gradient-to-r from-green-500 via-teal-400 to-emerald-600 text-transparent bg-clip-text">
                {count.toLocaleString()}
            </span>
        </div>
    );
}

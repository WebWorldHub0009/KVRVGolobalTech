import { useNavigate } from "react-router-dom";

export default function ServiceCard({ title, desc, image, link }) {
    const navigate = useNavigate();
    return (
        <div 
        onClick={()=>navigate(link)}
        className="relative bg-white shadow-xl rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100 transform hover:-translate-y-2 cursor-pointer">

            {/* Gradient hover background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image */}
            <div className="relative z-10 mb-6">
                <img
                    src={image}
                    alt={title}
                    className="w-36 h-36 mx-auto rounded-xl shadow-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                {title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-gray-600 text-base mt-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {desc}
            </p>

            {/* Bottom border animation */}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 transition-all duration-500 group-hover:w-full"></span>
        </div>
    );
}

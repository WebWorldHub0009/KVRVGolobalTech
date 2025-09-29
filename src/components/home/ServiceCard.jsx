export default function ServiceCard({ title, desc, icon }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center transition-transform duration-300 
                        hover:scale-105 hover:shadow-2xl hover:border-l-4 hover:border-green-400 
                        hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100">
            <div className="text-4xl mb-4 transition-transform duration-500 hover:rotate-12 hover:scale-110">
                {icon}
            </div>
            <h3 className="font-bold text-xl text-green-400 mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}

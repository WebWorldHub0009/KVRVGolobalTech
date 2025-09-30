import { useParams } from "react-router-dom";
import servicesData from "../data/services";

function ServicePage() {
    const { type } = useParams();
    const service = servicesData.find((s) => s.id === type);

    if (!service) {
        return <h2 className="text-center text-red-500 text-2xl py-10">
            Service Not Found
        </h2>;
    }

    return (
        <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="flex items-center gap-4 mb-8">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
                <h1 className="text-3xl font-bold">{service.title}</h1>
            </div>

            <p className="text-lg text-gray-700 mb-8">{service.description}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${service.title} ${i}`}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                ))}
            </div>
        </div>
    );
}

export default ServicePage;

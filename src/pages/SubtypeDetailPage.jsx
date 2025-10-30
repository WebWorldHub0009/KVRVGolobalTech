import React from "react";
import { useParams } from "react-router-dom";
import { categoryDetails } from "../data/categoryDetails";

export default function SubtypeDetailPage() {
    const { id, typeId, subtypeId } = useParams();
    const category = categoryDetails[id];
    const type = category?.types?.find((t) => t.id === typeId);
    const subtype = type?.subtypes?.find(
        (s) =>
            s.id === subtypeId ||
            s.name.toLowerCase().replace(/\s+/g, "_").replace(/[()]/g, "") === subtypeId
    );

    if (!category || !type || !subtype) {
        return (
            <div className="text-center py-20 text-red-500">
                Subtype Not Found
                <br />
                <span className="text-gray-600 text-sm">
                    Missing data for subtype: {subtypeId}
                </span>
            </div>
        );
    }

    return (
        <section className="py-16 px-6 bg-gray-50 text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{subtype.name}</h1>
            {subtype.image && (
                <img
                    src={subtype.image}
                    alt={subtype.name}
                    className="mx-auto mb-6 rounded-xl shadow-md w-full md:w-1/2"
                />
            )}
            <p className="max-w-2xl mx-auto text-gray-700">
                {subtype.description ||
                    "Detailed information about this subtype will be available soon."}
            </p>
        </section>
    );
}

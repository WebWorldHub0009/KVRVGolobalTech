// // src/components/TypeDetailPage.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { categoryDetails } from "../data/categoryDetails";

// const TypeDetailPage = () => {
//     const { categoryKey, typeId } = useParams();
//     const category = categoryDetails[categoryKey];
//     const type = category?.types?.find((t) => t.id === typeId);

//     if (!category || !type) {
//         return (
//             <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl">
//                 Type not found.
//             </div>
//         );
//     }

//     return (
//         <section className="bg-gray-50 min-h-screen">
//             {/* Hero Section */}
//             <div
//                 className="relative w-full h-[50vh] bg-cover bg-center"
//                 style={{ backgroundImage: `url(${type.image})` }}
//             >
//                 <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
//                     <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
//                         {type.name}
//                     </h1>
//                     <p className="text-gray-200 max-w-3xl text-lg leading-relaxed">
//                         {type.description}
//                     </p>
//                 </div>
//             </div>

//             {/* Back Link */}
//             <div className="max-w-6xl mx-auto px-6 py-8">
//                 <Link
//                     to={`/category/${categoryKey}`}
//                     className="inline-block text-green-600 hover:text-green-800 font-medium mb-6"
//                 >
//                     ← Back to {category.title}
//                 </Link>

//                 {/* Type Overview */}
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
//                     <img
//                         src={type.image}
//                         alt={type.name}
//                         className="w-full md:w-1/2 h-80 object-cover"
//                     />
//                     <div className="p-8 flex flex-col justify-center">
//                         <h2 className="text-3xl font-bold mb-4 text-gray-800">{type.name}</h2>
//                         <p className="text-gray-600 leading-relaxed text-lg">
//                             {type.description}
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Features */}
//             {category.features?.length > 0 && (
//                 <div className="max-w-6xl mx-auto px-6 py-12">
//                     <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
//                         Key Features
//                     </h3>
//                     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//                         {category.features.map((feature, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
//                             >
//                                 <span className="text-green-500 font-bold mr-2">✓</span>
//                                 {feature}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default TypeDetailPage;

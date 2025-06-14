// import { ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const ServiceCard = ({ service }) => {
//   return (
//     <div className="group bg-white border border-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
//       <div className="relative overflow-hidden">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute top-0 left-0 m-4 bg-amber-50 p-2 rounded-full border-2" style={{ borderColor: "#ebb661" }}>
//           <div className="text-amber-600">
//             {service.icon}
//           </div>
//         </div>
//       </div>
//       <div className="p-4 flex flex-col flex-grow">
//         <h3 className="text-lg font-bold mb-2 text-neutral-800">{service.title}</h3>
//         <div className="mt-auto  flex justify-between items-center">
//           <Link
//             to={`/services/${service.slug}`}
//             className="flex items-center text-sm font-medium transition-colors duration-300"
//             style={{ color: "#ebb661" }}
//           >
//             Learn More
//             <ChevronRight size={16} className="ml-1" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard

import { ChevronRight, PlusIcon, PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative bg-white rounded-2xl h-44  overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      <div className="absolute inset-0 bg-neutral-900/80 group-hover:bg-[#ebb661]/80 transition-all duration-500" />

      <div className="relative  z-10 h-full flex flex-col justify-center lg:items-center lg:text-center p-6">
        <h3 className="lg:text-3xl text-xl h-full flex lg:justify-center items-center gap-4 font-bold mb-3  group-hover:mt-0 text-white group-hover:text-black transition-all duration-600">
          <div className="inline-block bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30">
            <div className="text-white text-2xl">{service.icon2}</div>
          </div>
          <Link aria-label={service.title} to={`/services/${service.slug}`} className="hover:underline " >{service.title}</Link>
        </h3>

        {/* <p className="text-black/90 text-sm mb-6 opacity-0 hidden group-hover:block group-hover:opacity-100 transition-all duration-300 max-w-xs">
          {service.description}
        </p> */}
      </div>
    </div>
  );
};

export default ServiceCard;

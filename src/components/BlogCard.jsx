import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const BlogCard = ({ date, category, description, title, imageUrl, slug }) => {
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return (
    // <div className="relative flex flex-col bg-neutral-50 border border-slate-300 p-4 overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
    //   <div className="flex items-center space-x-2 p-4 mt-5 ">
    //     <span className="text-white p-2 absolute left-0  bg-black">{formattedDate(date)}</span>
    //     <div className='absolute right-6 '>
    //     <span className="text-black ">— </span>
    //     <span className="text-black text-base">{category}</span>
    //     </div>
    //   </div>
    //   <h3 className="text-whit text-xl font-semibold lora mt-6 mb-4 line-clamp-2">{title}</h3>
    //   <div className="relative flex-grow">
    //     <div className="h-48 w-full overflow-hidden group">
    //       <img
    //         src={imageUrl || "/api/placeholder/400/320"}
    //         alt={title}
    //         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    //       />
    //       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
    //       <Link to={`/blog/${slug}`} className=" hover:bg-white hover:text-black cursor-pointer border text-white font-semibold py-3 px-6 rounde shadow-md transition-all duration-600 md:block ease-in-out">
    //     Read More
    //       </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="px-2">
      <div
        className="rounded-lg h-[540px] relative shadow-xl hover:shadow-none  transition cursor-pointer border border-gray-200"
        // onClick={() => handleNavigate(slung)}
      >
        <div className="h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full lg:object-cover object-contain hover:scale-110 transition-all ease-in-out duration-1000"
          />
        </div>
        <div className="p-4 h-[270px] ">
          <p className="text-sm text-primary flex items-center gap-2">
            <FaUser className="inline-block" />
            <span className="text-sm font-semibold uppercase">Admin</span>
          </p>
          <div className="bg-gray-200 h-[2px] w-full my-3"></div>
          <h3 className="text-[1.35rem] font-semibold line-clamp-2 leading-7 mb-2">
            {title}
          </h3>
          <p className="text-gray-700 mb-2 text-[14px] text-justify line-clamp-4 lg:leading-6">
            {
              new DOMParser().parseFromString(description, "text/html").body
                .textContent
            }
          </p>
          <Link
            to={`/blog/${slug}`}
            className="text-sm group font-semibold absolute bottom-0 left-0 text-gray-500 flex bg-[#ebb661] w-full   justify-between items-center"
          >
            <p className="text-white group-hover:text-black/70 uppercase   cursor-pointer  px-8 py-3">
              Read More +
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

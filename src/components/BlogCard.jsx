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

    <div className="px-2">
      <div
        className=" h-[540px] relative shadow-xl hover:shadow-none  transition cursor-pointer border border-gray-200"
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

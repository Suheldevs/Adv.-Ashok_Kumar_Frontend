import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/dataSlice";
import BlogCard from "./BlogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSection = () => {
  const dispatch = useDispatch();
  const { blogData, error, status } = useSelector((state) => state.data);
 const goldColor = "#ebb661";
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);
console.log(blogData)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (status === "loading") {
    return (
      <div className="text-xl h-[50vh] flex justify-center items-center font-medium shadow-2xl rounded p-2">
        Loading..
      </div>
    );
  }

  if (blogData.length === 0) {
    return (
      <div className="text-red-600 text-lg h-[50vh] flex justify-center items-center font-medium shadow-2xl rounded p-2">
        Blog Data Not Found!
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-lg h-[50vh] flex justify-center items-center font-medium shadow-2xl rounded p-2">
        {error}
      </div>
    );
  }

  return (
    <div className="lg:py-14 md:py-12 py-10 bg-white/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              <span className="relative z-10">Our Latest Insights</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-opacity-40" style={{ backgroundColor: goldColor }}></span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Explore the key legal domains where we offer expert representation, rooted in years of judicial wisdom and advocacy excellence.
            </p>
          </div>
        <Slider {...settings}>
          {Array.isArray(blogData) && blogData.length > 0 ? (
            blogData.map((post) => (
              <div key={post._id} className="px-2">
                <BlogCard
                  slug={post.slug}
                  date={post.updatedAt}
                  category={post.category}
                  title={post.title}
                  imageUrl={post.imageUrl}
                  description={post.description}
                />
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSection;

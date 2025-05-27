import { Play, Facebook, Twitter, Youtube, Linkedin, ChevronsRight } from "lucide-react";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="bg-neutral-950 lg:h-screen h-[80vh] flex flex-row justify-center items-center text-white relative overflow-hidden">
      <div className="container lg:pt-20 mx-auto px-4  md:py-24 flex flex-col lg:flex-row items-center">
        {/* Left Content Area */}
        <div className="lg:w-1/2 pt-20 flex flex-col justify-center items-start z-10">
          <h1 className="text-[2.5rem] md:text-6xl font-serif font-bold mb-6 leading-none lg:tracking-wide">
            <span style={{ color: "#ebb661" }}>Smart Legal</span> <br />
            <span style={{ color: "#ebb661" }}>Solutions</span> for <br />
            Work and Life
          </h1>
          
          <p className="text-neutral-300 text-lg max-w-lg mb-8">
            We provide reliable legal support for both your personal
            and professional needs. We stand by your side with trusted
            guidance.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-5">
         

          <Link aria-label="Our Services" to='/services' className=" hidden lg:flex hover:bg-neutral-900 bg-neutral-950 border border-neutral-900 text-neutral-100 font-bold py-3 px-8 rounded-md  items-center transition duration-300">
            Explore Our Legal Services
          </Link>

           <Link aria-label="Learn More" to='/about' style={{ backgroundColor: "#ebb661" }} className="hover:bg-amber-500 group text-neutral-900 font-bold py-3 px-6 rounded-md flex items-center transition duration-300">
            Learn More
          <ChevronsRight className="ml-1 group-hover:ml-2 transition-all duration-500 ease-in-out"/>
          </Link>
          </div>
        </div>
        
        {/* Right Image Area */}
        <div className="lg:w-1/2 hidden lg:block relative z-10">
          <div className="relative ">
            {/* Blurred background circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-neutral-800  blur-2xl opacity-50"></div>
            
            <img 
              src="https://kits.rometheme.net/protego/wp-content/uploads/sites/47/2025/05/image-1.webp" 
              alt="Mr. Ashok Kumar" 
              className="rounded-md mx-auto lg:p-20 lg:pt-80 relative z-10"
            />
            
            {/* Experience Badge */}
            <div className="absolute  left-14  lg:mt-16 top-2/5 " style={{ backgroundColor: "#ebb661" }}>
              <div className="text-neutral-900 p-4 rounded-md shadow-lg">
                <div className="text-6xl font-bold">33+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      
      {/* Social media icons */}
      <div className="absolute hidden  bottom-8 bg-transparent right-5 lg:flex flex-col space-y-4 border border-neutral-800 p-2 rounded-2xl">
        <a target="_black" href="https://www.facebook.com/people/RetdJudge-Ashok-Kumar/pfbid0L8V9WY5cwsKtLfKzB6xhNS3f6iwRZqsu3m8FL5ZwZCWwUXEoeoXroEdW8TdYR6ZTl/?sk=about" className="bg-neutral-800 p-3 hover:scale-90 cursor-pointer z-20 rounded-full hover:bg-neutral-900  transition-colors duration-300">
          <Facebook size={20} />
        </a>
        <a target="_black" href="https://x.com/RetdJudgeAshokK" className="bg-neutral-800 p-3 hover:scale-90 cursor-pointer z-20 rounded-full hover:bg-neutral-900  transition-colors duration-300">
          <FaXTwitter size={20} />
        </a>
        <a target="_black" href="https://www.linkedin.com/in/retd-judge-ashok-kumar-advocate-high-court-882621258/" className="bg-neutral-800 p-3 hover:scale-90 cursor-pointer z-20 rounded-full hover:bg-neutral-900  transition-colors duration-300">
          <Linkedin size={20} />
        </a>
        <a target="_black" href="https://www.youtube.com/channel/UChYcMgKaKiYQPtOCSADyKUQ" className="bg-neutral-800 p-3 hover:scale-90 cursor-pointer z-20 rounded-full hover:bg-neutral-900  transition-colors duration-300">
          <Youtube size={20} />
        </a>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900 to-transparent opacity-90"></div>
    </div>
  );
}
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#001f3f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-20">
        <p className="text-[#f94faa] font-bold">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fbfcff]">
          Nkeiru Lois
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#d6d7d8]">
          I'm a FrontEnd Developer.
        </h2>
        <p className="text-[#d6d7d8] py-4 max-w-[700px]">
          I'm a passionate frontend developer with a strong interest in design.
          Leveraging my skills in technology and creativity, I create
          captivating digital experiences that seamlessly blend aesthetics with
          functionality. Committed to sustainability, I strive to innovate and
          reduce environmental impact through my work.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ae045e] hover:border-[#ae045e]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

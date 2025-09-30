import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center '>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">The spark</div>
      <div className="text-[9.5vw]  justify-center flex items-center uppercase leading-[8vw]">
        who
        <div className="h-[7vw] w-[16vw] rounded-full -mt-5 overflow-hidden">
          <Video />
        </div>
        generates
      </div>
      <div className="text-[9.5vw]  justify-center flex items-center uppercase leading-[8vw]">
        there creativity
      </div>
    </div>
  );
};

export default HomeHeroText;

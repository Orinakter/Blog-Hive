import React from 'react';
import { Image } from 'next/image';


const Banner = () => {
    return (
         <div className="carousel w-full min-h-[70vh] rounded-xl mt-5 ">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            style={{
              background: `url("https://i.ibb.co.com/wNX969F/pexels-picography-4458.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="min-h-[70vh] w-full flex justify-center items-center "
          >
            <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
            Unlock the Buzz, Unleash the Storie
            </h1>
            
          </div>
  
          
        </div>
        <div>
        <p className=''>Step into BlogHive, where ideas thrive and stories buzz with life. From trending topics to hidden gems, each post is a carefully crafted nectar of knowledge and inspiration. Discover, explore, and connect in this hive of unique perspectives.</p>
        </div>
        
      </div>
    );
};

export default Banner;
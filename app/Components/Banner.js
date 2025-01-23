import React from 'react';
import { Image } from 'next/image';


const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#FFF2D7] min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-12">
   <img src="https://i.ibb.co.com/wNX969F/pexels-picography-4458.jpg" className='w-full h-[450px] rounded-lg'></img>
    <div>
      <h1 className="text-4xl font-bold text-[#F98866]">Welcome to the Hive</h1>
      <p className="py-6 text-[#F98866]">
      Dive into a world buzzing with ideas, stories, and inspiration. Here, every post is a piece of nectar, crafted to inform and engage. Explore trending topics, insightful articles, and captivating stories.
      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
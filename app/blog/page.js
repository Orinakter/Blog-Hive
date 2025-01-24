import Link from 'next/link';
import React from 'react';

const blogPage = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()


    return (

        <div className="max-w-7xl mx-auto px-6 py-10">
     
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Blog Posts
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
           
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                facilisis nec nisl vitae tincidunt.
              </p>
              <Link
                href={`/blog/${item.id}`}
                className="text-[#F98866] font-semibold inline-block mt-4 hover:underline"
              >
                Read More 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default blogPage;
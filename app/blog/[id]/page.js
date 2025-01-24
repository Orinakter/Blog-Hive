import React from 'react';

const blogDetails = async({params}) => {
    const {id} = params
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return (
        <div className="max-w-3xl mx-auto px-6 py-10">
       
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Blog Details
        </h1>
  
       
        <div className="bg-white shadow-md rounded-lg p-8">
         
          <span className="text-sm font-semibold text-gray-500 uppercase">
            Post #{data?.id}
          </span>
         
          <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-6">
            {data?.title}
          </h2>
          
          <p className="text-gray-600 leading-7">
            {data?.body}
          </p>
        </div>
  
        
        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-block bg-[#F98866] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#e07b5a] transition duration-300"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
};

export default blogDetails;
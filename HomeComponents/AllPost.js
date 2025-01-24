import Link from "next/link";


const AllPost = async() => {
   const res=await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await res.json()
   
    return (
        // <div className="">
        //    <h1 className="text-5xl font-bold text-center">All Post Here</h1>
        //     <div className="">
        //     <ul className="flex flex-col gap-3 text-xl ">
        //     {
        //             data.slice(0,20).map(item=>(
        //                 <li key={item.id}><Link href={`/blog/${item?.id}`}>{item?.title}</Link></li>
        //             ))
        //         }
        //     </ul>
        //     <div className="py-10 mt-4">
        //        <Link href="/blog"> 
        //        <button className="btn bg-[#F98866] text-white">See All</button>
        //        </Link>
        //     </div>
        //     </div>
            
            
        // </div>

        <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 20).map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                <Link href={`/blog/${item?.id}`} className="hover:text-[#F98866] transition-colors duration-300">
                  {item?.title}
                </Link>
              </h2>
              <p className="text-gray-500 truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nibh erat...
              </p>
              <Link
                href={`/blog/${item?.id}`}
                className="mt-4 inline-block text-[#F98866] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="btn px-8 py-3 bg-[#F98866] text-white rounded-lg shadow-md hover:bg-[#e37456] transition-colors duration-300">
              See All
            </button>
          </Link>
        </div>
      </div>
    );
};

export default AllPost;
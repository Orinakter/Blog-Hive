import Link from "next/link";


const AllPost = async() => {
   const res=await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await res.json()
   
    return (


        <div className="max-w-7xl mx-auto px-6 py-10">
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        All Posts
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, 21).map((item, i) => (
          <Link
            key={item.id}
            href={`/blog/${item?.id}`}
            className="block shadow-md hover:shadow-xl transition duration-300 bg-white rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {i + 1}. {item?.title}
              </h2>
              <p className="text-gray-500 text-sm">
                Click to read more about this post.
              </p>
            </div>
          </Link>
        ))}
      </div>

      
      <div className="py-10 mt-8 text-center">
        <Link href="/blog">
          <button className="px-6 py-3 bg-[#F98866] hover:bg-[#e07b5a] text-white font-semibold rounded-lg transition duration-300">
            See All Posts
          </button>
        </Link>
      </div>
    </div>

    );
};

export default AllPost;
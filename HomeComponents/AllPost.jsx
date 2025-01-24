import Link from "next/link";


const AllPost = async() => {
   const res=await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await res.json()
   
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center font-bold mb-10">All Post Here</h1>
            <div>
            <ul className="text-xl ">
            {
                    data.slice(0,20).map(item=>(
                        <li key={item.id}><Link href={`/blog/${item?.id}`}>{item?.title}</Link></li>
                    ))
                }
            </ul>
            <div className="py-10">
               <Link href="/blog"> 
               <button className="btn">See All</button>
               </Link>
            </div>
            </div>
            
            
        </div>
    );
};

export default AllPost;
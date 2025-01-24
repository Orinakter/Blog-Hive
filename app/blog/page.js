import Link from 'next/link';
import React from 'react';

const blogPage = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()


    return (
        <div>
            <ul className="text-xl ">
            {
                    data.map(item=>(
                        <li key={item.id}><Link href={`/blog/${item?.id}`}>{item?.title}</Link></li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default blogPage;
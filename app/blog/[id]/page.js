import React from 'react';

const blogDetails = async({params}) => {
    const {id} = params
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return (
        <div>
            <h1>{data?.id}</h1>
            <h3>{data?.title}</h3>
            <p>{data?.body}</p>
        </div>
    );
};

export default blogDetails;
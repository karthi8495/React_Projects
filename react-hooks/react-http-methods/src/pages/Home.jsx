import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Home() {
  
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        setPosts(response.data);
    })
    .catch(error =>{
        console.error('Error Fetching posts:', error);
    });
  },[]);


  return (
    <div>
        <h2 className='text-4xl font-semibold'>All Posts</h2>
        <div className='space-y-4 mt-4'>
            {posts.map(post => (
                <div key={post.id} className='bg-white p-4 rounded-md shadow-md'>
                    <h3 className='text-xl font-semibold'>{post.title}</h3>
                    <p className='text-gray-600'>{post.body}</p>
                    <div className='mt-4 flex gap-2'>
                        <Link to={`/edit/${post.id}`} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Edit</Link>
                        <Link to={`/delete/${post.id}`} className='bg-red-500 text-white px-4 py-2 rounded-md'>Delete</Link>
                    </div>
                </div>
            ))}
        </div>
        <div className='mt-6'>
            <Link to={'/create'} className='bg-yellow-500 text-white px-4 py-2 rounded-md'>Create New Post</Link>
        </div>
    </div>
  )
}

export default Home
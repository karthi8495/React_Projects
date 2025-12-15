import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
            userId: 1
        }).then(response => {
            console.log('Post created:', response.data);
            navigate('/');
        }).catch(error => {
            console.log('Error creating post:', error);
        });
    }


  return (
    <div>
        <h2 className='text-2xl font-semibold'>Create a New Post</h2>
        <div className='mt-4'>
            <input type='text' placeholder='Title'
              value = {title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full p-2 border rounded-md'></input>
              <textarea placeholder='Body'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className='w-full p-2 border rounded-md mt-2'></textarea>
              <button onClick={handleSubmit} className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>Submit Post</button>
        </div>
    </div>
  )
}

export default CreatePost
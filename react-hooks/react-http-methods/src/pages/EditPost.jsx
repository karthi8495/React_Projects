import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/${id}')
    .then(response => {
        setTitle(response.data.title);
        setBody(response.data.body);
    })
    .catch(error =>{
        console.error('Error Fetching posts:', error);
    });
  },[id]);



    const handleUpdate = async() => {
        await axios.patch('https://jsonplaceholder.typicode.com/posts/${id}', {
            title,
            body  
        }).then(response => {
            console.log('Post Updated:', response.data);
            navigate('/');
        }).catch(error => {
            console.log('Error updating post:', error);
        });
    }


  return (
    <div>
        <h2 className='text-2xl font-semibold'>Create Post</h2>
        <div className='mt-4'>
            <input type='text' placeholder='Title'
              value = {title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full p-2 border rounded-md'></input>
              <textarea placeholder='Body'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className='w-full p-2 border rounded-md mt-2'></textarea>
              <button onClick={handleUpdate} className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>Update Post</button>
        </div>
    </div>
  )
}

export default EditPost
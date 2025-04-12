import React, { useState } from 'react'

const CommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const addComment = async () => {
        const res = await fetch(`/api/articles/${articleName}/add-comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, text: comment })
        })
        const data = await res.json()
        setArticleInfo(data);
        console.log(data)
        setUsername('')
        setComment('')
    }
    return (
        <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
                <h3 className='text-lg font-bold mb-4 text-gray-900'>
                    Leave a Comment
                </h3>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Name: 
                </label>
                <input type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='username' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4' />
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Comment: 
                </label>
                <textarea placeholder='Comment' 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4' />
                <button onClick={(e) => addComment()}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                    Add Comment
                </button>
            </form>
    )
}

export default CommentForm
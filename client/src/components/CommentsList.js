import React from 'react'

const CommentsList = ({ comments }) => {
    return (
        <>
        <h3 className='sm:text-2xl text-xl font-bold my-6 text-gray-900'>
            Comments
        </h3>
        {comments.map((comment, index) => (
            <div key={index} className='bg-gray-100 p-4 rounded-lg mb-4'>
                <h4 className='text-xl font-semibold'>{comment.username}</h4>
                <p className='mt-1 mb-4 text-gray-700'>{comment.text}</p>
            </div>
        ))}
        </>
    )
}

export default CommentsList
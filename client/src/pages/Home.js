import React from 'react'

const Home = () => {
    return (
        <div className='mb-20'>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                Hello, Welcome to my Blog
            </h1>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                This is a simple blog application built with React and Express.
            </p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                You can create, read, update and delete posts.
            </p>
            <p className='mx-auto leading-relaxed text-base mb-4'>
                You can also comment on posts.
            </p>
        </div>
    )
}

export default Home
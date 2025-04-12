import React from 'react'
import { Link } from 'react-router-dom';

const Articles = ({articles}) => {
    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className='p-4 md:w-1/2'>
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <Link to={`/article/${article.name}`} className='block relative h-48 rounded overflow-hidden'>
                            <img alt='blog' className='object-cover object-center w-full h-full block' src={article.thumbnail} />
                        </Link>
                        <div className='p-6'>
                            <Link key={index} to={`/article/${article.name}`} className='title-font text-lg font-medium text-gray-900 mb-3'>
                                {article.title}
                            </Link>
                            <p className='leading-relaxed mb-3 text-gray-500'>
                                {article.content[0].substring(0,115)}...
                            </p>
                            <div className='flex items-center flex-wrap '>
                                <Link to={`/article/${article.name}`} className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Articles
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'
//Pages
import NotFound from './NotFound'
//Components
import Articles from '../components/Articles'
import CommentsList from '../components/CommentsList'
import CommentForm from '../components/CommentForm'

const Article = () => {
    const { name } = useParams();
    const article = articles.find((article) => article.name === name);
    const [articleInfo, setArticleInfo] = useState({ comments: [] });

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(`/api/articles/${name}`);
            const data = await res.json();
            console.log(data);
            setArticleInfo(data);
        }
        fetchComments();
    }, [name]);

    if (!article) {
        return <NotFound />
    }
    const otherArticles = articles.filter((article) => article.name !== name)
    return (
        <div>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                This is {article.title} Article
            </h1>
            {article.content.map((paragraph, index) => (
                <p key={index} className='mx-auto leading-relaxed text-base mb-4'>
                    {paragraph}
                </p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <CommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>
                Other Articles
            </h1>
            <div className='flex flex-wrap -m-4'>
                <Articles articles={otherArticles} />
            </div>
        </div>
    )
}
export default Article;
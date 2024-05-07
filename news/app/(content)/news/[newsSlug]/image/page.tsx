import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

const NewsImagePage = ({ params }: { params: { newsSlug: string } }) => {
    const newsSlug = params.newsSlug;
    const news = DUMMY_NEWS.find(news => newsSlug === news.slug);
    if (!news) {
        notFound();
    }
    return (
        <div className='fullscreen-image'>
            <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
    );
};

export default NewsImagePage;

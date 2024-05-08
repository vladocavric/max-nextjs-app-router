import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import { getNewsItemFromDB } from '@/lib/news';

const NewsImagePage = async ({ params }: { params: { newsSlug: string } }) => {
    const newsSlug = params.newsSlug;
    // const news = DUMMY_NEWS.find(news => newsSlug === news.slug);
    const news = await getNewsItemFromDB(newsSlug);
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

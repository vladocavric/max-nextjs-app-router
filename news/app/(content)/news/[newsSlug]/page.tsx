import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsItemFromDB } from '@/lib/news';

export const generateMetadata = async ({ params }: { params: { newsSlug: string } }) => {
    const newsSlug = params.newsSlug;
    // const news = DUMMY_NEWS.find(news => newsSlug === news.slug);
    const news = await getNewsItemFromDB(newsSlug);
    if (!news) {
        notFound();
    }

    return {
        title: `${news.title} - News`,
        description: news.content,
    };
};

const NewsDetailsPage = async ({ params }: { params: { newsSlug: string } }) => {
    const newsSlug = params.newsSlug;
    // const news = DUMMY_NEWS.find(news => newsSlug === news.slug);
    const news = await getNewsItemFromDB(newsSlug);

    if (!news) {
        return;
    }

    return (
        <article className='news-article'>
            <header>
                <Link href={`/news/${newsSlug}/image`}>
                    <img src={`/images/news/${news.image}`} alt={news.title} />
                </Link>
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
    );
};

export default NewsDetailsPage;

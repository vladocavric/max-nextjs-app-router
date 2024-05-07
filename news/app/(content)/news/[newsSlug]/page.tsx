import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = ({ params }: { params: { newsSlug: string } }) => {
    const newsSlug = params.newsSlug;
    const news = DUMMY_NEWS.find(news => newsSlug === news.slug);
    if (!news) {
        notFound();
    }

    return {
        title: `${news.title} - News`,
        description: news.content,
    };
};

const NewsDetailsPage = ({ params }: { params: { newsSlug: string } }) => {
    const newsSlug = params.newsSlug;
    const news = DUMMY_NEWS.find(news => newsSlug === news.slug);

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

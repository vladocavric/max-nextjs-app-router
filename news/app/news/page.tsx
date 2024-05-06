import React from 'react';
import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <ul className='news-list'>
                {DUMMY_NEWS.map(news => (
                    <li key={news.id}>
                        <Link href={`/news/${news.slug}`}>
                            <Image src={`/images/news/${news.image}`} alt={news.title} width={500} height={500} />
                            <span>{news.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NewsPage;

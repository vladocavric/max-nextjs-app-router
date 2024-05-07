'use client';
import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';

const InterceptedNewsImagePage = ({ params }: { params: { newsSlug: string } }) => {
    const router = useRouter();

    const newsSlug = params.newsSlug;
    const news = DUMMY_NEWS.find(news => newsSlug === news.slug);
    if (!news) {
        notFound();
    }
    return (
        <>
            <div className='modal-backdrop' onClick={router.back} />
            <dialog className='modal' open>
                <h1>intercepted route</h1>
                <div className='fullscreen-image'>
                    <img src={`/images/news/${news.image}`} alt={news.title} />
                </div>
            </dialog>
        </>
    );
};

export default InterceptedNewsImagePage;

import React from 'react';
import { notFound, useRouter } from 'next/navigation';
import { getNewsItemFromDB } from '@/lib/news';
import ModalBackdrop from '@/components/modal-backdrop';

const InterceptedNewsImagePage = async ({ params }: { params: { newsSlug: string } }) => {
    const newsSlug = params.newsSlug;
    const news = await getNewsItemFromDB(newsSlug);

    if (!news) {
        notFound();
    }
    return (
        <>
            <ModalBackdrop />
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

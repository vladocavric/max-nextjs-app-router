import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsList = ({ newsList }: { newsList: any[] }) => {
    return (
        <>
            <ul className='news-list'>
                {newsList.map(news => (
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

export default NewsList;

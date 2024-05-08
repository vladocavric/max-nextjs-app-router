import React from 'react';

import NewsList from '@/components/news/news-list';
import { getAllNewsFromDB } from '@/lib/news';

const NewsPage = async () => {
    // const response = await fetch('http://localhost:8080/news');

    // if (!response.ok) {
    //     throw new Error('failed to fetch data');
    // }

    // const news = await response.json();

    const news = await getAllNewsFromDB();

    return (
        <>
            <h1>News Page</h1>
            {news && <NewsList newsList={news} />}
        </>
    );
};

export default NewsPage;

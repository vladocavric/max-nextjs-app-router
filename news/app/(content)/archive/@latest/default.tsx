import { getLatestNewsFromDB } from '@/lib/news';
import React from 'react';
import NewsList from '@/components/news/news-list';

const LatestPage = async () => {
    const news = await getLatestNewsFromDB();
    return <NewsList newsList={news} />;
};

export default LatestPage;

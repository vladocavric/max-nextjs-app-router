import { getLatestNews } from '@/lib/news';
import React from 'react';
import NewsList from '@/components/news/news-list';

const LatestPage = () => {
    const news = getLatestNews();
    return <NewsList newsList={news} />;
};

export default LatestPage;

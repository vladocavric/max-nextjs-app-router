import NewsList from '@/components/news/news-list';
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from '@/lib/news';
import React from 'react';
import Link from 'next/link';

const FilterYearPage = ({ params }: { params: { filters: string } }) => {
    const selectedYear = params.filters?.[0];
    const selectedMonth = params.filters?.[1];
    let links = selectedYear ? getAvailableNewsMonths(selectedYear) : getAvailableNewsYears();
    let news;
    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
    }
    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    }
    const newsPart = !news || news.length < 1 ? 'No news for selected criteria' : <NewsList newsList={news} />;

    if (
        (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
        (selectedMonth && !getAvailableNewsMonths(+selectedYear).includes(+selectedYear))
    ) {
        throw new Error('invalid filter');
    }

    return (
        <>
            <header id='archive-header'>
                <nav>
                    <ul>
                        {links.map((link: any) => (
                            <li key={link}>
                                <Link href={selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div>{newsPart}</div>
        </>
    );
};

export default FilterYearPage;

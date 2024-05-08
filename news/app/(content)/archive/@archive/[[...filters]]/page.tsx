import NewsList from '@/components/news/news-list';
import {
    getNewsForYearFromDB,
    getAvailableNewsYearsFromDB,
    getAvailableNewsMonthsFromDB,
    getNewsForYearAndMonthFromDB,
} from '@/lib/news';
import React, { Suspense } from 'react';
import Link from 'next/link';

const FilterHeader = async ({
    year,
    month,
}: {
    year: string | number | undefined;
    month: string | number | undefined;
}) => {
    let availableYears = await getAvailableNewsYearsFromDB();
    let availableMonths = await getAvailableNewsMonthsFromDB(year);
    let links = year ? availableMonths : availableYears;

    if ((year && !availableYears.includes(year)) || (month && !availableMonths.includes(month))) {
        throw new Error('invalid filter');
    }
    return (
        <header id='archive-header'>
            <nav>
                <ul>
                    {links.map((link: any) => (
                        <li key={link}>
                            <Link href={year ? `/archive/${year}/${link}` : `/archive/${link}`}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

const FilteredNews = async ({
    year,
    month,
}: {
    year: string | number | undefined;
    month: string | number | undefined;
}) => {
    let news;
    if (year && !month) {
        news = await getNewsForYearFromDB(year);
    }
    if (year && month) {
        news = await getNewsForYearAndMonthFromDB(year, month);
    }

    const newsPart = !news || news.length < 1 ? 'No news for selected criteria' : <NewsList newsList={news} />;
    return <>{newsPart}</>;
};

const FilterYearPage = async ({ params }: { params: { filters: string } }) => {
    const selectedYear = params.filters?.[0];
    const selectedMonth = params.filters?.[1];

    return (
        <>
            <Suspense fallback={<h3>loading filters</h3>}>
                <FilterHeader year={selectedYear} month={selectedMonth} />
            </Suspense>
            <Suspense fallback={<h3>loading filtered news</h3>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    );
};

export default FilterYearPage;

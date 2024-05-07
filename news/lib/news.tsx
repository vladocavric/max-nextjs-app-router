import { DUMMY_NEWS } from '@/dummy-news';

export function getAllNews() {
    return DUMMY_NEWS;
}

export function getLatestNews() {
    return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
    return DUMMY_NEWS.reduce((years: any, news) => {
        const year = new Date(news.date).getFullYear();
        if (!years.includes(year)) {
            years.push(year);
        }
        return years;
    }, []).sort((a: any, b: any) => b - a);
}

export function getAvailableNewsMonths(year: any) {
    return DUMMY_NEWS.reduce((months: any, news) => {
        const newsYear = new Date(news.date).getFullYear();
        if (newsYear === +year) {
            const month = new Date(news.date).getMonth();
            if (!months.includes(month)) {
                months.push(month + 1);
            }
        }
        return months;
    }, []).sort((a: any, b: any) => b - a);
}

export function getNewsForYear(year: any) {
    return DUMMY_NEWS.filter(news => new Date(news.date).getFullYear() === +year);
}

export function getNewsForYearAndMonth(year: any, month: any) {
    return DUMMY_NEWS.filter(news => {
        const newsYear = new Date(news.date).getFullYear();
        const newsMonth = new Date(news.date).getMonth() + 1;
        return newsYear === +year && newsMonth === +month;
    });
}

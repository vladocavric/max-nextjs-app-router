import React, { ReactNode, Suspense } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Meal } from '@/types/meals';
export const metadata = {
    title: 'all meals',
};

const MealsPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created
                    <span className={styles.highlight}> by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={styles.cta}>
                    <Link href='/meals/share'>Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main>
                <Suspense fallback={<p className={styles.loading}>Fetching Meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
};

const Meals = async () => {
    const meals: Meal[] = await getMeals();
    return (
        <>
            <MealsGrid meals={meals} />
        </>
    );
};

export default MealsPage;

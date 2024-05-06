import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getOneMeal } from '@/lib/meals';

import { Meal } from '@/types/meals';

import styles from './page.module.scss';

const MealsDetailsPage = async ({ params }: { params: { slug: string } }) => {
    const meal: Meal = await getOneMeal(params.slug);

    if (!meal) {
        notFound();
    }

    let { title, image, summary, instructions, creator, creator_email } = meal;

    instructions = instructions ? instructions.replace(/\n/g, '<br />') : instructions;
    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={image} alt={title} fill sizes='100%' />
                </div>
                <div className={styles.headerText}>
                    <h1>{title}</h1>
                    <p className={styles.creator}>
                        by <a href={`mailto:${creator_email}`}>{creator}</a>
                    </p>
                    <p className={styles.summary}>{summary}</p>
                </div>
            </header>
            <main>
                {instructions && (
                    <p className={styles.instructions} dangerouslySetInnerHTML={{ __html: instructions }}></p>
                )}
            </main>
        </>
    );
};

export default MealsDetailsPage;

import Link from 'next/link';
import Image from 'next/image';
import { Meal } from '@/types/meals';

import styles from './meal-item.module.scss';

const MealItem = ({ title, slug, image, summary, creator }: Meal) => {
    return (
        <article className={styles.meal}>
            <header>
                <div className={styles.image}>
                    <Image src={image} alt={title} fill sizes='100%' />
                </div>
                <div className={styles.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={styles.content}>
                <p className={styles.summary}>{summary}</p>
                <div className={styles.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
};

export default MealItem;

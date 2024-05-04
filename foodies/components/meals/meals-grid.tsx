import React from 'react';
import styles from './meals-grid.module.scss';
import { Meal } from '@/types/meals';
import MealItem from './meal-item';

const MealsGrid = ({ meals }: { meals: Meal[] }) => {
    return (
        <ul className={styles.meals}>
            {meals &&
                meals.map(meal => (
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                ))}
        </ul>
    );
};

export default MealsGrid;

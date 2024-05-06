import fs from 'node:fs';
import { Meal } from '@/types/meals';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export const getMeals = async (): Promise<Meal[]> => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    // throw new Error("something went wrong");

    const meals = db.prepare('SELECT * FROM meals').all() as Meal[];
    return meals
};

export const getOneMeal = async (slug: string): Promise<Meal> => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
};

export const saveMeal = async (meal: Meal) => {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = meal.instructions ? xss(meal.instructions) : meal.instructions;
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);

    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), error => {
        if (error) {
            throw new Error('saving image failed');
        }
    });

    meal.image = `/images/${fileName}`;
    db.prepare(`INSERT INTO meals
    (   title,
        slug,
        image,
        summary,
        creator,
        instructions,
        creator_email) VALUES( 
            @title,
            @slug,
            @image,
            @summary,
            @creator,
            @instructions,
            @creator_email)`).run(meal);
};

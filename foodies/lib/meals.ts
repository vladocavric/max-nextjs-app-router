// import Database from 'better-sqlite3';
// const db = new Database('foobar.db', options);
// db.pragma('journal_mode = WAL');

import sql from 'better-sqlite3'

const db = sql('meals.db')

export const getMeals = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000))
    return db.prepare('SELECT * FROM meals').all()
}
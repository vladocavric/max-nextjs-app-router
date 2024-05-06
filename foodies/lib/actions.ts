// @ts-nocheck
'use server'


import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalid = (value: string) => {
    return !value || value.trim() === ''
}

export const shareMeal = async (formData: FormData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        instructions: formData.get('instructions'),
        creator_email: formData.get('email'),
        image: formData.get('image'),
    };

    if (
        isInvalid(meal.title) ||
        isInvalid(meal.summary) ||
        isInvalid(meal.creator) ||
        isInvalid(meal.creator_email) ||
        meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        // throw new Error('invalid data');
        return { message: 'invalid data' }

    }

    await saveMeal(meal)
    revalidatePath('/meals', 'page')
    redirect('/meals')
};
'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
// import { Meal } from "@/types/meals";

export const shareMeal = async (formData: FormData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        creator: formData.get('name'),
        instructions: formData.get('instructions'),
        creator_email: formData.get('email'),
        image: formData.get('image'),
    };

    await saveMeal(meal)
    redirect('/meals')
};
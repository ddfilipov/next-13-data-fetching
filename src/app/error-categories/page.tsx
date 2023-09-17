import FoodCategories from "@/atomic/organism/foodCategories";
import getMealCategories from "@/utils/getMealCategories";

export default async function ErrorCategoriesPage() {
    const mealCategories = await getMealCategories(500, true);
    return (
        <>
            <h2>(error-categories.tsx)</h2>
            <FoodCategories mealCategories={mealCategories} />
        </>
    );
}

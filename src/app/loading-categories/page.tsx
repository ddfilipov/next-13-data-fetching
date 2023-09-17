import FoodCategories from "@/atomic/organism/foodCategories";
import getMealCategories from "@/utils/getMealCategories";

export default async function LoadingCategoriesPage() {
    const mealCategories = await getMealCategories(1500);
    return (
        <>
            <h2>(loading-categories.tsx)</h2>
            <FoodCategories mealCategories={mealCategories} />
        </>
    );
}

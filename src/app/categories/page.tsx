import FoodCategories from "@/atomic/organism/foodCategories";
import getMealCategories from "@/utils/getMealCategories";

export default async function CategoriesPage() {
    const mealCategories = await getMealCategories();
    return (
        <>
            <h2>(categories.tsx)</h2>
            <FoodCategories mealCategories={mealCategories} />
        </>
    );
}

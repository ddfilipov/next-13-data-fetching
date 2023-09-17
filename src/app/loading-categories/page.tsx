import FoodCategories from "@/atomic/organism/foodCategories";
import getMealCategories from "@/utils/getMealCategories";

export default async function CategoriesPage() {
    const mealCategories = await getMealCategories(1500);
    return <FoodCategories mealCategories={mealCategories} />;
}

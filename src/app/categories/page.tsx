import MainArea from "@/atomic/organism/mainArea";
import getMealCategories from "@/utils/getMealCategories";

export default async function CategoriesPage() {
    const mealCategories = await getMealCategories();
    return <MainArea mealCategories={mealCategories} />;
}

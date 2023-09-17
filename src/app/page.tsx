import MainArea from "@/atomic/organism/mainArea";
import getMealCategories from "@/utils/getMealCategories";

export default async function Home() {
    const mealCategories = await getMealCategories();
    return <MainArea mealCategories={mealCategories} />;
}

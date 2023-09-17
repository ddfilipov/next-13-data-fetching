export default async function getMealCategories() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const mealCategories = await res.json();
    return mealCategories.categories;
}

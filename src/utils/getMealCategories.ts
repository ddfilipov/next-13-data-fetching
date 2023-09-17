async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function getMealCategories(ms: number = 0, shouldReturnError?: boolean) {
    await delay(ms);
    try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const mealCategories = await res.json();
        // console.log(mealCategories);
        if (!mealCategories.categories || shouldReturnError) {
            throw new Error("There has been an error, please try again");
        }
        return mealCategories.categories;
    } catch (err: any) {
        console.log("que hay aquiiiiiiiiiii", err);
        console.log("string", err);
        return err;
    }
}

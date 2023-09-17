import MainArea from "@/atomic/organism/mainArea";
import getMealCategories from "@/utils/getMealCategories";
import { GetServerSideProps } from "next";
import { Fragment } from "react";

export default async function Home() {
    const mealCategories = await getMealCategories();
    console.log("what's happening??", JSON.stringify(mealCategories));
    return <MainArea mealCategories={mealCategories} />;
}

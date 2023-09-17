import MainArea from "@/atomic/organism/mainArea";
import { GetServerSideProps } from "next";
import { Fragment } from "react";

export default async function Home() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await res.json();
    console.log("what's happening??", JSON.stringify(data.categories));
    return <MainArea mealCategories={data.categories} />;
}

import MainArea from "@/atomic/organism/mainArea";
import { GetServerSideProps } from "next";
import { Fragment } from "react";

export default async function Home() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log("what's happening??", JSON.stringify(data.results));
    return <MainArea pokemon={data.results} />;
}

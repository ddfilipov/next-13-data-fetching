"use client";
import ErrorScreen from "@/atomic/molecules/errorScreen";

export default function Error({ error }: { error: Error }) {
    // console.log("lemme see that error:::::", error);
    return <ErrorScreen />;
}

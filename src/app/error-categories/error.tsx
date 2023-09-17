"use client";
import ErrorScreen from "@/atomic/molecules/errorScreen";

export default function Error({ error }: { error: Error }) {
    return <ErrorScreen />;
}

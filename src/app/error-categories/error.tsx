"use client";
import ErrorScreen from "@/atomic/molecules/errorScreen";

export default function Error({ error }: { error: Error }) {
    return (
        <>
            <h2>(error-categories.tsx)</h2>
            <ErrorScreen errorMessage={error.message} />
        </>
    );
}

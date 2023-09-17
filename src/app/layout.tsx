"use client";
import Footer from "@/atomic/organism/footer";
import Header from "@/atomic/organism/header";
import "./globals.css";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 40px 40px auto 40px;
    min-height: 100vh;
    gap: 5px;
    button {
        max-width: 100px;
    }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <html>
            <body>
                <Container>
                    <Header />
                    <button onClick={() => router.back()}>GO BACK</button>
                    <div>{children}</div>
                    <Footer />
                </Container>
            </body>
        </html>
    );
}

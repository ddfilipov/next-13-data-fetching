"use client";
import Footer from "@/atomic/organism/footer";
import Header from "@/atomic/organism/header";
import "./globals.css";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 40px auto 40px;
    min-height: 100vh;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <Container>
                    <Header />
                    <div>{children}</div>
                    <Footer />
                </Container>
            </body>
        </html>
    );
}

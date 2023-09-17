"use client";
import Footer from "@/atomic/organism/footer";
import Header from "@/atomic/organism/header";
import { Fragment } from "react";
// import "./globals.css";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    grid-template-columns: 1;
    grid-template-rows: 3;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Container>
                <Header />
                <div>{children}</div>
                <Footer />
            </Container>
        </div>
    );
}

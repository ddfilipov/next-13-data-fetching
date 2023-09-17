"use client";
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
                <div>HEADER</div>
                <div>{children}</div>
                <div>FOOTER</div>
            </Container>
        </div>
    );
}

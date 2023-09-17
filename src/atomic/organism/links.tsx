"use client";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    place-self: center;
    place-items: center;
    border: 1px solid white;
    text-align: center;
    max-width: 100%;
    height: 100%;
`;

const StyledList = styled.div`
    display: flex;
    place-content: center;
    border: 1px solid white;
    text-align: center;
    width: 100%;
    height: 100%;
    list-style: none;
    align-items: center;
    gap: 10px;
    a {
        border-radius: 5px;
        padding: 25px;
        border: 1px solid white;
    }
`;

const Links: FC = () => {
    return (
        <Container>
            <StyledList>
                <Link href={"/categories"}>To Categories 📜</Link>
                <Link href={"/loading-categories"}>To LOADING Categories 🔵🔵🔵</Link>
                <Link href={"/error-categories"}>To ERROR Categories ❗</Link>
                <Link href={"/not-found"}>To NOT-FOUND Categories ❔</Link>
            </StyledList>
        </Container>
    );
};

export default Links;

"use client";
import { IMealCategories } from "@/types/meal-categories.interface";
import { FC } from "react";
import styled from "styled-components";

interface LoadingScreenProps {
    loadingMessage: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    place-content: center;
    place-self: center;
    height: 100%;
    width: 100%;
    span {
        font-size: 8rem;
    }
`;

const LoadingScreen: FC<LoadingScreenProps> = ({ loadingMessage = "LOADING..." }) => {
    return (
        <Container>
            <span>{loadingMessage}</span>
        </Container>
    );
};

export default LoadingScreen;

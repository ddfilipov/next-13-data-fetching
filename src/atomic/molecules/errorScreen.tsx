"use client";
import { IMealCategories } from "@/types/meal-categories.interface";
import { FC } from "react";
import styled from "styled-components";

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

const ErrorScreen: FC = () => {
    return (
        <Container>
            <span>There has been an error 😞</span>
        </Container>
    );
};

export default ErrorScreen;

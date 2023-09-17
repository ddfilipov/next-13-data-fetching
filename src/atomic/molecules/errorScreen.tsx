"use client";
import { FC } from "react";
import styled from "styled-components";

interface ErrorScreenProps {
    errorMessage: string;
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

const ErrorScreen: FC<ErrorScreenProps> = ({ errorMessage }) => {
    return (
        <Container>
            <span>{errorMessage}</span>
        </Container>
    );
};

export default ErrorScreen;

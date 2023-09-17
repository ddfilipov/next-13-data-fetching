"use client";
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

const NotFoundScreen: FC = () => {
    return (
        <Container>
            <span>Page not found, try something else</span>
        </Container>
    );
};

export default NotFoundScreen;

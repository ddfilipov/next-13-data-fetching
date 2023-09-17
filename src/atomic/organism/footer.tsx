import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    place-content: center;
    border: 1px solid white;
    text-align: center;
    width: 100%;
    height: 100%;
`;

const Footer: FC = () => {
    return (
        <Container>
            <h1>FOOTER</h1>
        </Container>
    );
};

export default Footer;

import { FC } from "react";
import styled from "styled-components";

interface MainAreaProps {
    pokemon: any;
}

const Container = styled.div`
    border: 1px solid white;
`;

const MainArea: FC = () => {
    return (
        <Container>
            <h2>Pokémon List</h2>
        </Container>
    );
};

export default MainArea;

"use client";
import { FC } from "react";
import styled from "styled-components";

interface MainAreaProps {
    pokemon: any;
}

const Container = styled.div`
    border: 1px solid white;
`;

const MainArea: FC<MainAreaProps> = ({ pokemon }) => {
    return (
        <Container>
            <h2>Pokémon List</h2>
            <ul>
                {pokemon.map((poke: { name: string; url: string }) => {
                    return <li key={poke.name}>{poke.name}</li>;
                })}
            </ul>
        </Container>
    );
};

export default MainArea;

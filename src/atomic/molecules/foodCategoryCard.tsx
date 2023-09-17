import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

interface FoodCategoryCardProps {
    name: string;
    src: string;
    alt?: string;
}

const Container = styled.div`
    border: 1px solid white;
    display: grid;
    grid-template-rows: 20px auto;
    text-align: center;
    padding: 5px;
`;

const FoodCategoryCard: FC<FoodCategoryCardProps> = ({ name, src, alt }) => {
    return (
        <Container>
            <span>{name}</span>
            <Image src={src} alt={alt ?? name} width={250} height={200} />
        </Container>
    );
};

export default FoodCategoryCard;

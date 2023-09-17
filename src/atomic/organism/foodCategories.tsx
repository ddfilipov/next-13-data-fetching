"use client";
import { IMealCategories } from "@/types/meal-categories.interface";
import { FC } from "react";
import styled from "styled-components";
import FoodCategoryCard from "../molecules/foodCategoryCard";

interface FoodCategoriesProps {
    mealCategories: IMealCategories[];
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
    h2 {
        text-align: center;
        font-size: 2rem;
    }
`;

const CardListStyled = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    list-style: none;
`;

const FoodCategories: FC<FoodCategoriesProps> = ({ mealCategories }) => {
    return (
        <Container>
            <h2>Meal categories</h2>
            <CardListStyled>
                {mealCategories.map((category) => {
                    return (
                        <li key={category.idCategory}>
                            <FoodCategoryCard name={category.strCategory} src={category.strCategoryThumb} />
                        </li>
                    );
                })}
            </CardListStyled>
        </Container>
    );
};

export default FoodCategories;

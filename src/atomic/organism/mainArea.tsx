"use client";
import { IMealCategories } from "@/types/meal-categories.interface";
import { FC } from "react";
import styled from "styled-components";
import FoodCategoryCard from "../molecules/foodCategoryCard";

interface MainAreaProps {
    mealCategories: IMealCategories[];
}

const CardListStyled = styled.ul`
    border: 1px solid white;
`;

const MainArea: FC<MainAreaProps> = ({ mealCategories }) => {
    return (
        <div>
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
        </div>
    );
};

export default MainArea;

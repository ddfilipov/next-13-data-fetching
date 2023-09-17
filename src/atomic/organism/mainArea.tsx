"use client";
import { IMealCategories } from "@/types/meal-categories.interface";
import { FC } from "react";
import styled from "styled-components";
import FoodCategoryCard from "../molecules/foodCategoryCard";

interface MainAreaProps {
    mealCategories: IMealCategories[];
}

const Container = styled.div`
    border: 1px solid white;
`;

const MainArea: FC<MainAreaProps> = ({ mealCategories }) => {
    return (
        <Container>
            <h2>Meal categories</h2>
            <ul>
                {mealCategories.map((category) => {
                    return (
                        <li>
                            <FoodCategoryCard name={category.strCategoryDescription} src={category.strCategoryThumb} />
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
};

export default MainArea;

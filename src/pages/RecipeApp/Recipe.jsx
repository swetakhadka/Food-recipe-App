import React, { useEffect } from "react";
import RecipeCard from "../../components/cards/RecipeCard";
import styles from "./Recipe.module.css";
import { Link } from "react-router-dom";
import {
  getAllRecipesByCategories,
  getAllRecipesByCategory,
  getMealBySearchTerm,
} from "../../apis/recipe";
import SearchField from "../../components/cards/common/SearchField";

export default function Recipes() {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("Chicken");
  const [meals, setMeals] = React.useState([]);

  useEffect(() => {
    getRecipesByCategories();
  }, []);
  useEffect(() => {
    getMealsByCategory();
  }, [selectedCategory]);

  const getRecipesByCategories = () => {
    getAllRecipesByCategories().then((res) => {
      setCategories(res);
    });
  };
  const getMealsByCategory = () => {
    getAllRecipesByCategory(selectedCategory).then((res) => {
      setMeals(res);
    });
  };
  const filterByName = (name) => {
   getMealBySearchTerm(name).then((res) => {
  setMeals(res);
   });
   };
  return (
    <>

      <div className={styles.recipeCardsWrapper}>
        {meals?.map((recipe) => (
        
        
          <Link
            to={`/recipe/${recipe.idMeal}`}
            className={styles.recipeCardWrapper}
            key={recipe.idMeal}
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { resolvePath } from "react-router-dom";
import { getMealsByFirstLetter } from "../../apis/recipe";
import styles from "./Recipe.module.css";
import { letters } from "../../utils/letters";
import Recipes from "./Recipe";
import RecipeCard from "../../components/recipecards/cards/RecipeCard";
import { Link } from "react-router-dom";

export default function RecipesByLetters() {
  const [selectedLetter, setCurrentLetter] = useState("A");
  const [meals, setMeals] = React.useState([]);

  useEffect(() => {
    getMealsByFirstLetter(selectedLetter).then((res) => {
      setMeals(res);
    });
  }, [selectedLetter]);

  const handleLetterBySelection = (letter) => {
    setCurrentLetter(letter.toUpperCase());
  };

  return (
    <div>
      Recipes By letters
      <div className={styles.LetterWrapper}>
        {letters.map((letter) => (
          <div onClick={() => handleLetterBySelection(letter)} keys={letter}>
            {letter}
          </div>
        ))}
      </div>
      <div className={styles.recipeCardsWrapper}>
        {meals?.map((recipe) => (
          <Link
            to={`/recipe/${recipe.idMeal}`}
            className={styles.recipeCardsWrapper}
            key={recipe.idMeal}
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}

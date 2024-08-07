import React, { useEffect } from "react";
import { getMealDetail } from "../../apis/recipe";
import { useParams } from "react-router";
import ReactPlayer from "react-player";

export default function RecipeDetail() {
  const [RecipeDetails, setRecipeDetails] = React.useState([]);
  const { id } = useParams();
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    getMealDetail("53050").then((res) => {
      setRecipeDetails(res);
    });
  };

  return (
    <div>
      {RecipeDetails?.strYoutube ? (
        <ReactPlayer url={RecipeDetails?.strYoutube} width="100%" />
      ) : (
        <img src={RecipeDetails?.strMealThumb} alt={""} />
      )}
      <div className={StyleSheet.ingredientMeasureWrapper}>
        <div className="display-grid gap2">
          <h4>Ingridient</h4>
          {Array.from({ length: 20 }).map((item, index) => (
            <>
              {RecipeDetails?.[`strIngriedient${index + 1}`] ? (
                <span>{RecipeDetails?.[`strIngredient${index + 1}`]}</span>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

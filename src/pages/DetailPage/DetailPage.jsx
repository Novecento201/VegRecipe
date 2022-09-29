import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./detailpage.css";

const DetailPage = () => {
  const [detail, setDetail] = useState({});
  const [nutritionDetail, setNutritionDetail] = useState({});
  const [ingredientDetail, setIngredientDetail] = useState([]);
  const [activeTab, setActiveTab] = useState("details");
  const { id } = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const detailData = await data.json();
    setDetail(detailData);
    console.log(detailData);

    fetchNutritionDetail();
    fetchIngredientDetail();
  };

  const fetchNutritionDetail = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const nutritionData = await data.json();
    setNutritionDetail(nutritionData);
    console.log(nutritionDetail);
  };

  const fetchIngredientDetail = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const ingredientData = await data.json();
    setIngredientDetail(ingredientData.ingredients);
    console.log(ingredientDetail);
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (Object.keys(detail).length === 0) return "Loading...";

  return (
    <article className="container" id="container-detailPage">
      <img
        src={detail.image}
        alt={`image of ${detail.title}`}
        className="image-details"
      />
      <div className="container-details">
        <h3 className="title-details">{detail.title}</h3>
        <div className="minor-info-details">
          <div>
            <span>{nutritionDetail.calories}</span> calories{" "}
          </div>
          <div>
            <span>{nutritionDetail.carbs}</span> carbs{" "}
          </div>
          <div>
            <span>{nutritionDetail.fat}</span> fat{" "}
          </div>
          <div>
            <span>{nutritionDetail.protein}</span> protein{" "}
          </div>
        </div>
        <div className="major-info-details">
          <button
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>

          {activeTab === "details" && (
            <div dangerouslySetInnerHTML={{ __html: detail.summary }}></div>
          )}
          {activeTab === "ingredients" && (
            <div>
              <div>
                {ingredientDetail.map((ingredient) => (
                  <div key={ingredient.name} className="ingredient">
                    <div>
                      <img
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                        alt={`image of ${ingredient.name}`}
                        className="ingredient-image"
                      />
                      <p className="ingredient-name">
                        {ingredient.name.charAt(0).toUpperCase() +
                          ingredient.name.slice(1)}
                      </p>
                    </div>
                    <p className="ingredient-value">
                      {ingredient.amount.metric.value}{" "}
                      {ingredient.amount.metric.unit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "instructions" &&
            (detail.analyzedInstructions.length === 0 ? (
              <div>No instructions</div>
            ) : (
              <div>
                {detail.analyzedInstructions[0].steps.map((step) => (
                  <div key={step.number} className="instructions-info">
                    <span className="span-instructions">-</span> {step.step}
                    <hr />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </article>
  );
};

export default DetailPage;

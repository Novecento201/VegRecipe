import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/Card/Card";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const { type } = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}$tags=vegetarian&number=18`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
    console.log(cuisine[0]);
  };

  useEffect(() => {
    getCuisine(type);
  }, [type]);

  if (!cuisine?.length) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h2 className="title-cards">
        <strong className="title">{type}</strong> popular vegetarian recipes
      </h2>

      <div className="container-cards">
        {cuisine.map((recipe) => (
          <Link
            to={`/detail/${recipe.id}`}
            key={recipe.id}
            className="card-link"
          >
            <Card recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;

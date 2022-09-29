import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/Card/Card";

const SearchFeed = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { search } = useParams();

  const getSearched = async (name) => {
    setIsLoading(true);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${name}&tags=vegetarian`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    setIsLoading(false);
    console.log(searchedRecipes);
  };

  useEffect(() => {
    getSearched(search);
  }, [search]);

  return (
    <div className="container">
      {isLoading && "Loading..."}

      {!isLoading && (
        <h2 className="title-cards">You searched for vegetarian {search}</h2>
      )}

      {!isLoading && searchedRecipes.length === 0 && (
        <p className="title-cards">
          There is no vegetarian plate named "{search}"
        </p>
      )}

      <div className="container-cards">
        {searchedRecipes.map((recipe) => (
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

export default SearchFeed;

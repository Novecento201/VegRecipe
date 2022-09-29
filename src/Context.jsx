import { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRandomVegRecipes();
  }, []);

  const getRandomVegRecipes = async () => {
    const check = localStorage.getItem("randomVegRecipes");

    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9&tags=vegetarian`
      );

      const data = await api.json();

      localStorage.setItem("randomVegRecipes", JSON.stringify(data.recipes));

      setRecipes(data.recipes);
    }
  };

  return (
    <Context.Provider
      value={{
        recipes,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Cuisine from "../Cuisine/Cuisine";
import Nav from "../Nav/Nav";
import { Context } from "../../Context";
import Card from "../../components/Card/Card";

const Home = () => {
  const { recipes } = useContext(Context);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route
          path="/"
          element={
            <div className="container">
              <h2 className="title-cards">Popular vegetarian recipes</h2>
              <div className="container-cards">
                {recipes.map((recipe) => (
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
          }
        />
      </Routes>
    </div>
  );
};

export default Home;

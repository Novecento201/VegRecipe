import "./card.css";

const Card = ({ recipe }) => {
  const { image, title, readyInMinutes, extendedIngredients } = recipe;
  return (
    <div className="container-card">
      <img src={image} alt="" className="image-card" />
      <div className="content-card">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Card;

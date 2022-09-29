import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="header-title">
          VegRecipes
        </Link>
        <Search />
      </div>
    </header>
  );
};

export default Header;

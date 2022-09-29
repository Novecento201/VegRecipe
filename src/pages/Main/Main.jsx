import "./main.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import SearchFeed from "../SearchFeed/SearchFeed";
import DetailPage from "../DetailPage/DetailPage";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/searched/:search" element={<SearchFeed />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default Main;

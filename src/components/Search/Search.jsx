import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./search.css";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/searched/" + input);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-container">
        <FaSearch className="form-icon" onClick={handleSubmit} />
        <input
          className="form-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;

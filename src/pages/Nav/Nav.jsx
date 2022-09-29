import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [checked, setChecked] = useState("");

  return (
    <nav className="nav container">
      <div className="nav-container">
        Famous cuisines :
        <Link
          to="/"
          className={`nav-icon ${checked === "Popular" ? "checked" : ""}`}
          onClick={() => setChecked("Popular")}
        >
          Popular
        </Link>
        <Link
          to="/cuisine/European"
          className={`nav-icon ${checked === "European" ? "checked" : ""}`}
          onClick={() => setChecked("European")}
        >
          European
        </Link>
        <Link
          to="/cuisine/American"
          className={`nav-icon ${checked === "American" ? "checked" : ""}`}
          onClick={() => setChecked("American")}
        >
          American
        </Link>
        <Link
          to="/cuisine/Latin American"
          className={`nav-icon ${
            checked === "Latin American" ? "checked" : ""
          }`}
          onClick={() => setChecked("Latin American")}
        >
          Latin American
        </Link>
        <Link
          to="/cuisine/Korean"
          className={`nav-icon ${checked === "Korean" ? "checked" : ""}`}
          onClick={() => setChecked("Korean")}
        >
          Korean
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

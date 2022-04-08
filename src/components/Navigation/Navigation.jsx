import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.sass";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink to="/" className="nav__link" activeClassName="active">
            Форма
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav__link" activeClassName="active">
            Превью
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

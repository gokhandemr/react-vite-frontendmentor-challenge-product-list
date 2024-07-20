import React from "react";
// Style
import style from "./style.module.css";
// Router
import {Link, NavLink} from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <>
        <h1>
          <Link to="/">Groceries</Link>
        </h1>
      </>
      <nav className={style.headerNav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;

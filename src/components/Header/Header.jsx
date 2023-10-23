import React, { useState } from "react";
import styles from "./Headre.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";


export const Header = () => {

  return (
    <header className={`${"container"} ${styles.header}`}>
      <div className={styles.header__content}>
      <Link to="/"><img src={logo} /></Link>
        <nav className={styles.header__nav}>
          <Link to="/beginners">Для новичков</Link>
          <Link to="/advanced">Для продвинутых</Link>
          <Link to="/characters">Персонажи</Link>
          <Link to="/enemies">Враги</Link>
          <Link to="/forum">Форум</Link>
          <Link to="/authorization">Авторизация</Link>
          <Link to="/profile">Login</Link>
        </nav>
      </div>
    </header>
  );
};

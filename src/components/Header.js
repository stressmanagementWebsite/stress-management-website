import React, { useState, useEffect } from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import "../styles/index.sass";

const Header = props => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState("stage");
  const [logoVisible, setLogoClassName] = useState(true);

  const timeOut = logoVisible === true ? 0 : 1000;

  const setLogo = logoVisible => {
    setTimeout(() => setLogoClassName(logoVisible), timeOut);
  };

  return (
    <div className={`header header-${position}`}>
      <div
        className={`header-items-container ${logoVisible ? "closed" : "open"}`}
      >
        <div
          className={`header-logo ${logoVisible ? "closed" : "open"}`}
          style={{ backgroundImage: `url(${props.content?.logo?.url})` }}
        />
        <div className={`language-switcher ${logoVisible ? "closed" : "open"}`}>
          <a
            className={`language-item ${props.language === "en" &&
              "language-item-active"}`}
            href="/en"
          >
            EN
          </a>
          <a
            className={`language-item ${props.language === "ua" &&
              "language-item-active"}`}
            href="/ua"
          >
            UA
          </a>
          <a
            className={`language-item ${props.language === "ru" &&
              "language-item-active"}`}
            href="/ru"
          >
            RU
          </a>
        </div>
      </div>
      <div
        className={`burger ${logoVisible ? "closed" : "open"}`}
        onClick={() => {
          setShowMenu(!showMenu);
          setLogo(!logoVisible);
        }}
      >
        <div className="burger_line" />
        <div className="burger_line" />
        <div className="burger_line" />
      </div>
      <div className={`navItems_container ${showMenu ? "open" : "closed"}`}>
        {props.content?.links?.map(item => (
          <div
            className={`navItem navItem-${position}`}
            key={item.label}
            onClick={() => {
              setShowMenu(!showMenu);
              setLogo(!logoVisible);
            }}
          >
            <a className={position} href={item.href}>
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

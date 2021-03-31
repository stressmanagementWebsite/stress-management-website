import React, { useState, useEffect } from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import "../styles/index.sass";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState("stage");
  const [logoVisible, setLogoClassName] = useState(true);

  const timeOut = logoVisible === true ? 0 : 1000;

  const setLogo = logoVisible => {
    setTimeout(() => setLogoClassName(logoVisible), timeOut);
  };

  return (
    <div
      className={`header header-${position}`}
      onClick={() => {
        setShowMenu(!showMenu);
        setLogo(!logoVisible);
      }}
    >
      <div className={`burger ${showMenu ? "open" : "closed"}`}>
        <div className="burger_line" />
        <div className="burger_line" />
        <div className="burger_line" />
      </div>
      <div
        className={`header-logo ${logoVisible ? "closed" : "open"}`}
        style={{ backgroundImage: `url(${props.content?.logo?.url})` }}
      />
      <nav className={`navItems_container ${showMenu ? "open" : "closed"}`}>
        {props.content?.links?.map(item => (
          <div className={`navItem navItem-${position}`}>
            <Link className={position} to={item.href}>
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Header;

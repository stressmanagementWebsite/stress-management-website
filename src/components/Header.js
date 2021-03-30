import React, { useState, useEffect } from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import "../styles/index.sass";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState("stage");
  const [logoVisible, setLogoClassName] = useState(true);

  const timeOut = logoVisible === true ? 0 : 990;

  const setLogo = (logoVisible) => {
    setTimeout(() => setLogoClassName(logoVisible), timeOut);
  };

  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          header: datoCmsHeader {
            logo {
              alt
              url
            }
            links {
              href
              label
            }
          }
        }
      `}
      render={data => (
        data && <div
          className={`header header-${position}`}
          onClick={() => {
            setShowMenu(!showMenu);
            setLogo(!logoVisible);
          }}
        >
          <div className={`burger ${!logoVisible ? "open" : "closed"}`}>
            <div className="burger_line" />
            <div className="burger_line" />
            <div className="burger_line" />
          </div>
          <div
            className={`header-logo ${logoVisible ? "closed" : "open"}`}
            style={{ backgroundImage: `url(${data?.header?.logo?.url})` }}
          />
          <nav className={`navItems_container ${showMenu ? "open" : "closed"}`}>
            {data?.header?.links?.map(item => (
              <div className={`navItem navItem-${position}`}>
                <Link className={position} to={item?.href}>
                  {item?.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    />
  );
};

export default Header;

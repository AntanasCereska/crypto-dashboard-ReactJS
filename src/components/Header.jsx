import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import NavItem from "./NavItem";
import { navData } from "../Data/NavData";
import * as AiIcons from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(true);
  const showNav = () => setNav(!nav);
  return (
    <div>
      <div className="header">
        <IconContext.Provider value={{ className: "nav-icon" }}>
          <FaIcons.FaBars onClick={showNav} />
        </IconContext.Provider>
        <h1 className="header-title">CryptoNews</h1>
      </div>
      <div className={nav ? "nav nav-active" : "nav"}>
        <IconContext.Provider value={{ className: "nav-icon" }}>
          <AiIcons.AiOutlineClose onClick={showNav} />
        </IconContext.Provider>
        {navData.map((item) => {
          return (
            <NavItem
              showNav={showNav}
              activeClassName="is-active"
              link={item.link}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;

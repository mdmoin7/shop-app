import React from "react";
import { MenuType } from "../types";
import { NavLink } from "react-router-dom";

type MenuProps = {
  menuList: MenuType[];
};

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {props.menuList.map((item) => (
        <li className="nav-item" key={item.navLink}>
          <NavLink className="nav-link" to={item.navLink}>
            {item.navText}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Menu;

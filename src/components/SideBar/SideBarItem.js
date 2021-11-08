import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBarItem.scss";

function SideBarItem({ name, icons, children }) {
  const [showItem, setShowItem] = useState(false);
  // console.log({ name, icons, children });
  const handleClickGetIndex = () => {
    setShowItem(!showItem);
  };

  return (
    <div className="sidebar-menu">
      <div className="sb_menu_container" onClick={handleClickGetIndex}>
        <div className={showItem ? "sb_link sb_selected" : "sb_link"}>
          <div className="sb_menu_button">
            <div className="sb_icons_container">
              {icons}
              <p style={{ marginLeft: 10, fontWeight: 530 }}>{name}</p>
            </div>
            <div className={showItem ?"sb_icons__arrow--rolate" :"sb_icons__arrow"}>
              <ArrowRightAltIcon  className="sb_icons__arrows"/>
            </div>
          </div>
        </div>
      </div>
      <ul className={showItem ? "sidebar__ul ul--acitve" : "ul--hide"}>
        {children.map((item, index) => (
          <li className="side-item__li" key={index}>
            <NavLink
              className="sb_link"
              exact
              to={item.link}
              activeClassName="sb_selected"
            >
              <p className="sidebar-item__text-link">{item.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBarItem;

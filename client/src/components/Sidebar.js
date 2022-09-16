import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navlinks = ["Dashboard", "Session", "Profile"];

  return (
    <>
      {navlinks.map((el) => (
        <ul className="list-group" key={el}>
          <Link
            className="list-group-item drawerItem"
            to={`/${el}`}
            as={NavLink}
          >
            {el}
          </Link>
        </ul>
      ))}
    </>
  );
}

export default Sidebar;

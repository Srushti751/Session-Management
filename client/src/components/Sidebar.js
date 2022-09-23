import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../context/userContext";

function Sidebar() {
  const navlinks = ["dashboard", "session", "profile"];

  const currentUser = useContext(Context);

  return (
    <>
      {/* {navlinks.map((el) => (
        <ul className="list-group" key={el}>
          {console.log("cONTEXT", currentUser)}
          <Link
            className="list-group-item drawerItem"
            to={`/${el}`}
            as={NavLink}
          >
            {el}
          </Link>
        </ul>
      ))} */}
      <ul class="list-group">
        <Link
          className="list-group-item drawerItem"
          to="/dashboard"
          as={NavLink}
        >
          Dashboard
        </Link>
      </ul>
      {currentUser ? (
        <>
          <ul class="list-group">
            <Link
              className="list-group-item drawerItem"
              to="/session"
              as={NavLink}
            >
              Session
            </Link>
          </ul>
          <ul class="list-group">
            <Link
              className="list-group-item drawerItem"
              to="/profile"
              as={NavLink}
            >
              Profile
            </Link>
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Sidebar;

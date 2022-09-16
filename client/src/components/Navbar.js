import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";

import CustomDrawer from "../extras/CustomDrawer";

function Navbar({ name }) {
  return (
    <div className="navStyle">
      <Nav className="" activeKey="/home">
        <Nav.Item className="linkStyle mr-2">
          <Nav.Link className="linkStyle" as={NavLink} to="/home">
            <h2> {name}</h2>
          </Nav.Link>
        </Nav.Item>
        <NavDropdown
          id="nav-dropdown-dark-example "
          menuVariant="dark"
          title="Profile"
          variant="dark"
          className="linkStyle"
        >
          <NavDropdown.Item to="/login" as={NavLink}>
            Login
          </NavDropdown.Item>
          <NavDropdown.Item to="/profile" as={NavLink}>
            Profile
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
}

export default Navbar;

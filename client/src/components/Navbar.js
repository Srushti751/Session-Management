import React, { useContext, useEffect } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";

import CustomDrawer from "../extras/CustomDrawer";
import { Context } from "../context/userContext";

function Navbar({ name }) {
  let currentUser = useContext(Context);

  const navigate = useNavigate();

  const logoutUser = () => {
    try {
      localStorage.removeItem("user");
      navigate("/dashboard");
    } catch (error) {}
  };

  return (
    <div className="navStyle">
      <Nav className="">
        <Nav.Item className="linkStyle mr-2">
          <Nav.Link className="linkStyle" as={NavLink} to="/dashboard">
            <h2> {name}</h2>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="linkStyle mr-2">
          <NavDropdown
            id="nav-dropdown-dark-example "
            menuVariant="dark"
            title={currentUser ? "Profile" : "Login"}
            variant="dark"
            className="linkStyle"
          >
            <NavDropdown.Item to="/login" as={NavLink}>
              Login
            </NavDropdown.Item>
            {currentUser && (
              <>
                <NavDropdown.Item to="/profile" as={NavLink}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => logoutUser()} as={NavLink}>
                  Logout
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;

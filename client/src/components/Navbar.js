import React, { useContext, useEffect, useState } from "react";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt from "jwt-decode";

import { Context } from "../context/userContext";
import CustomDrawer from "../extras/CustomDrawer";

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  let currentUser = useSelector((state) => state.loginUserReducer.currentUser);

  const navigate = useNavigate();
  const token = currentUser && currentUser.token;
  const user = token && jwt(token); // decode your token here
  console.log("User", user && user);

  const logoutUser = () => {
    try {
      localStorage.removeItem("user");
      navigate("/dashboard");
    } catch (error) {}
  };

  return (
    <div className="navStyle">
      <Nav className="">
        {console.log("currentUser", currentUser.token)}
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
            {currentUser ? (
              <>
                <NavDropdown.Item to="/profile" as={NavLink}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => logoutUser()} as={NavLink}>
                  Logout
                </NavDropdown.Item>
              </>
            ) : (
              <NavDropdown.Item to="/login" as={NavLink}>
                Login
              </NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav.Item>
        {/* <Nav.Item>
          <Button
            className="btn bg-transparent border-0"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="https://img.icons8.com/bubbles/100/000000/user.png"
              className="img-radius mt-2"
              alt="User"
              width={50}
              height={50}
            />
          </Button>
        </Nav.Item> */}
        {/* <CustomDrawer /> */}
      </Nav>
    </div>
  );
}

export default Navbar;

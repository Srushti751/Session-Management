import React, { useContext } from "react";
import "../App.css";
import { AiOutlineMenu } from "react-icons/ai";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context/userContext";
import Profile from "../pages/Profile";

function CustomDrawer() {
  const [isOpen, setIsOpen] = React.useState(true);
  const navlinks = ["Dashboard", "Session", "Profile"];
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const currentUser = useContext(Context);
  return (
    <>
      <button className="drawerBtn" onClick={toggleDrawer}>
        {/* <AiOutlineMenu /> */}
        <img
          src="https://img.icons8.com/bubbles/100/000000/user.png"
          className="img-radius mt-2"
          alt="User-Profile-Image"
          width={50}
          height={50}
        />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="drawerStyle"
        overlayColor="#fff"
        // style={{ background: "black" }}
      >
        {/* {navlinks.map((el) => (
          <ul class="list-group">
            <Link
              className="list-group-item drawerItem"
              to={`/${el}`}
              as={NavLink}
            >
              {el}
            </Link>
          </ul>
        ))} */}
        {console.log("cntext", currentUser)}
        {/* <ul class="list-group">
          <Link
            className="list-group-item drawerItem"
            to="/dashboard"
            as={NavLink}
          >
            Dashboard
          </Link>

          <Link
            className="list-group-item drawerItem"
            to="/session"
            as={NavLink}
          >
            Session
          </Link>

          <Link
            className="list-group-item drawerItem"
            to="/profile"
            as={NavLink}
          >
            Profile
          </Link>
        </ul> */}
        <Profile />
      </Drawer>
    </>
  );
}

export default CustomDrawer;

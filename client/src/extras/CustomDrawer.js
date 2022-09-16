import React from "react";
import "../App.css";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

function CustomDrawer() {
  const [isOpen, setIsOpen] = React.useState(true);
  const navlinks = ["Dashboard", "Session", "Profile"];
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="drawerStyle"
        overlayColor="#fff"
        // style={{ background: "black" }}
      >
        {navlinks.map((el) => (
          <ul class="list-group">
            <li class="list-group-item drawerStyle">{el}</li>
          </ul>
        ))}
      </Drawer>
    </>
  );
}

export default CustomDrawer;

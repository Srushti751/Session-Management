import React, { useContext, useEffect, useState } from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import '../App.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import jwt from 'jwt-decode';
import Drawer from '@mui/material/Drawer';

import { Context } from '../context/userContext';
import CustomDrawer from '../extras/CustomDrawer';
import { SwipeableDrawer } from '@mui/material';

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  let currentUser = useSelector((state) => state.loginUserReducer.currentUser);

  const navigate = useNavigate();
  const token = currentUser && currentUser.token;
  const user = token && jwt(token); // decode your token here
  // console.log('User', user && user);

  const logoutUser = () => {
    try {
      localStorage.removeItem('user');
      navigate('/dashboard');
    } catch (error) {}
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="navStyle">
      <Nav style={{ width: '100%' }}>
        {/* {console.log('currentUser', currentUser.token)} */}
        <Nav.Item className="linkStyle">
          <Nav.Link className="linkStyle" as={NavLink} to="/dashboard">
            <h2> {name}</h2>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          className="linkStyle"
          style={{
            display: 'flex',
            width: '80%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavDropdown
            id="nav-dropdown-dark-example "
            menuVariant="dark"
            title={currentUser ? 'Profile' : 'Login'}
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
          <Nav.Item className="linkStyle">
            <Button onClick={toggleDrawer('right', true)}>+</Button>
          </Nav.Item>
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
      <Drawer
        anchor={'right'}
        open={isOpen}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        <div
          style={{
            display: 'flex',
            margin: '2%',
            width: '250px',
            flexDirection: 'column',
            rowGap: '2%',
          }}
        >
          <div>ddfdfdf</div>
          <div>ddfdfdf</div>
          <div>ddfdfdf</div>
          <div>ddfdfdf</div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;

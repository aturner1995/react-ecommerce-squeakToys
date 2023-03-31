import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, Button, Image} from 'react-bootstrap';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [open,setOpen] = useState(false);

  return (
    <>
      <Navbar bg="white" expand="lg" sticky='top'>
        <Container>
          <NavLink to='/'>
          <Image
              src="/images/logo.png"
              height='50'
              className="d-inline-block align-top"
              alt="Squeek Toys"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/products/4" className='me-3'>
                <Button className="d-flex align-items-center mt-0 prime-custom text-white">Shop Now</Button>
              </NavLink>
              <NavLink to="#" className='me-3'>
                <SearchIcon />
              </NavLink>
              <NavLink to="#" className='me-3'>
                <PersonOutlineOutlinedIcon />
              </NavLink>
              <NavLink to="#" className='cart-icon' onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span className='cart-items'>0</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {open && <Cart/>}
    </>
  );
}

export default Navigation

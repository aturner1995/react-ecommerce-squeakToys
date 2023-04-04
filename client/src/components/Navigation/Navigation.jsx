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
import Search from '../Search/Search';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const [open,setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const product = useSelector((state) => state.cart.products);

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
          <Navbar.Collapse id="basic-navbar-nav" className='nav-icons'>
            <Nav className="ms-auto">
              <NavLink to="/products/All Dog" className='me-3 text-center'>
                <Button className="d-flex align-items-center mt-0 prime-custom text-white">Shop Now</Button>
              </NavLink>
              <NavLink to="#" className='me-3' onClick={() => {
                setSearchOpen(!searchOpen)
                setOpen(false);
              }}>
                <SearchIcon />
              </NavLink>
              <NavLink to="#" className='me-3'>
                <PersonOutlineOutlinedIcon />
              </NavLink>
              <NavLink to="#" className='cart-icon text-center' onClick={() => {
                setOpen(!open);
                setSearchOpen(false);
              }}>
                <ShoppingCartOutlinedIcon />
                <span className='cart-items'>{product.length}</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {open && <Cart/>}
      {searchOpen && <Search/>}
    </>
  );
}

export default Navigation;

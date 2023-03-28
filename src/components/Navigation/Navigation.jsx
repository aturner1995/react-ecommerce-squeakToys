import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/logo.png"
              height='50'
              className="d-inline-block align-top"
              alt="Squeek Toys"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className='me-3'>
                <Button href='#' className="d-flex align-items-center mt-0 prime-custom text-white">Shop Now</Button>
              </Nav.Link>
              <Nav.Link href="#" className='me-3'>
                <SearchIcon />
              </Nav.Link>
              <Nav.Link href="#" className='me-3'>
                <PersonOutlineOutlinedIcon />
              </Nav.Link>
              <Nav.Link href="#" className='cart-icon'>
                <ShoppingCartOutlinedIcon />
                <span className='cart-items'>0</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css'

const Footer = () => {
  return (
    <Container className='mx-0'>
      <Row className='top'>
        <Col>
          <h2>Shop Toys</h2>
          <Stack className='top-item'>
            <div className='dog-type'>Large Dogs</div>
            <div className='dog-type'>Medium Dogs</div>
            <div className='dog-type'>Small Dogs</div>
          </Stack>
        </Col>
        <Col>
        <h2>Contact Us</h2>
          <Stack className='top-item'>
              <div>Email - aaturner1995@gmail.com</div>
              <div>Phone - (800) 123-4567</div>
              <div>
              <FacebookIcon />
              <TwitterIcon />
              </div>
            </Stack>
        </Col>
        <Col>
        <h2>Help</h2>
          <Stack className='top-item'>
            <div>FAQ</div>
            <div>Tracking Info</div>
            <div>Stores</div>
          </Stack>
        </Col>
      </Row>
      <Row className='bottom'>
        <Col>
        © Squeak Dog Toys Copyright 2023. All Rights Reserved.
        </Col>
        <Col>
        <img src="/images/payment.png" alt="Accepted payment methods" />
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
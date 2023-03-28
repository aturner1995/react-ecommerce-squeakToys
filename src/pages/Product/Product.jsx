import React from 'react';
import './Product.css';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v6753388337233359265/products/SCM09680CA.1.jpg&height=300&width=300',
    'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v4568606820089954571/products/SCM09680CA.2.jpg&height=300&width=300'
  ];

  return (
    <Container className='product'>
      <Row>
        <Col className='left' lg={6}>
          <Col className='images' lg={4}>
            <Image src={images[0]} onClick={(e) => setSelectedImg(0)} />
            <Image src={images[1]} onClick={(e) => setSelectedImg(1)} />
          </Col>
          <Col className='mainImage' lg={8}>
            <Image src={images[selectedImg]} />
          </Col>
        </Col>
        <Col className='right' lg={6}>
            <h1>Title</h1>
            <span>$49.99</span>
            <p>Description Section</p>
            <div className="quantity">
              <Button onClick={(e) => setQuantity((prev) => prev ===1 ?1 : prev-1)}>-</Button>
              {quantity}
              <Button onClick={(e) => setQuantity((prev) => prev+1)}>+</Button>
            </div>
            <Button className='add'>
              <AddShoppingCartIcon/> ADD TO CART
            </Button>
            <div className="item">
                <FavoriteBorderIcon/> Add To Wishlist
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Product
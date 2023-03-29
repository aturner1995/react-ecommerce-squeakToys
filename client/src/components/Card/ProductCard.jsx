import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>

      <Card style={{ width: '18rem' }}>
        <div className="image">
          <Card.Img variant="top" src={item.img} className='mainImage' />
          <Card.Img variant="top" src={item.img2} className='secondImage' />
        </div>
        <Card.Body>
          <Card.Title>{item.attributes.title}</Card.Title>
          <div className="prices">
            <Card.Text className='oldPrice'>
              {item.oldPrice}
            </Card.Text>
            <Card.Text className='newPrice'>
              {item.newPrice}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default ProductCard

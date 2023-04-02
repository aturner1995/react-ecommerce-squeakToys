import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: '18rem' }} className='grow'>
      <Link to={`/product/${item.id}`}>
        <div className="image">
          <Card.Img variant="top" src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} className='mainImage' />
          <Card.Img variant="top" src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url} className='secondImage' />
        </div>
      </Link>
      <Card.Body>
        <Link to={`/product/${item.id}`}>
          <Card.Title>{item.attributes.title}</Card.Title>
          <div className="prices">
            <Card.Text className='oldPrice'>
              ${item.attributes?.oldPrice}
            </Card.Text>
            <Card.Text className='newPrice'>
              ${item.attributes?.price}
            </Card.Text>
          </div>
        </Link>
        <Button className='add prime-custom' onClick={() => dispatch(addToCart({
          id: item.id,
          title: item.attributes.title,
          price: item.attributes.price,
          img: item.attributes.img.data.attributes.url,
          quantity: 1
        }))}>
          <AddShoppingCartIcon /> ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

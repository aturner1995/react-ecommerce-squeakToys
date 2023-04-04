import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import toast from 'react-hot-toast';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const notify = () => toast.success(`${item.name} Added to Cart`);
  return (
    <Card style={{ width: '18rem' }} className='grow'>
      <Link to={`/product/${item._id}`}>
        <div className="image">
          <Card.Img variant="top" src={item.img} className='mainImage' />
          <Card.Img variant="top" src={item.img2} className='secondImage' />
        </div>
      </Link>
      <Card.Body>
        <Link to={`/product/${item._id}`}>
          <Card.Title>{item.name}</Card.Title>
          <div className="prices">
            <Card.Text className='oldPrice'>
              ${item.oldPrice}
            </Card.Text>
            <Card.Text className='newPrice'>
              ${item.price}
            </Card.Text>
          </div>
        </Link>
        <Button className='add prime-custom' onClick={() => {
          dispatch(addToCart({
            id: item._id,
            title: item.name,
            price: item.price,
            img: item.img,
            quantity: 1
          }));
          notify();
        }}>
          <AddShoppingCartIcon /> ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

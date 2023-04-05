import React from 'react';
import './Cart.css';
import { Image, Button } from 'react-bootstrap';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import axios from 'axios';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const handlePayment = () => {
    axios.post(
      '/api/stripe/create-checkout-session',
      { data: products },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`
        },
      }
    )
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      {products.map(item => (
        <div className="item" key={item.id}>
          <Image src={item.img} />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>Total Price: ${totalPrice()}</span>
      </div>
      <div className="text-center">
        <Button onClick={handlePayment}>PROCEED TO CHECKOUT</Button>
      </div>
      <span className="reset text-center" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  )
}

export default Cart
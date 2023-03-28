import React from 'react';
import './Cart.css';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v6753388337233359265/products/SCM09680CA.1.jpg&height=300&width=300',
            img2: 'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v4568606820089954571/products/SCM09680CA.2.jpg&height=475&width=475',
            title: 'Big Fish Squeak Toy',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        }
    ]
  return (
    <div>
        <h1>Your Cart</h1>
        {data.map(item => (
            
        ))}
    </div>
  )
}

export default Cart
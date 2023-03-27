import React from 'react';
import './FeaturedProducts.css';
import ProductCard from '../Card/ProductCard';

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: 'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v6753388337233359265/products/SCM09680CA.1.jpg&height=300&width=300',
            img2: 'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v4568606820089954571/products/SCM09680CA.2.jpg&height=475&width=475',
            title: 'Big Fish Squeak Toy',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
        {
            id: 2,
            img: 'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v4136036574776777032/products/SCM01348CA.1.jpg&height=475&width=475',
            img2: 'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v5064066487747555899/products/SCM01348CA.3.jpg&height=475&width=475',
            title: 'Teddy Bear Dog Toy',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
        {
            id: 3,
            img: '',
            img2: '',
            title: 'Big Chew Toy',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
        {
            id: 4,
            img: '',
            img2: '',
            title: '',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
    ];
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type}Featured Products</h1>
        </div>
        <div className="bottom">
            {data.map(item => (
                <ProductCard item={item} key={item.id}/>
            )
            )}            
        </div>
    </div>
  )
}

export default FeaturedProducts
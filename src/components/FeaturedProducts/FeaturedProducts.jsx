import React from 'react'

const FeaturedProducts = (type) => {
    const data = [
        {
            id: 1,
            img: '',
            img2: '',
            title: '',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
        {
            id: 1,
            img: '',
            img2: '',
            title: '',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
        {
            id: 1,
            img: '',
            img2: '',
            title: '',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
        {
            id: 1,
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
            <h1>Featured Products</h1>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default FeaturedProducts
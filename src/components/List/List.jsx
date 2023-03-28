import React from 'react';
import './List.css';
import ProductCard from '../Card/ProductCard';
import {Row , Col } from 'react-bootstrap';

const List = () => {
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
            img: 'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v7637043482866377324/products/SCM00263CA.1.jpg&height=475&width=475',
            img2: 'https://www.petvalu.ca/ccstore/v1/images/?source=/file/v2070555295295971252/products/SCM00263CA.3.jpg&height=475&width=475',
            title: 'Kong Chew Toy',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
        {
            id: 4,
            img: 'https://i5.walmartimages.com/asr/a7f0a82d-a7f8-48f3-b60b-9b0fa772066f.7a18faacb11e4092a93fdca66a634a04.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
            img2: 'https://i5.walmartimages.com/asr/55aaea4c-0e17-4954-aa14-9907c9c5768b.152bc8126a195cf679a5f139b1e1f23c.jpeg',
            title: 'Jumbo Koala Dog Toy',
            isNew: true,
            oldPrice: 49.99,
            newPrice: 39.99
        },
    ];
  return (
    <div>
        <Row>
            {data.map(item => (
                <Col className='product-card my-2 text-center' >
                     <ProductCard item={item} key={item.id}/>
                </Col>
            )
            )}            
        </Row>
    </div>
  )
}

export default List
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Stack, Image } from 'react-bootstrap';
import './Products.css';
import List from '../../components/List/List';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice,setMaxPrice] = useState(100);
  const [sort,setSort] = useState(null);

  return (
    <Row className='products mx-0'>
      <Image src='/images/hero.jpeg' alt='Dog playing with toy' fluid className='top-img'/>
      <Col sm={2}>
        <Stack className='left my-4'>
          <Stack className='filterItem'>
            <h3>Product Categories</h3>
            <div className="inputItem">
              <input type="checkbox" id='1' value={1} />
              <label htmlFor="1">Large Dog Toys</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id='2' value={2} />
              <label htmlFor="2">Medium Dog Toys</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id='3' value={3} />
              <label htmlFor="3">Small Dog Toy</label>
            </div>
          </Stack>
          <div className="filterItem my-2">
            <h3>Filter by Price</h3>
            <span>0</span>
            <input type="range" min={0} max={100} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
          <div className="filterItem my-2">
            <h3>Sort By</h3>
            <div className="inputItem">
              <input type="radio" id='asc' value='asc' name='price' onChange={(e) => setSort('asc')}/>
              <label htmlFor="asc">Price (Lowest First)</label>
            </div>
            <div className="inputItem">
              <input type="radio" id='dsc' value='dsc' name='price' onChange={(e) => setSort('dsc')}/>
              <label htmlFor="dsc">Price (Highest First)</label>
            </div>
          </div>
        </Stack>
      </Col>
      <Col className='right my-4' sm={10}>
      <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </Col>
    </Row>
  )
}

export default Products
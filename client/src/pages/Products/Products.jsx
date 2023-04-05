import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Stack, Image } from 'react-bootstrap';
import './Products.css';
import List from '../../components/List/List';
import useFetch from '../../Hooks/useFetch';

const Products = () => {
  const catId = (useParams().id);
  const [maxPrice,setMaxPrice] = useState(30);
  const [sort,setSort] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading } = useFetch(
    `/api/products/subcategories?id=${catId}`
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    setSelectedSubCat(checked ? [...selectedSubCat,value] : selectedSubCat.filter((item) => item !== value))
  }

  return (
    <Row className='products mx-0'>
      <div className="cat-img">
        <h1>{catId} Toys</h1>
        <Image src={'/images/dog-toys-cat.jpg'} alt='Dog playing with toy' fluid className='top-img'/>
      </div>
      <Col sm={3}>
        <Stack className='left my-4'>
          <Stack className='filterItem'>
            <h3>Product Categories</h3>
            {data.map(item => (
                <div className="inputItem" key={item}>
                  <input type="checkbox" id={item} value={item} onChange={handleChange}/>
                  <label htmlFor={item} className='mx-1'>{item}</label>
                </div>
            ))}
          </Stack>
          <div className="filterItem my-2">
            <h3>Filter by Price</h3>
            <span>$0</span>
            <input type="range" min={0} max={30} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>${maxPrice}</span>
          </div>
          <div className="filterItem my-2">
            <h3>Sort By</h3>
            <div className="inputItem">
              <input type="radio" id='asc' value='asc' name='price' onChange={(e) => setSort('asc')}/>
              <label htmlFor="asc">Price (Lowest First)</label>
            </div>
            <div className="inputItem">
              <input type="radio" id='desc' value='desc' name='price' onChange={(e) => setSort('desc')}/>
              <label htmlFor="dsc">Price (Highest First)</label>
            </div>
          </div>
        </Stack>
      </Col>
      <Col className='right my-4' sm={9}>
      <List catId={catId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCat}/>
      </Col>
    </Row>
  )
}

export default Products
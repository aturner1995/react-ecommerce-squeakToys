import './FeaturedProducts.css';
import ProductCard from '../Card/ProductCard';
import {Row , Col, Container } from 'react-bootstrap';
import useFetch from "../../Hooks/useFetch";

const FeaturedProducts = ({type}) => {

  const { data, loading } = useFetch(
    `/api/products?type=${type.toLowerCase()}`
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(data)
  return (
    <Container className='featuredProducts my-5'>
        <div className="top">
            <h1>{type} Products</h1>
        </div>
        <Row className="bottom">
            {data.map(item => (
                <Col className='product-card my-2 text-center'>
                     <ProductCard item={item} key={item._id}/>
                </Col>
            )
            )}
        </Row>
    </Container>
  )
}

export default FeaturedProducts;
import './FeaturedProducts.css';
import ProductCard from '../Card/ProductCard';
import {Row , Col, Container } from 'react-bootstrap';
import useFetch from "../../Hooks/useFetch";

const FeaturedProducts = ({type}) => {

  const { data, loading } = useFetch(
    `/products?populate=*`
  );

  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className='featuredProducts my-5'>
        <div className="top">
            <h1>{type} Products</h1>
        </div>
        <Row className="bottom">
            {data.map(item => (
                <Col className='product-card text-center'>
                     <ProductCard item={item} key={item.id}/>
                </Col>
            )
            )}
        </Row>
    </Container>
  )
}

export default FeaturedProducts;

import React from 'react';
import './List.css';
import ProductCard from '../Card/ProductCard';
import { Row, Col } from 'react-bootstrap';
import useFetch from "../../Hooks/useFetch";

const List = ({ catId, maxPrice, sort, subCat }) => {
    console.log(subCat)
    const test = subCat.map((item)=> console.log(item));
    const { data, loading } = useFetch(
        `/products?populate=*&filters[categories][id][$eq]=
        ${catId}`);
    if (loading) {
        return <p>Loading...</p>;
    }
    console.log(data);
    return (
        <div>
            <Row>
                {data.map(item => (
                    <Col className='product-card my-2 text-center' key={item.id} >
                        <ProductCard item={item} />
                    </Col>
                )
                )}
            </Row>
        </div>
    )
}

export default List
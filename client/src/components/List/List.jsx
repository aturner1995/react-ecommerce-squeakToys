import React from 'react';
import './List.css';
import ProductCard from '../Card/ProductCard';
import { Row, Col } from 'react-bootstrap';
import useFetch from "../../Hooks/useFetch";

const List = ({ catId, maxPrice, sort, subCat }) => {
    let filterUrl ='';
    let sortUrl ='';

    if (subCat && subCat.length > 0) {
        filterUrl += subCat.map(item => `&subCat=${item}`).join('');
    }
    if(sort) {
        sortUrl += `&sort=${sort}`
    }

    const { data, loading } = useFetch(
        `/api/products/categories?id=${catId}&maxPrice=${maxPrice}${filterUrl}${sortUrl}`);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <Row>
                {data.map(item => (
                    <Col className='product-card my-2 text-center' key={item._id} >
                        <ProductCard item={item} />
                    </Col>
                )
                )}
            </Row>
        </div>
    )
}

export default List;

import React from 'react';
import './List.css';
import ProductCard from '../Card/ProductCard';
import { Row, Col } from 'react-bootstrap';
import useFetch from "../../Hooks/useFetch";

const List = ({ catId, maxPrice, sort, subCat }) => {
    subCat.map((item)=> console.log(item));
    let filterUrl ='';
    let sortUrl ='';

    if (subCat) {
        filterUrl += subCat.map(item => `&[filters][sub_categories][id][$eq]=${item}`).join('');
    }
    if(sort) {
        sortUrl += `&sort=price:${sort}`
    }

    const { data, loading } = useFetch(
        `/products?populate=*&[filters][categories]=${catId}${filterUrl}&[filters][price][$lte]=${maxPrice}${sortUrl}`);
    if (loading) {
        return <p>Loading...</p>;
    }
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
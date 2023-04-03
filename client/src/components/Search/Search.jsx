import React, { useState } from 'react';
import './Search.css'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import useFetch from '../../Hooks/useFetch';
import ProductCard from '../Card/ProductCard';

const Search = () => {

    const [search, setSearch] = useState('');
    
    const { data, loading } = useFetch(`/products?populate=*&[filters][title][$contains]=${search}`);
    
    if (loading) {
        return (
            <div className='search'>
            <p>Loading...</p>;
            </div>
        )      
    }

    return (
        <div className='search'>
            <InputGroup className='p-2' onChange={(e) => setSearch(e.target.value)}>
                <Form.Control
                    placeholder="Search Products"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </InputGroup>
            {data.map(item=> (
                <ProductCard item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Search
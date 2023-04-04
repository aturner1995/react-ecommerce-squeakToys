import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <Row className='cat-row mx-0'>
            <Col lg={4} >
                <div className='category my-2'>
                <Link to={`/products/Large Dog`}>
                    <Image src='/images/cat1.jpg' alt="Large Dogs" fluid className='cat-img grow'/>
                    <Button className='cat-btn prime-custom text-white' size='lg'>
                        LARGE DOG TOYS
                    </Button>
                    </Link>
                </div>
            </Col>
            <Col lg={4}>
                <div className='category my-2'>
                <Link to={`/products/Medium Dog`}>
                    <Image src='/images/cat2.jpg' alt="Med Dogs" fluid className='cat-img grow'/>
                    <Button className='cat-btn prime-custom text-white' size='lg'>
                       MEDIUM DOG TOYS
                    </Button>
                    </Link>
                </div>
            </Col>
            <Col lg={4}> 
                <div className='category my-2'>
                <Link to={`/products/Small Dog`}>
                    <Image src='/images/cat3.jpg' alt="Small Dogs" fluid className='cat-img grow'/>
                    <Button className='cat-btn prime-custom text-white' size='lg'>
                        SMALL DOG TOYS
                    </Button>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}

export default Categories;

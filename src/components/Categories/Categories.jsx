import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import './Categories.css'

const Categories = () => {
    return (
        <Row className='cat-row mx-0'>
            <Col lg={4} >
                <div className='category my-2'>
                    <Image src='/images/cat1.jpg' alt="Large Dogs" fluid className='cat-img'/>
                    <Button className='cat-btn prime-custom text-white' href='#' size='lg'>
                        LARGE DOG TOYS
                    </Button>
                </div>
            </Col>
            <Col lg={4}>
                <div className='category my-2'>
                    <Image src='/images/cat2.jpg' alt="Med Dogs" fluid className='cat-img'/>
                    <Button className='cat-btn prime-custom text-white' href='#' size='lg'>
                        MEDIUM DOG TOYS
                    </Button>
                </div>
            </Col>
            <Col lg={4}> 
                <div className='category my-2'>
                    <Image src='/images/cat3.jpg' alt="Small Dogs" fluid className='cat-img'/>
                    <Button className='cat-btn prime-custom text-white' href='#' size='lg'>
                        SMALL DOG TOYS
                    </Button>
                </div>
            </Col>
        </Row>
    )
}

export default Categories
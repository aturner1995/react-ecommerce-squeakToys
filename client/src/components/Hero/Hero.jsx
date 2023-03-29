import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
      <div className='text-center bg-image hero-image'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white description'>
              <h1 className='mb-3'>Make Your Pup's Day with Squeak Dog Toys</h1>
              <Link to='/products/1'>
                <Button role='button' variant='light'>
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero;

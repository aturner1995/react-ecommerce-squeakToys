import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
      <div className='text-center bg-image hero-image'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white description'>
              <h1 className='mb-3'>Make Your Pup's Day with Squeak Dog Toys</h1>
              <a className='btn btn-outline-light btn-lg btn-light text-dark' href='#!' role='button'>
              Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero
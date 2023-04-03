import React from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <div>
      <Toaster />
      <Hero />
      <FeaturedProducts type={'Featured'}/>
      <Categories />
      <FeaturedProducts type={'Trending'}/>
    </div>
  )
}

export default Home
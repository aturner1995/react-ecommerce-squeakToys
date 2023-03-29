import React from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts type={'Featured'}/>
      <Categories />
      <FeaturedProducts type={'Trending'}/>
    </div>
  )
}

export default Home
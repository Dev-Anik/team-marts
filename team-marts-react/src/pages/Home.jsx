import React from 'react'
import HomeHero from '../components/Home/HomeHero'
import ShortDesc from '../components/Home/ShortDesc'
import WhyUs from '../components/Home/WhyUs'
import ProductType from '../components/Home/ProductType'

const Home = () => {
  return (
    <>
      <HomeHero></HomeHero>
      <ShortDesc></ShortDesc>
      <WhyUs></WhyUs>
      <ProductType></ProductType>
    </>
  )
}

export default Home
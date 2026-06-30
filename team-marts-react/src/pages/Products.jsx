import React, { useState } from 'react'
import ProductsHero from '../components/ProductsHero'
import ProductCards from '../components/ProductCards'

const Products = () => {
  const [selectedType, setSelectedType] = useState('')
  return (
    <>
      <ProductsHero setSelectedType={setSelectedType} />
      <ProductCards selectedType={selectedType}/>
    </>
  )
}

export default Products
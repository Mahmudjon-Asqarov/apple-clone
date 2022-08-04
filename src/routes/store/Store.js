import React from 'react'
// import Header from '../../components/header/Header';
import ProductCarousel from '../../components/store page/ProductCarousel.js'
import StoreBanner from '../../components/store page/StoreBanner'
import NewCarousel from '../../components/store page/AppleNewsCarousel.js'

const Store = () => {


  
  return (
    <div>
      <StoreBanner/>
      <ProductCarousel/>
      <NewCarousel/>
    </div>
  )
}

export default Store
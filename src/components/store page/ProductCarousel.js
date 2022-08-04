import React from 'react'
import './ProductCarousel.css'

const ProductCarousel = () => {

    const iphone_products = [
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958490',
          product_name: 'Mac'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1630706116000',
          product_name: 'iPhone'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000',
          product_name: 'iPad'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645052537409',
          product_name: 'Apple Watch'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633718741000',
          product_name: 'AirPods'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000',
          product_name: 'AirTag'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783378000',
          product_name: 'AppleTV'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633355783000',
          product_name: 'HomePod mini'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958489',
          product_name: 'Accessories'
        },
        {
          product_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1635264815000',
          product_name: 'Apple Gift Card'
        }
      ]
    
    

    
    
      // const apple_accessories = [
      //   {
      //     acc_name: 'In with the new',
      //     acc_quote: 'Discover fresh new colors for your favorite accessories',
      //     acc_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-new-accessories-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052150646',
      //     portrait: true
      //   },
      //   {
      //     acc_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645997365583',
      //     acc_situation: 'New',
      //     acc_quote: 'iPhone 13 pro silicon case with MagSafe - Nectarine',
      //     acc_price: '$49.00',
      //     portrait: false
      //   },
      //   {
      //     acc_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6G3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645509710532',
      //     acc_situation: 'New',
      //     acc_quote: 'iPhone SE Silicon Case - Chalk Pink',
      //     acc_price: '$35.00',
      //     portrait: false
      //   },
      //   {
      //     acc_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN613?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645847133062',
      //     acc_situation: 'Now with find my support',
      //     acc_quote: 'iPhone 13 pro silicon case with MagSafe - Nectarine',
      //     acc_price: '$49.00',
      //     portrait: false
      //   },
      //   {
      //     acc_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN1L3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645079879837',
      //     acc_situation: 'New',
      //     acc_quote: '45mm Flamingo Braided Solo Loop - Size 6',
      //     acc_price: '$99.00',
      //     portrait: false
      //   },
      //   {
      //     acc_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM013?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1624640873000',
      //     acc_situation: 'New',
      //     acc_quote: 'AirTag Leather Loop - Forest Green',
      //     acc_price: '$39.00',
      //     portrait: false
      //   },
      //   {
      //     acc_name: 'In with the new',
      //     acc_quote: 'Explore all Accessories',
      //     acc_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-allaccessories-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052082310',
      //     portrait: true
      //   },
      // ]
    
    
      // const apple_airpods = [
      //   {
      //     airpod_name: 'Get 6 month of Apple Music Free',
      //     airpod_quote: 'Included with purchase of select AirPods and Beats products, and HomePod mini.**',
      //     airpod_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applemusic-202112?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1638212879000',
      //     portrait: true
      //   },
      //   {
      //     airpod_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000',
      //     airpod_situation: 'Free Engraving',
      //     airpod_quote: 'AirPods (3rd generation)',
      //     airpod_price: '$179.00',
      //     portrait: false
      //   },
      //   {
      //     airpod_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2J3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1634663503000',
      //     airpod_situation: 'Free Engraving',
      //     airpod_quote: 'Beats Fit Pro True Wireless Earbuds - Sage Gray',
      //     airpod_price: '$199.00',
      //     portrait: false
      //   },
      //   {
      //     airpod_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591634795000',
      //     airpod_situation: 'Free Engraving',
      //     airpod_quote: 'AirPods Pro',
      //     airpod_price: '$249.00',
      //     portrait: false
      //   },
      //   {
      //     airpod_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-orange-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925511000',
      //     airpod_situation: 'Free Engraving',
      //     airpod_quote: 'HomePod mini - orange',
      //     airpod_price: '$99.00',
      //     portrait: false
      //   },
      //   {
      //     airpod_img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000',
      //     airpod_situation: 'Free Engraving',
      //     airpod_quote: 'AirPods max - Silver',
      //     airpod_price: '$549.00',
      //     portrait: false
      //   },
      // ]
    

  return (
    <div className='carousel'>
        {
          iphone_products.map(item => 
             <div className="apple_products">
                <div className="product">
                  <img className='product_img' src={item.product_url} alt="" />
                  <h1>{item.product_name }</h1>
                </div>
              </div>)
        }

    </div>
  )
}

export default ProductCarousel

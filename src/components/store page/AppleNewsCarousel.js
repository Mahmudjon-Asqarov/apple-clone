import React from 'react'
import './ProductCarousel.css'

const appleNewsCarousel = () => {

    const apple_news = [
        {
          name: 'IPHONE 13 PRO',
          quote: 'Oh. So. Pro.',
          price: 'Now in Alpine Green. From $999.00 or $41.62/mo. for 24 mo.',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290504',
          proto: false
        },
        {
          name: 'IPAD AIR',
          quote: 'Light.Bright.Full of might.',
          price: 'From $599 or $49.91/mo. 12 mo.†',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645636337374',
          proto: true
        },
        {
          name: 'MAC STUDIO',
          quote: 'Empower Station.',
          price: 'From $1999 or $166.58/mo. for 12 mo.†',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-mac-studio-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848581',
          proto: false
        },
        {
          name: 'STUDIO DISPLAY',
          quote: 'A sight to be bold',
          price: 'From $1599 or $133.25/mo. for 12 mo.†',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-studio-display-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848762',
          proto: false
        },
        {
          name: 'IPHONE SE',
          quote: 'Love the power,Love the price',
          price: 'From $429.00 or $17.87/mo. 24 mo.*',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-se-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052592978',
          proto: false,
          type: true
        },
        {
          name: 'IPHONE 13',
          quote: 'Your new super power',
          price: 'Now in Green. From $699.00 or $29.12/mo. 24 mo.*',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-13-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290452',
          proto: false
        },
        {
          name: 'APPLE WATCH BANDS',
          quote: 'New hues in bloom',
          price: 'Shop the latest band styles and colors.',
          img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-bands-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052880599',
          proto: false
        },
      ]

  return (
    <div className='news_carousel'>
        {
          apple_news.map(item => 
            <div className="new_products">
              <div className="product_container" style={item.proto ? {backgroundColor: '#000'} : {backgroundColor: '#fff'}}>
                <p className='item_name' style={item.proto ? {color: '#fff'} : {color: '#000'}}>{item.name}</p>
                <h1 style={item.proto ? {color: '#fff'} : {color: '#000'}}>{item.quote}</h1>
                <p className='item_quote' style={item.proto ? {color: '#fff'} : {color: '#000'}  }  >{item.price}</p>
                <img src={item.img} alt="" />
              </div>
            </div>  
          )
        }
    </div>
  )
}

export default appleNewsCarousel
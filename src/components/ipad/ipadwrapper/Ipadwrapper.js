import React from 'react';
import Ipadcards from '../ipadcards/Ipadcards';
import './Ipadwrapper.css';

const Ipadwrapper = () => {

  const ipad_product = [
    {
      product_image: "https://www.apple.com/v/ipad/home/bu/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png",
      product_color: "https://www.apple.com/v/ipad/home/bu/images/overview/compare_ipad_pro_swatches__bxn5nqwduk9y_large.png",
      product_title: "iPad Pro",
      product_motto: "The ultimate iPad experience.",
      product_price: "From $799",
      product_buy: "Buy",
      product_info: "Learn more"
    },
    {
      product_image: "https://www.apple.com/v/ipad/home/bu/images/overview/compare_ipad_air__bxjv33pk6nte_large.png",
      product_color: "https://www.apple.com/v/ipad/home/bu/images/overview/compare_ipad_air_swatches__dagugd9h3nsm_large.png",
      product_status: "New",
      product_title: "iPad Air",
      product_motto: "Powerful. Colorful. Wonderful.",
      product_price: "From $599",
      product_buy: "Order now",
      product_info: "Learn more"
    },
    {
      product_image: "https://www.apple.com/v/ipad/home/bu/images/overview/compare_ipad_10_2__fwgwy7jydtea_large.png",
      product_color: "https://www.apple.com/v/ipad/home/bu/images/overview/compare_ipad_pro_swatches__bxn5nqwduk9y_large.png",
      product_title: "iPad",
      product_motto: "Delightfully capable. Surprisingly affordable.",
      product_price: "From $329",
      product_buy: "Buy",
      product_info: "Learn more"
    },
    {
      product_image: "https://www.apple.com/v/ipad/home/bu/images/overview/compare_ipad_mini__czcsk9ukpeie_large.png",
      product_color: "https://www.apple.com/v/ipad/home/bu/images/overview/compare_ipad_air_swatches__dagugd9h3nsm_large.png",
      product_title: "iPad mini",
      product_motto: "Mega power. Mega sized",
      product_price: "From $499",
      product_buy: "Buy",
      product_info: "Learn more"
    }
  ];
  
  return (
    <div className='ipad_wrapper'>
        <h2 className="ipad_product_heading">Which iPad is right for you?</h2>
        <div className="ipad_product_container">
            {
              ipad_product.map(ipad_product => 
              <Ipadcards ipad_cards={ipad_product}/>
            )
        }
        </div>
    </div>
  )
}

export default Ipadwrapper
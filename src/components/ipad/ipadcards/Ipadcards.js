import React from 'react';
import './Ipadcards.css';

const Ipadcards = ({ipad_cards}) => {
  return (
        <div className="ipad_product_card">
                <div className="ipad_card_heading">
                  <img src={ipad_cards.product_image} alt="" />
                </div>
                <div className="ipad_card_body">
                  <img className='ipad_color_pallete' src={ipad_cards.product_color} alt="" />
                  <p className="ipad_status">{ipad_cards.product_status}</p>
                  <h2 className="ipad_product_title">{ipad_cards.product_title}</h2>
                  <p className="ipad_card_motto">{ipad_cards.product_motto}</p>
                  <p className="ipad_price_sm">{ipad_cards.product_price}</p>
                  <button className='order_btn_sm'>{ipad_cards.product_buy}</button>
                  <p className='learn_more'>{ipad_cards.product_info}</p>
                </div>
        </div>
  )
}

export default Ipadcards
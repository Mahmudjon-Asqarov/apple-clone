import React from 'react';
import './Ipadbanner.css';

const Ipadbanner = ({ipad_banner}) => {
  return (
    <div className='ipad_banner_container' style={!ipad_banner.portrait ? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
        <div className="ipad_banner_text" style={ipad_banner.portrait ? {left: "10%", top: "50%", transform: "translateY(-50%)"} : {right: "25%", top: "50%", transform: "translateY(-50%)"}}>
            <p className="ipad_status">{ipad_banner.ipad_status}</p>
            <h1 className='ipad_title'>{ipad_banner.ipad_name}</h1>
            <p className='tone'>{ipad_banner.ipad_motto}</p>
            <p className='ipad_price'>{ipad_banner.ipad_price}</p>
            <button className='order_btn'>{ipad_banner.ipad_order}</button>
            <p className='learn_more'>{ipad_banner.ipad_learn_more}</p>
            <p className="deadline">{ipad_banner.ipad_sale_date}</p>
        </div>
        <div className="ipad_img_container">
          <img className='ipad_banner_img' src={ipad_banner.ipad_image} alt="" />
        </div>
    </div>
  )
}

export default Ipadbanner
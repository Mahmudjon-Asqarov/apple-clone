import React from 'react';
import Header from '../../components/header/Header';
import Ipadbanner from '../../components/ipad/ipadbanner/Ipadbanner';
import Ipadheader from '../../components/ipad/ipadheader/Ipadheader';
import Ipadwrapper from '../../components/ipad/ipadwrapper/Ipadwrapper';
import './Ipad.css';

const Ipad = () => {
  const ipad_nav_data = [
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/ipadpro_dark__175htbn6m76u_large.svg",
      ipad_name: "iPad Pro",
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/ipadair_dark__gi1t1iqta1yu_large.svg",
      ipad_name: "iPad Air",
      ipad_status: "New"
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/ipad_dark__fe8ocv9hktim_large.svg",
      ipad_name: "iPad",
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/ipad_compare_dark__cxllw9w1tuy6_large.svg",
      ipad_name: "Compare",
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/apple_pencil_dark__c42qcvi9e802_large.svg",
      ipad_name: "Apple Pencil",
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/keyboard_dark__dtedyad0xnqu_large.svg",
      ipad_name: "Keyboards",
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/airpods_dark__ccoezo86z37m_large.svg",
      ipad_name: "AirPods",
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/ipad_acc_dark__bo0a4ftei9au_large.svg",
      ipad_name: "Accessories",
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/ipados_dark__emr7k8pfle4i_large.svg",
      ipad_name: "iPad OS",
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/chapternav/shop_ipad_dark__ekfl60g78g4m_large.svg",
      ipad_name: "Shop iPad",
    }
  ];

  const ipad_product_data = [
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/overview/hero/ipad_air__d794tkovmk02_large.jpg",
      ipad_status: "New",
      ipad_name: "iPad Air",
      ipad_motto: "Light. Bright. Full of might",
      ipad_price: "From $599",
      ipad_order: "Order now",
      ipad_learn_more: "Learn more",
      ipad_sale_date: "Available starting 3.18",
      portrait: true
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg",
      ipad_name: "iPad Pro",
      ipad_motto: "The ultimate iPad experience",
      ipad_price: "From $799",
      ipad_order: "Buy",
      ipad_learn_more: "Learn more",
      portrait: false
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/overview/hero/ipad_10_2__7yowwyyrbmaa_large.jpg",
      ipad_name: "iPad",
      ipad_motto: "Delightfully capable. Surprisingly affordable",
      ipad_price: "From $329",
      ipad_order: "Buy",
      ipad_learn_more: "Learn more",
      portrait: true
    },
    {
      ipad_image: "https://www.apple.com/v/ipad/home/bu/images/overview/hero/ipad_mini__dn6g8b0hw8om_large.jpg",
      ipad_name: "iPad Mini",
      ipad_motto: "Mega power. Mini sized",
      ipad_price: "From $499",
      ipad_order: "Buy",
      ipad_learn_more: "Learn more",
      portrait: false
    }
  ];

 
  


  return (
    <div className='ipad_container'>
        <ul className='ipad_nav'>
        {
          ipad_nav_data.map(ipad_item => 
            <Ipadheader ipad={ipad_item}/>
            )
        }
        </ul>

        <div>
        {
          ipad_product_data.map(ipad_info => 
            <Ipadbanner ipad_banner={ipad_info}/>
            )
        }
        </div>
        <Ipadwrapper/>
        
    </div>
  )
}

export default Ipad
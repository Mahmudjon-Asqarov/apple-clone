import React from 'react';
import './Ipadheader.css';

const Ipadheader = ({ipad}) => {
  return (
            <li className="ipad_item">
                <img src={ipad.ipad_image} alt="ipad img" className='ipad_img'/>
                <p className='ipad_name'>{ipad.ipad_name}</p>
                <p className='ipad_status'>{ipad.ipad_status}</p>
            </li>
  )
}

export default Ipadheader
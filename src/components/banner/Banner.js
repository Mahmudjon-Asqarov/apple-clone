import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai';

function Banner({ info }) {
  const { banner_title, banner_img, string_data, quote, portrait, banner_link_one, banner_link_two  } = info;
  return (
    <div className='banner'  >
      <div className="banner_text" style={!portrait ? { left: "15%", top: "45%", transform: "translateY(-50%)" } : {}}  >
        <h1 style={!portrait ? { color: "#fff" } : {}} >{banner_title}</h1>
        <p className='tone' style={!portrait ? { color: "#fff" } : {}}  >{string_data}</p>
        <span className='deadle' >{quote}</span>
        <div className="wrapper_banner_link">
          <div className="wrapper_banner_link"> <Link to={"/"} className='banner_link' >{banner_link_one} <AiOutlineRight /> </Link> </div>
          <div className="wrapper_banner_link"> <Link to={"/"} className='banner_link' > {banner_link_two}  <AiOutlineRight /></Link>   </div>
        </div>
      </div>
      <img className='banner_img' title={banner_title} src={banner_img} />

    </div>
  )
}

export default Banner
import React from 'react';
import './BannerFoot.css';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom'

function BannerFoot({ bannerFootData }) {
    return (
        <div className='wrapper_banner_foot'>
            {
                bannerFootData.map((element , index) =>
                    <div className='banner' key={index}  >
                        <div className="banner_text" style={!element.portrait ? { top: "35%" } : {}}>
                            <h1 style={!element.portrait ? { color: "#fff" } : {}} > {element.banner_icon} {element.banner_title}</h1>
                            <p style={!element.portrait ? { margin: "auto", color: "#aaa", width: "350px" } : {}} className='tone tone_foot' >{element.string_data}</p>
                            <span className='deadle deadle_foot' >{element.quote}</span>
                            <div className="wrapper_banner_link wrapper_banner_link_foot">
                                <div style={!element.portrait ? { display: "none" } : {}} className="wrapper_banner_link "> <Link to={"/"} className='banner_link banner_link_foot' >{element.banner_link_one} <AiOutlineRight /> </Link> </div>
                                <div className="wrapper_banner_link  "> <Link to={"/"} className='banner_link banner_link_foot' > {element.banner_link_two} {!element.portrait ? element.banner_icon_play : <AiOutlineRight />} </Link>   </div>
                            </div>
                        </div>
                        <img className='banner_img banner_img_foot' title={element.banner_title} src={element.banner_img} />
                    </div>
                )
            }
        </div>
    )
}

export default BannerFoot